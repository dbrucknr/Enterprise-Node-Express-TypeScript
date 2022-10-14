import { DataSource, DataSourceOptions } from "typeorm";

export class Database {
    private _datasource: DataSource;
    private _settings: DataSourceOptions;
    static _instance: Database;

    private constructor(_settings: DataSourceOptions) {
        this._settings = _settings;
        this._datasource = new DataSource(this._settings);
    }

    public async connect() {}

    protected async exists() {}

    protected async create() {}

    private async current() {}

    public static instance(_settings: DataSourceOptions): Database {
        if (!Database._instance) {
            Database._instance = new Database(_settings)
        }
        return Database._instance
    }
}