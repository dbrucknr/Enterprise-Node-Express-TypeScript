export const StartProcesses = async (processes: Function[]) => 
    processes.map(async (process) => await process());


// export async function StartProcesses (processes: Function[]) { 
//     return processes.map(async (process) => await process());
// }