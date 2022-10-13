import { System } from "./application/System";
import { StartProcesses } from "./application/application.utilities";

const system = System.instance(8000);

StartProcesses([system.listen])