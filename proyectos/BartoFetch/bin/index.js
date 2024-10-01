#!/usr/bin/env node
import os from 'os'
import si from 'systeminformation'

async function fetchSystemInfo() {
    const cpu = await si.cpu();
    const osInfo = await si.osInfo();
    const graphics = await si.graphics();

    // Imprime la información estática una sola vez
    process.stdout.write(`OS: ${osInfo.distro} ${osInfo.release}\n`);
    process.stdout.write(`Hostname: ${os.hostname()}\n`);
    process.stdout.write(`Resolution: ${graphics.displays[0].resolutionX}/${graphics.displays[0].resolutionY}\n`);
    process.stdout.write(`Shell: ${process.env.SHELL || 'Unknown'}\n`);

    process.stdout.write(`\nCPU: ${cpu.manufacturer} ${cpu.brand} @ ${cpu.speed}GHz (${cpu.cores} cores)\n`);
    process.stdout.write(`GPU: ${graphics.controllers[0].vendor} ${graphics.controllers[0].model}\n`);
    process.stdout.write(`VRAM: ${graphics.controllers[0].vram} MB\n`);

    process.stdout.write(`CPU Temperature: ${(await si.cpuTemperature()).main} °C\n`)
    process.stdout.write(`GPU Temperature: ${graphics.controllers[0].temperatureGpu || 'N/A'}°C\n`)
    // Deja espacios para las líneas que se actualizarán
    process.stdout.write('Uptime: \n');
    process.stdout.write('Memory: \n');
    // Usa se tInterval para actualizar solo la información variable
   // Guarda las posiciones iniciales de las líneas que se van a actualizar
   const updateUptimeLine = 12;  // Suponiendo que 'Uptime' está en la línea 9
   const updateMemoryLine = 13; // Suponiendo que 'Memory' está en la línea 10

   // Usa setInterval para actualizar solo la información variable
   setInterval(async () => {
       const updatedMemory = await si.mem();  // Actualiza la memoria
       const updatedUptime = Math.floor(os.uptime() / 60);  // Actualiza el uptime

       // Mueve el cursor a la posición de la línea de uptime y actualiza
       process.stdout.write(`\x1b[${updateUptimeLine};1H`);  // Mueve el cursor a la línea de Uptime
       process.stdout.write(`\x1b[KUptime: ${updatedUptime} mins\n`); // Borra la línea y escribe la nueva información

       // Mueve el cursor a la posición de la línea de memory y actualiza
       process.stdout.write(`\x1b[${updateMemoryLine};1H`);  // Mueve el cursor a la línea de Memory
       process.stdout.write(`\x1b[KMemory: ${Math.round(updatedMemory.active / 1024 / 1024)}/${Math.round(updatedMemory.total / 1024 / 1024)} MB\n`); // Borra la línea y escribe la nueva información
   }, 1000);  // Actualiza cada segundo
}

fetchSystemInfo();

/*
kernel/Windows os
uptime:
packages
shell
cpu temperature_
GPU temperature_
*/