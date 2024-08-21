# Command line apps / Aplicaciones desde la linea de comando
Las Aplicaciones de linea de comandos o command line apps (CLI) suelen ser el centro de herramientas para automatizar tareas. Como deploy a produccion, correr test, crear reportes, migrar datos,DevOps, y una enorme lista que continua. 
Node.js es una gran opcion para escribir CLI. 

Para crear una app de este tipo primero obviamente tenemos que crear el proyecto:
``` Bash
mkdir my-cli
cd my-cli
npm init
```
Luego crearemos una carpeta dentro del proyecto llamada bin y un archivo index.js. Adentro del index.js hacemos algo como lo siguiente:
``` Javascript
#!/usr/bin/env node

console.log('funciona');
```
Esta primera linea comienza con #! lo cual suele llamarse "shebang". Esto normalmente solo se usa en Linux o sistemas operativos UNIX para informarle al sistema que tipo de script incluye el resto del archivo.
Igualmente necesitamos escribir esta linea para que corra apropiadamente en macOS y Windows.

a continuacion abre el package.json y cambia el valor main por bin/index.js

deberia verse parecido a esto:
``` JSON
{
  "name": "cli",
  "version": "1.0.0",
  "type": "module",
  "main": "bin/index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "abraham bartoloni",
  "license": "ISC",
  "description": "",
   "bin": {
   "hello": "./bin/index.js"
 }
}
```

A continuacion ejecutamos el siguiente comando para instalar el script globalmente.
``` Bash
npm install -g .
```
Y para desinstalarlos ejecutamos:
``` Bash
npm unistall -g <nuestra-app>
```

## Configuracion del entorno.
Los desarrolladores tenemos que prestar atencion a muchas cosas cuando configuramos Nodejs apps. Todas esas aplicaciones suelen requerir un deploy y un entorno luego de que este curra. Es crucial que este entorno se configure correctamente. Si nuestro entorno de produccion posee nuestras credenciales de desarrollo esto sera un desaste.
Aca es donde entran las variables de entorno.
Los archivos .env proveen una gran solucion a la configuracion de variables de entorno, particularmente en Node.js. 
Por convencion los nombres de las variables de entorno estan capitalizados y sus valores son strings.
``` Javascript
// archivo .env
PORT = 8000;
NODE_ENV = development;
CLIENT_URL = "http://localhost:3000"
JWT_SECRET=HADSLJ2313ASDASD23
// ...
```

Cuando la aplicacion comienza a correr se crea un nuevo proceso hijo de variables de entorno adentro de process. Estas variables podemos utilizarlas en toda la aplicacion de node.js.
### process.env
process.env es una variable global que se inyecta en el runtime por node.js
por ejemplo si en archivo .env tenes una variable llamada PORT, para acceder a ella tendra que hacer lo siguiente: process.env.PORT.

Para poder acceder a estas variables en el comando para iniciar la ejecucion de nuestra app devemos implementar la flag --env-file seguida del archivo .env
quedaria de esta manera:
``` Bash
node --env-file .env index.js
```

Esta forma nativa nos ahorra usar la dependencia dotenv la cual antes de que esta funcionalidad de agrege a node.js era extremadamnete utilizada.
## Tomando entrada del usuario
### process.stdin
Es un flujo (stream) de lectura en node.js que permite a una aplicacion leer datos de la entrada estandar (normalmente el teclado) de manera sincrona o asincrona. Es esencialmente el mecanismo que permite a las aplicaciones de linea de comandos (CLI) interactura con el usuario a traves de la consola capturando la entrada del usuario en tiempo real.
#### Conceptos clave sobre process.stdin
1. Modo de pausa vs Flujo
    - Modo de pausa: Por defecto, process.stdin comienza en modo de pausa. En este modo, no leera datos hasta que se configure para hacerlo. Puedes poner 'stdin' en modo de flujo llamando a process.stdin.resume().
    - Modo de flujo: En este modo,los datos se leen automaticamente a medida que se reciben y se pueden manejar mediante eventos como 'data', 'end', y 'error'.
2. Eventos principales.
    - data: este evento se emite cada vez que se recibe un fragmento de datos Es aqui donde puedes procesar la entrada del usuario a medida que la proporciona.
    - end: se emite cuando se cierra el flujo de entrada, lo que suele suceder cuando el usuario presiona ctrl+D en la consola.
    - error: se emite si hay un problema al leer los datos de la entrada estandar.
