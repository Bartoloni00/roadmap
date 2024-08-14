# Manejo de errores en Node.js
Siguiendo la logica el manejo de errores es el camino a encontrar los bugs/errores y soluciones lo mas rapido humanamente posible.
Obviamente es complicado hacer un buen sistema de manejo de errores. pero lograrlo significa desarollar un codigo robusto y reducir el tiempro de intentar resolver bugs durante el desarrollo.

# Tipos de errores: Operacionales vs Errores de programacion.
- **Operational Errors:** Representan los errores de ejecucion, Estos errores son esperados en el runtime de Node.js y suelen mostrarse de una manera adecuada. Esto no significa que este libre de errores. solo significa que tiene que manejarse apropiadamente este error.
    Errores Operacionales mas comunes:
    - Failed to connect to server | Fallo al conectar al servidor.
    - Failed to resolve hostname |Fallo al resolver el nombre del servidor.
    - Invalid user input | Entrada de usuario invalida | Error de auth.
    - Request timeout | Tiempo de espera de la solictud excedido.
    - Server returned a 500 response.
    - Socket hang-up | Cierre inesperado de la conexion.
    - System is out of memory | El sistema se quedo sin memoria.

- **Errores de programacion**: Son los conocidos bugs. Aca te dejo algunos de los mas comunes:
    - Se llamo a una funcion asincrona sin una funcion de devolucion de llamada.
    - No se resolvio una promesa.
    - No se capturo una promesa rechazada.
    - Se paso una cadena de texto dode se esperaba un objeto.
    - Se paso un objeto donde se esperaba un texto.
    - Se pasaron parametros incorrectos en una funcion.

# El objeto ERROR
Para lanzar errores en el codigo de ejecucion de Node.js existe el objeto error.
``` Javascript
const error = new Error("An error message")
console.log(error.stack)
```

error.stack es un campo optimo para debuguear el error... el campo .message tambien puede ser muy util.

## Mejores practicas de uso.
1. Usar errores personalizados para manejar errores operacionales.
    Con el patron async/await podes escribi codigo que parece sincrono pero no deja de ser asincrono.
    Este patron te ayudara a limpiar el codigo y reducir el callback hell.
2. Podemos crear objejos de error personalizados para tenes propiedades mas especificas como codigos de estado y descripciones mas detalladas.
``` Javascript

class BaseError extends Error {
 constructor (name, statusCode, isOperational, description) {
 super(description)

 Object.setPrototypeOf(this, new.target.prototype)
 this.name = name
 this.statusCode = statusCode
 this.isOperational = isOperational
 Error.captureStackTrace(this)
 }
}
```
- Es una buena practica crear un archivo con todos los codigos de estado HTTP para mantener un mapa de los codigos de estado que queremos manejar. Ej:
```Javacript
export const httpStatusCodes = {
    OK: 200,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    INTERNAL_SERVER: 500
}
```
- Crear clases personalizadas para cada error en tu aplicacion.
```Javascript
import {httpStatusCode} from './httpStatusCodes.js'
import BaseError from './BaseErrors.js'

class Api404Error extends BaseError {
 constructor (
 name,
 statusCode = httpStatusCodes.NOT_FOUND,
 description = 'Not found.',
 isOperational = true
 ) {
 super(name, statusCode, isOperational, description)
 }
}
```
Y lo usariamos de la siguiente manera:
``` Javascript
import Api404Error from './Api404Error.js'

/// some code
const user = await User.getUserById(req.params.id)
if (user === null) {
 throw new Api404Error(`User with id: ${req.params.id} not found.`)
}
// some code
```

2. Usar Middlewares.
Una ves que ya tienes un set de Errores custom. podes configurar una centralizacion de manejo de errores y desde ahi decidir que hacer.

**Todo lo que vimos son buenas formas para manejar los errores operacionales ahora centremonos en los de programacion.

3. Cuando no esperas que ocurra un error. Quieres manejarlo inmediatamente enviando una notificacion y reiniciando la app. En esta situacion podemos utilizar el objeto process:
``` Javascript
import { logError, isOperationalError } from './errorHandler'

// ...
process.on('uncaughtException', error => {
 logError(error)

 if (!isOperationalError(error)) {
 process.exit(1)
 }
})
// ...
```

**con el objeto process podemos detectar cuando se rompe la ejecucion del codigo y retomarla o lanzar mensajes de error.**

