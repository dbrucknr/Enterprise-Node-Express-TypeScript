export const StartProcesses = async (processes: Function[]) => 
    processes.map(async (process) => await process());