3. otros eventos:
    - readable: se emite cuando hay datos disponibles para ser leidos del flujo. Es util cuando deseas leer datos en trozos mas grandes o procesar los datos de manera manual usando el metodo .read(), en lugar de escuchar el evento data.
    - close: este evento se emite cuando el flujo se ha cerrado y no se recibiran mas datos. Es similar a end pero se emite despues de que todos los datos hayan sido leidos y el flujo este completamente cerrado.
    puede ser util para tareas de limpieza o notificar al usuario que la aplicacion ha terminado de procesar toda la entrada.
    - pause: Este evento se emite cuando se llama al metodo pause en el flujo deteniendo la emision de nuevos eventos data hasta que se llame a resume().
    - resume: este evento se emite cuando se reanuda un flujo pausado usado el metodo resume(), muy util para controlar el flujo de tu app, activando o desactivando la entrada segun sea necesario.
4. Ejemplo de uso:
``` Javascript
#!/usr/bin/env node

process.stdin.resume(); //iniciamos el modo de flujo
process.stdin.setEncoding('utf8');

console.log('¿Como te llamas?');

let nombre = ''

process.stdin.on('readable', () => {// recibimos un chunk de informacion (cada enter es un chunk)
    let chunk;
    while ((chunk = process.stdin.read()) !== null) {
        console.log('Presiona "CTRL + D" para terminar la ejecucion')

    }
});
process.stdin.on('data', function(data) {// recibimos el evento data
    nombre = data
});

process.stdin.on('end', function() {
    console.log(`hola ${nombre}`);
});
```

### Librerias que suelen utilizarse para este trabajo:
- inquirer Package
- prompts package
## Gestionando la salida - stdout/stderr
stdout y stderr son flujos (streams) que permiten a tu aplicacion de linea de comandos interactuar con la consola, proporcionando mecanismos para mostrar mensajes y manejar errores.
1. process.stdout: La salida estandar
process.stdout es un flujo de escritura que se utiliza para enviar datos a la salida estandar (normalmente, la pantalla de la consola). Es el canal por defecto para mostrar mensajes, resultados o cualquier tipo de informacion generada por un programa.**Caracteristicas:**
- Escritura de datos: podes escribir datos en stdout usando **process.stdout.write()** el cual a diferencia de console.log() no añade un salto de linea al final de la salida.
- Uso comun: Se usa para mostrar resultados, mensajes de estado, progresos, o cualquier informacion que el usuario deba ver en tiempo real.
- Ejemplo:
``` Javascript
process.stdout.write('Hola, mundo!\n'); // Nota el uso de \n para un salto de línea
```
- ejemplo avanzado:
``` Javascript
let progress = 0;
process.stdout.write(`Iniciando programa \n`);
const interval = setInterval(() => {
    process.stdout.write(`Progreso: ${progress}%\r`); // con \r actualizamos la misma linea
    progress += 10;
    if (progress > 100) {
        clearInterval(interval);
        process.stdout.write('\nIniciado!\n');
    }
}, 100);
```

2. 'process.stderr': La salida de errores
process.stderr es similar a stdout, pero esta especificamente destinado a enviar mensajes de error a la salida estandar de errores. Esto permite que los errores y las salidas normales se gestiones por separado, lo cual es util para depuracion y monitoreo de bugs.
**Caracteristicas de stderr:**
- Escritura de errores: se utiliza **process.stderr.write()** para enviar mensajes de error.
- Separacion de flujos: en muchos sistemas, stdout y stderr pueden redirigirse a diferentes lugares. Por ejemplo stdout puede redirigirse a un archivo mientras que stderr se muestra en la consola.
``` javascript
process.stderr.write('Error: Algo salió mal!\n');
```

3. Redireccion de salida:
### Librerias que suelen utilizarse para este trabajo:
- chalk package
- figlet package
- cli-progress
## Manejo de argumentos / process.argv
process.argv es una propiedad de Node.js que retorna un array que contiene todos los argumentos pasados a la linea de comandos al ejecutar un script Node.js Esta propiedad es esencial para desarrollar aplicaciones CLI, ya que permite capturar y procesas la entrada del usuario directamente desde la linea de comandos.
**Estructura de 'process.argv'**
El array devuelvo por process.arg siempre incluye al menos dos elementos:
1. **process.argv[0]**: Contiene la ruta absoluta al ejecutable de node.js: Ejemplo:
``` Bash
'/usr/local/bin/node'
```
2. **process.argv[1]**: Contiene la ruta absoluta del archivo JS que esta siendo ejecutado. Ejemplo:
``` Bash
'/path/to/your/script.js'
```
3. **process.argv[2] y siguientes**: COntienen los argumentos que el usuario pasa al ejecutar el script. Estos son los argumentos que generalmente te interesara capturar y procesas.

4. **Ejemplo practico**: supongamos que creamos una API cli para saludar a un usuario. A continuacion se muestra como podrias manejar los argumentos.