3. Usar una locacion centralizada para el logeo de errores y mostrar las alertas de los errores.
Para hacer esto podriamos utilizar la libreria windston pero node.js v22 ya posee el objeto console el cual puede cumplir esta funcion si lo mezclamos con el el modulo file system (fs).

ejemplo realizado en winston, morgan y el sistema de modulos commonJS.
```Javascript
// logger.js

const winston = require('winston')
const Logsene = require('winston-logsene')

const options = {
 console: {
 level: 'debug',
 handleExceptions: true,
 json: false,
 colorize: true
 },
 logsene: {
 token: process.env.LOGS_TOKEN,
 level: 'debug',
 type: 'app_logs',
 url: 'https://logsene-receiver.sematext.com/_bulk'
 }
}

const logger = winston.createLogger({
 levels: winston.config.npm.levels,
 transports: [
 new winston.transports.Console(options.console),
 new Logsene(options.logsene)
 ],
 exitOnError: false
})

module.exports = logger
```
```Javascript
const morgan = require('morgan')
const json = require('morgan-json')
const format = json({
 method: ':method',
 url: ':url',
 status: ':status',
 contentLength: ':res[content-length]',
 responseTime: ':response-time'
})

const logger = require('./logger')
const httpLogger = morgan(format, {
 stream: {
 write: (message) => {
 const {
 method,
 url,
 status,
 contentLength,
 responseTime
 } = JSON.parse(message)

 logger.info('HTTP Access Log', {
 timestamp: new Date().toString(),
 method,
 url,
 status: Number(status),
 contentLength,
 responseTime: Number(responseTime)
 })
 }
 }
})

module.exports = httpLogger
```

Ahora en el index.js podras requerir logger.js y httpLogger.js y usarlo en lugar de los console.log()

# Como entregar errores: Function Patters.
Existen cuatro caminos para entregar los errores en NOdeJS.
## 1. Throwing Errors / Lanzando el error como una excepcion.
El lanzamiento de errores detiene la ejecucion actual, desenvocando la pila de llamadas hasta encontrar un bloque try-catch o provocando un crash si no se encuentra.
Es ideal para errores sincronos o asincronos manejados con async/await.
## 2. Callbacks
Pasar una funcion como argumento a otra funcion que la invocara posteriormente, entregando el error (si ocurre) como primer parametro.
Antiguo metodo para manejar errores asincronos.
```Javascript
function getUser(id, callback) {
  // ...
  callback(error, user);
}
```

## 3. Promesas
Representan el resultado eventual de una operacion asincrona, que puede ser un valor exitoso o un error.
Metodo moderno y preferido para manejar errores asincronos.
Ejemplo:
``` Javascript
function getUser(id) {
  return new Promise((resolve, reject) => {
    // ...
    if (error) {
      reject(error);
    } else {
      resolve(user);
    }
  });
}
```

## 4 . EventEmmiter
Emite eventos, incluyendo eventos de error, que pueden ser escuchados por multiples suscriptores.
Ideal para multiples errores potenciales en una secuencia de eventos.
Ejemplo:
``` Javascript
const emitter = new EventEmitter();
emitter.on('error', (error) => {
  // manejo del error
});
```

## Resumen comparativo:
      Metodo    | Sincrono/Asincrono | Manejo de errores               | Recomendado
---------------------------------------------------------------------------------------------------------------------------
Throwing Errors |      Sincrono      | Try-catch                       | Para erores sincronos y asincronos con async/await
---------------------------------------------------------------------------------------------------------------------------
    Callbacks   |      Asincrono     | Primer argumento de la callback | Antiguo, si es posible evitar.
---------------------------------------------------------------------------------------------------------------------------
    Promises    |      Asincrono     | Catch                           | Moderno y preferido
---------------------------------------------------------------------------------------------------------------------------
  EventEmiter   |      Asincrono     | on('error')                     | Para multiples errores potenciales


