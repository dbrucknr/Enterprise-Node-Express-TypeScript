import { DataSource, DataSourceOptions } from "typeorm";
import { TempDatabase, MainDatabase } from "./database.utilities";

export class Database {
    static _instance: Database;
    private _datasource: DataSource;
    private handler: any
    private _settings: DataSourceOptions

    private constructor() {
        this._settings = MainDatabase;
        this._datasource = new DataSource(this._settings);
        this.handler = {
            '3D000': async () => await this.create(),
            '42P04': async () => await this.connect()
        }
    }

    public async connect() {
        const instance = Database._instance;
        try {
            const connection = await instance._datasource.initialize();
            if (connection.isInitialized) {
                console.log('Database successfully connected');

                const { version } = await instance.version();
                console.log(`Database version: ${ version }`);

                const { current_database } = await instance.current();
                console.log(`Application is currently using the ${ current_database } database`);
            }
            // Return error here?
        } catch (error: any) {
            await instance.handler[error.code]()
        }
    }

    // Currently not used - I think this is implied in the DataSource object
    protected async exists(): Promise<{ oid: string }> {
        const { database } = this._settings;
        const [ response ] = await this._datasource.query(`SELECT oid FROM pg_database WHERE datname = '${ database }'`);
        return response
    }

    protected async create() {
        const { database } = this._settings; 
        console.log(`Could not find database: ${ database }`)
        const localhost = new DataSource(TempDatabase);
        const connection = await localhost.initialize();
        if (connection.isInitialized) {
            console.log(`Temporary Connection Inialized - Creating Database: ${ database }`)
            await connection.query(`CREATE DATABASE ${ database }`);
            await connection.destroy();
            console.log(`Terminating temporary`)
            await this.connect();
        }
    }

    private async current(): Promise<{ current_database: string }> {
        const [ response ] = await this._datasource.query("SELECT current_database()");
        return response
    }

    private async version(): Promise<{ version: string }> {
        const [ response ] = await this._datasource.query("SELECT version();");
        return response 
    }

    public static instance(): Database {
        if (!Database._instance) {
            Database._instance = new Database();
        }
        return Database._instance
    }
}