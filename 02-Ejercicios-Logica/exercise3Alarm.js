// Alarm

/*
Write a program that asks a user for the amount of seconds needed until an alarm (message) 
is executed alongside a text to show once those seconds have passed in real time.
*/

const prompt = require('prompt-sync')();
// Paquete que sirve para hacer uso de hilos (ejecutar código en paralelo).
const { Worker, isMainThread, parentPort } = require('worker_threads');

console.log('\x1Bc'); // Limpia la consola.

const getSecondsAlarm = () => {
    let secondsAlarm = 0;
    do {
        number = parseInt(prompt(`Número de segundos: `));
        if (!isNaN(number) && number > 0){
            secondsAlarm = number;
            break;
        }
        console.log("Por favor, ingrese un valor válido...");
    }while(true);
    return secondsAlarm;
}

const programAlarm = () => {
    // Este es el hilo principal
    if (isMainThread){
        // Se reciben los segundos en el hilo principal
        const secondsAlarm = getSecondsAlarm();
        // Se crea un Worker con este archivo
        const primaryThread = new Worker(__filename);
        // Enviamos los segundos al Worker.
        primaryThread.postMessage(secondsAlarm);
        // Obtiene el porcentaje del tiempo restante del Worker. 
        // message es un evento que indica que recibe algo del hilo secundario (worker).
        primaryThread.on('message', ( leftTime ) => {
            console.log(`Tiempo restante ${leftTime} segundos`);
        });
        // Obtiene la señal de termino del Worker.
        primaryThread.on('exit', () => {
            console.log("¡Tiempo finalizado!");
        });
    } else {
        // parentPort es el hilo secundario
        parentPort.on('message', ( secondsAlarm ) => {
            // leftTime obtiene los segundos especificados
            let leftTime = secondsAlarm;

            // setInterval se encargará de ir reduciendo el tiempo cada segundo, mandar el porcentaje de completado al hilo principal
            // y de terminar el hilo cuando se termine la tarea.
            const interval = setInterval(() => {
                leftTime--;
                parentPort.postMessage(leftTime);
    
                if (leftTime <= 0) {
                    // Cancela timeout creado
                    clearInterval(interval);
                    // Termina el proceso y envia el mensaje al hilo principal.
                    process.exit();
                }
            }, 1000);
        });
    }
}

programAlarm();