# Errores de sistema:
Node JS genera errores de sistema cuando ocurre una violacion de alguna restriccion del sistema operativo durante la ejecucion de una aplicacion. Estos errores suelen ocurrir cuando una aplicacion intenta realizar una operacion que no esta permitida o cuando los recursos del sistema estan agotados.
Lista de errores:
- EACCES: Permiso deegado, ocurre cuando la app no tiene los permisos necesarios para realizar una operacion como leer o escribir un archivo.
- EADDRINUSE: Direccion ya en uso. Suele ocurrir cuando se intenta iniciar un servidor en un puerto que ya esta ocupado por una aplicacion.
- ECONNRESET: Conexion restablecida por el par. indica que el otro sistema se cerro inesperadamente.
- EEXIST: Archivo existe. se produce cuando se intenta crear un archivo que ya existe.
- EISDIR: Es un directorio. Ocurre cunado se intenta realizar una operacion en un directorio como si fuera un archivo.
- EMFILE: Demasiados arhivos abiertos en el sistema. indica que el sistema ha alcanzado el limite maximo de archivos abiertos simultaneamente.
- ENOENT: no existe tal archivo o directorio. Se produce cuando se intenta acceder a un archivo o directorio que no existe.
- ENOTDIR: no es un directorio. OCurre cuando se intetna realizar una operacion de directorio en un archivo.
- ENOTEMPTY: Directorio no vacio. Se produce cunado se intenta eliminar un directorio que no esta vacio.
- ENOTFOUND: Falla en la busqueda de DNS. Indica que no se pudo resolver una direccio IP a partir de un nombre de dominio.
- EPERM: Operacion no permitida.Ocurre cuando la aplicacion no tiene los permisos necesarios para realizar una operacion, similar a EACCES.
- EPIPE: Tuberia rota, inidica que se intento escribir datos en una tuberia cerrada.
- ETIMEDOUT: operacion excedio el tiempo de espera.

# ¿que hacer en caso de error?
## Manejo de errores operacionales.
Al ser errores esperados tenemos que anticiparnos a ellos, contarlos durante el desarrollo anotar cuando falla y manejar de la manera mas adecuada ese error:
Cada vez que ocurran deberiamos seguir un sistema parecido al siguiente:
1. Reportar el error y ponerlo al fondo de la lista de espera: En muchos casos, la accion apropiada es detener el flujo de ejecucion del programa, limpiar cualquier proceso sin terminar e informar el error hacia arriba en la pila para que pueda ser manejado adecuadamente. Esta suele ser la manera correcta de abordar el error cuando la funcion donde ocurrio esta mas abajo en la pila, de modo que no tiene suficiente informacion para manejar el error directamente. 
2. Re-intentar la operacion: muchas veces puede fallar la peticion a la red, incluso cuando esta es completamente valida. Tu puedes intentar multiples veces (**ten en cuenta que si el codigo de estado HTTP es 500,503 o 429** puede ser peligroso hacer multiples intentos de peticiones en un corto periodo de tiempo.) Los headers de las respuestas pueden contener el campo *Retry-after* el cual indica cual tiene que ser el tiempo de espera para realizar la siguiente peticion. Esto se conoce como "exponential back-off strategy" Debes decidir cuanto es el maximo intervalo de tiempo de espera y cuantas veces se puede re intentar. a este punto ya deberias haber informado a los servicios que en inaccesible.

3. Enviar el error a cliente: cuando el tiempo de espera de un input es excesivo, el usuario asumira que ese input esta roto por defecto. La primera cosa que tenemos que hacer es validar el input y reportar cualquier error al usuarios lo antes posible para que corrija y envie nuevamente. Asegurate de que se le de al usuario toda la informacion necesaria para que no cometa ningun error en la construccion de la peticion.

4. Abortar el programa: en los casos que el sistema de errores diga que es irrecuperable la unica opcion razonable es la accion de log el error y terminar el programa inmediatamente. Puede que no estes apto para apagar el servidor exitosamente desde javascript. en ese caso un usuario administrador deberia ser requerido para mirar el problema e intentar solucionarlo uando el programa vuelva a arrancar.

## Manejo de errores de programacion.
Estos errores ocurriran por naturaleza, no somos perfectos y ya sea por codigo roto o logica tendremos que solucionarlos, aqui algunos pasos para evitarlos:
1. Adoptar typescript: TypeScript es un superset de JS fuertemente tipado, Diseñado para identificar construcciones estaticamente que probablemente sean errores sin ninguna penalizacion en timpo de ejecucion. Al adoptar TypeScript en tu proyecto (con las opciones de compilador mas estrictas posibles), puedes eliminar toda una clase de errores de programacion en tiempo de compilacion. Errores como "undefined is not a function", errores de sintaxis o errores de referencias deberian dejar de existir en tu codigo de TypeScript. Esta migracion de node.js a TypeScript puede hacerse de forma incremental por lo que no es necesario migrar todo de una vez.
2. Definir el comportamiento de los parametros malos: Muchos errores de programacion ocurren por pasar mal los parametros. Por lo que validar que cada parametro sea del tipo que deseamos y cumpla con las condiciones que necesitamos es muy necesario. en caso de no cumplirse esas cosas deberiamos lanzar un error.
3. Testing automatizado: Javascript por su logica no ayuda demasiado a encontrar errores de logica en tu programa. La presencia de un sistema automatizado de test hara que los errores de programacion se reduzcan en especial los de logica. Librerias como Jest o Mocha son un buen camino para este proceso.

