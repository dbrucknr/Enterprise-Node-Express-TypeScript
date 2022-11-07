import { System } from "./application/application.system";
import { Database } from "./database/database.instance";
import { StartProcesses } from "./application/application.utilities";
import { MainDatabase } from "./database/database.utilities";

const system = System.instance(8000);
const database = Database.instance();

StartProcesses([database.connect, system.listen]);
