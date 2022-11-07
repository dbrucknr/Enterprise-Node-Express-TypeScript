import { System } from "./application/application.system";
import { Database } from "./database/database.instance";
import { StartProcesses } from "./application/application.utilities";

const system = System.instance(8000);
const database = Database.instance({
    type: "postgres",
    host: "localhost",
    port: 5432,
    database: "enterprise",
    synchronize: true,
    logging: false,
    entities: ["src/database/entities/*.ts"],
    migrations: ["src/migration/**/*.ts"],
    subscribers: ["src/subscriber/**/*.ts"],
});

StartProcesses([database.connect, system.listen]);