``` Javascript
const args = process.argv.slice(2) //agarramos todos los argumentos excluyendo los dos primeros.

if(args.length > 0) {
    const name = args[0];
    console.log(`Hola , ${name}`);
} else {
    // En caso de que el usuario no proporcione ningun script
    console.log('hola mundo')
}
```
Ejecutamos el script:
``` Bash
node greet.js Abraham
```
Salida:
``` Bash
Hola , Abraham
```

### frameworks para manejar la linea de comandos en Node.js 
commander
## Codigos de salida - Exitting / exit codes
En Node.js, los codigos de salida y el proceso de salida('process.ext()') son mecanismos importantes para comunicar el estado de ejecucion de un programa CLI o cualquier otro script a la terminal o a procesos llamantes. Estos codigos de salida indican si un programa termino con exito o si ocurrio algun error durante su ejecucion.
1. ¿que sos los codigos de salida?
- Los codigos de salida son numeros enteros que un proceso devuelve al sistema operativo al terminar. EN sistemas tipo Unix, un codigo de salida de '0' normalmente indica que el proceso se completo con exitos, mientras que cualquier otro numero indica algun tipo de error o condicion especial.
    - Codigos de salida 0: Indica que el programa se ejecuto sin errores.
    - Codigo de salida dstinto de 0: Indica que ocurrio un error o que el programa termino debiod a una condicion especifica que no fue exitosa.
2. Uso de process.exit()
    - process.exit([code]) es una funcion de Node.js que finaliza el proceso de manera explicita, devolviendo un codigo de salida al sistema operativo. Este codigo se puede utilizar para informar sobre el estado del programa al sistema o a cualquier script que lo haya ejecutado.
    - Ejemplo simple:
    ``` Javascript
    if (someErrorCondition) {
        console.error('An error occurred!');
        process.exit(1); // Salir con un código de error
    } else {
        console.log('Program completed successfully.');
        process.exit(0); // Salir con un código de éxito
    }
    ```
    [!WARNING]
    >
    > Si no se especifica un codigo, process.exit() usara 0 por defecto, lo cual indica una salida exitosa.
3. Como usar los codigos de salida
    - Los codigos de salida son especialmente utiles en scripts automatizados, pipelines de CI/C, o scripts que dependen de otros programas, donde los resultados se deben manejar en funcion del exito o fracaso de los procesos anteriores.
    Ejemplo en un script en bash:
    ``` Bash
    node myscript.js
    if [$? -ne 0]; then
        echo "Script failed!"
        exit 1
    else
        echo "Script succeeded!"
    fi
    ```
    En este ejemplo, $? es una variable especial en Bash que contiene el codigo de salida del ultimo comando ejecutado. Dependiendo de ese codigo, el script puede tomar diferentes acciones.
4. Eventos relacionalos con la salida del proceso
    - Node.js tambien proporciona alugunos eventos que puedes manejar para realizar tareas antes de que el proceso termine.
    - **process.on('exit',callback)**: este evento se dispara cuando el proceso esta a punto de finalizar. Es un buen lugar para realizar tareas de limpieza, aunque no puedes realizar operaciones asincronas aqui, ya que el proceso esta a punto de terminar.
    ``` Javascript
    process.on('exit',(code) => {
        console.log('About to exit with code: ${code}')
    })
    ```
    - **process.on('uncaughtException', callback)**: Este evento se dispara cuando se lanza una excepcion que no fue capturada. Esto permite manejar errores y posiblemente realizar tareas de limpieza antes de que el proceso termine.
    ``` Javascript
    process.on('uncaughtException', err => {
        console.error('An uncaught error ocurred:', err)
        process.exit(1)
    })

    // simulando un error no capturado:
    throw new Error('opps!')
    ```

5. Cuando usar 'process.exit()'
En general, **process.exit()** deberia usarse con precaucion. Si lo llamas de forma explicita, detendras inmediatamente todas las operaciones en curso, lo cual puede evitar que ciertas operaciones asincronas, como escribir en un archivo o enviar datos por la red, se completen.
La mayoria de los casos, es mejor dejar que Node.js termine el proceso naturalmente cuando ya no quedan operaciones pendientes.

6. Conclusion
Los codigos de salida y process.exit() son herramientas poderosas para controlar el flujo y comunicar el estado de tu aplicacion Node.js, especialmente en entornos donde la automatizacion y la integracion con otros procesos es critica.
Un manejo adecuado de los codigos de salida aseguran que otros scripts o procesos puedan reaccionar apropiadamente al estado de tu aplicacion, facilitando la creacion de sistemas mas robustos y confiables.