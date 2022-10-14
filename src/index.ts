import { System } from "./application/application.system";
import { StartProcesses } from "./application/application.utilities";

const system = System.instance(8000);

StartProcesses([system.listen]);
