import { DataSourceOptions } from "typeorm";
import { config } from "dotenv";
import path from "path";

config({
    path: path.resolve(__dirname, '../../.env'),
    debug: true
});

export const MainDatabase: DataSourceOptions =
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
    {
        type: "postgres",
        host: "localhost",
        port: 5432,
        database: process.env.TEMP_DATABASE,
        synchronize: true,
        logging: false,
        entities: ["src/database/entities/*.ts"],
        migrations: ["src/migration/**/*.ts"],
        subscribers: ["src/subscriber/**/*.ts"],
    }