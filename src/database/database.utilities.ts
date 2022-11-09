import { DataSourceOptions } from "typeorm";
import { config } from "dotenv";
import path from "path";

config({
    path: path.resolve(__dirname, '../../.env'),
    debug: true
});

export const MainDatabase: DataSourceOptions =
    /**
     * Operational Database Settings
     */
    {
        type: "postgres",
        host: "localhost",
        port: 5432,
        database: process.env.MAIN_DATABASE,
        synchronize: true,
        logging: false,
        entities: ["src/database/entities/*.ts"],
        migrations: ["src/migration/**/*.ts"],
        subscribers: ["src/subscriber/**/*.ts"],
    }

export const TempDatabase: DataSourceOptions =
    /**
     * Establishes a temporary connection to
     * a Postgres Service (for now checks localhost).
     * - Intended to be used to create missing DB
     */
    {
        type: "postgres",
        host: "localhost",
        port: 5432,
        database: process.env.TEMP_DATABASE,
        synchronize: false,
        logging: true
    }