# AssertionErrors en Node.js
Un AssertionError en Node.js es un tipo de error que se lanza intencionalmente cuando una condicion que se supone que siempre debe ser verdadera resulta ser false. En otras palabras, es una afirmacion (assertion) que el programador considera que debe ser cierta, y si no lo es, algo esta mal en la logica del programa.
## ¿Por que usar AssertionErrors?
- Deteccion temprana de errores: Al colocar assert en puntos criticos del codigo, puedes detectar errores temprano en el desarrollo, anes de que causen problemas mas graves.
- Documentacion del codigo: Las assertions actuan como una forma de documentacion, explicando las suposiciones que el codigo hace sobre los datos.
- Pruebas unitarias: las assertions son la base de muchos frameworks de pruebas unitarias, ya que permiten verificar que el codigo se comporta como se espera.
## ¿Como se utilizan?
1. Validando datos de entrada en una funcion exportadora:
``` Javascript
export function calculateArea(radius) {
  assert(typeof radius === 'number', 'Radius must be a number');
  assert(radius > 0, 'Radius must be positive');
  return Math.PI * radius * radius;
}
```
**Recuerda los assertionErrors solo deben utilizarse cuando la condicion se espera que sea siempre verdadera, a continuacion dejo un ejemplo de un caso en el cual no deberia utilizarse**
``` Javascript
 static async getAll(filters = {})
    {
        let characters = await getJson('./db/characters.json')

        if(characters.length < 1) throw new Error('Characters not found')

        if (!Object.keys(filters).length) return characters
        
        return charactersFilters(filters, characters)
    }
  ```
¿porque en este caso no se utiliza? porque no es seguro que siempre characters.length sea mayor a 1 por lo tanto la solucion de lanzar un error es mejor que lanzar una assertion

# Errores de Javascript
Javascript utiliza un sistema de manejo de errores para alertar a los desarrolladores sobre problemas en el codigo durante la ejecucion. Estos errores pueden surgir por diversas razones, desde simples errores de sintaxis hasta problemas mas complejos relacionados con la logica del programa.
## Tipos de errores en javascript.
1. SyntaxError: Ocurre cuando el codigo no cumple con las reglas gramaticales de Javascript.
  Faltan o sobran caracteres, palabras claves mal escritas, parentesis o llaves no balanceados.
  ``` Javascript
  console.log("hola, mundo!;
  ```
2. ReferenceError: Se produce cunado se intenta acceder a una variable o funcion que no ha sido declarada o esta fuera de alcance.
  Variables no declaradas, variables declaradas dentro de un bloque y utilizadas fuera de el, o errores de escritura en el nombre de la variable.
  ```Javascript
  // x no fue declarado
  console.log(x)
  ```
3. TypeError: Ocurre cuando se intenta realizar una operacion en un valor de un tipo de datos incorrecto.
  Intenta sumar un numero con una cadena sin convertirla, llamar a un metodo que no existe en un objeto, o intentar acceder a una propiedad que no existe.
4. RangeError: Se produce cuando un numero esta fuera del rango valido para una operacion especifica.
  Indices de array fuera de rango, argumentos de funciones fuera de los limites permitidos, o valores numericos demasiado grandes o pequeños.
5. URIError: Ocurre cuando se produce un error en una codificacion URI, como al crear un objeto URI con un formato incorrecto.
  Caracteres no validos en una URI, formato incorrecto de la URI
  ```Javascript
  encodeURI('http://example.com#')
6. EvalError: Ocurre cuando se produce un error en la funcion global eval().
  Uso incorrecto de eval(), sintaxis invalida dentro de la cadena evaludad.
  ``` Javascript
  eval('x = 10;');
  ```
7. InternalError: Indica un error interno en el motor de JS. Generalmente es causado por un error en el codigo del mismo motor y no por el codigo del usuario.
  Errores en el compilador o interprete de JS, problemas de memoria o bugs en el motor.