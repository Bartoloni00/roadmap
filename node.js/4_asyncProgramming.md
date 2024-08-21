# Programacion Asincrona en javascript
La programacion asincrona en javascript es una tecnica que permite a tu codigo realizar tareas de larga duracion sin bloquear la ejecucion de otras partes del programa. Imagina que estas cocinando: puedes poner una olla a hervir y seguir preparando otros platos mientras esperas que el agua llegue a ebullicion en lugar de quedarte parado frente a la estufa sin hacer nada.

## ¿Porque es importante?
- Mejora la experiencia de usuario: Al evitar que tu aplicacion se "congele" mientras espera resultados de operaciones lentas, como solicitudes a servidores.
- Mayor eficiencia: Permite que el motor de javascript realice otras tareas mientras se esperan resultados, optimizando el uso de recursos.
- Facilita la escritura de codigo mas modular y legible: Al separar las tareas en unidades mas pequeñas y manejables.

## ¿Como funciona?
Javascript utiliza un event loop para gestionar la ejecucion del codigo de forma asincrona. Este bucle constantemente revisa una cola de tareas y ejecuta las que estan listas. Cuando se inicia una tarea asincrona (como una solicitud HTTP), se agrega a la cola y el codigo continua ejecutandose. Una vez que la tarea se completa, se ejecuta su correspondiente devolucion de llamada o promesa.

## Herramientas de programacion asincronica en javascript

### setTimeout
Es una funcion que llama a una funcion despues de x cantidad de milisegundos.
``` Javascript
setTimeout(funcion, milisegundos)
```
Esta funcion retorna un valor numerico el cual es el id del timer el cual podemos utilizar junto a la funcion clearTimeout(id) para cancelar el setTimeout.

### setInterval
Es una funcion muy parecida a la anterior pero en lugar de ejecutarse solo una vez esta se puede ejecutar eternamente.
Tambien acepta dos parametros: la funcion y el tiempo de espera entre cada vez que ejecute esa funcion.
``` Javascript
setInterval(funcion, milisegundos)
```
Al igual que setTimeout retorna un id que podemos utilizar en la funcion clearInterval(id) para cortar esta ejecucion.

### process.nextTick
Cada vez que el event loop hace un viaje completo lo llamamos un tick, cuando pasamos una funcion process.nextTick(), le estamos diciendo al motor que invoque esa funcion al principio del siguiente tick.
**la funcion process.nextTick tiene maxima prioridad entre las funciones asincronicas**

suele utilizarse para limpiar cualquier recurso inecesario o asegurarnos de que algunos modulos ya este resueltos cuando los necesitemos.

- Evitar anidar llamadas: si anidas demasiadas llamadas a process.nextTick() puede llevar a un comportamiento impredecible y a posibles fugas de memoria.
- Generalmente las promesas o async/await es una mejor opcion.

### setInmmediate
Una funcion que podemos encontrar en nodejs la cual es ideal para ejecutar una pieza de codigo asincrono lo antes posible.
``` Javascript
setImmediate(() => {
  // Cualquier funcion que pasemos se convierte en un callback que sera ejecutado en la siguiente iteracion del event loop.
});
```

### Callbacks
Un callback es una funcion simple que se pasa como argumento a otra funcion, y solo sera ejecutada cuando un evento ocurra. Es commun esperar a que el cliente cargue una parte de la pagina o haga click en un boton para que ocurra algo.
En otras palabras. *Es una forma de programar acciones que se llevaran a cabo en el futuro*

Debido a las limitaciones de las callbacks, se introdujeron las promesas y la sintaxis async/await, que ofrecen formas mas elegantes y manejables de manejar la asincronica en javascript. Sin embargo entender las callback sigue siendo fundamental para comprender como funciona Javascript en profundidad.

#### Ventajas
- Flexibilidad: Permiten un alto grado de personalizacion en la forma en que se manejan los resultados de las operaciones asincronicas.
- Facilidad de uso: son relativamente faciles de entender y utilizar.

#### Desventajas.
- **El infierno de callbacks**: si se anidas demasiadas callbacks, el codigo puede volverse dificil de leer y mantener, Es muy conocido como el "callback hell".
- No muy intuitivas: para operaciones complejas, el flujo de control puede ser dificil de seguir.

### Promises
Una promesa es un objeto que representa la eventual complecion o fracaso de una operacion asincrona. Se compromete a entregar un resultado en algun momento futuro. la cual tiene tres estados diferentes:
- pending (pendiente): El estado inicial de toda promesa.
- fullfilled: este estado representa una resolucion exitosa de la operacion.
- rejected: Este estado representa una operacion erronea.
``` Javascript
const miPromesa = new Promise((resolve, reject) => {
  // Código asíncrono
  setTimeout(() => {
    // Si todo va bien, llamamos a resolve
    resolve('¡Promesa cumplida!');
  }, 2000);

  // Si ocurre un error, llamamos a reject
  // reject(new Error('Algo salió mal'));
});
```

Para consumir la promesa tendremos que utilizar en metodo .then(), catch() y finally().
``` Javascript
miPromesa
    .then(resultado => console.log(resultado, 'promesa cumplida'))
    .catch(error => console.error(error, 'fallo la promesa'))
    .finally(()=>{
        console.log('pase lo que pase se ejecuta')
    })
```

#### Encadenamiento de promesas
El encadenamiento de promesas es una tecnica que nos permite encadenar multiples operaciones asincronas de forma secuencial. Cada operacion se ejecuta solo cuando la anterior se ha completado con exito. Esto se logra utilizando el metodo .then() de una promesa para devolver otra promesa.
``` Javascript
miPromesa
    .then(resultado => {
        otraPromesa(resultado)
            .then(/*...*/)
            .catch(/*...*/)
    })
    .catch(error => console.error(error, 'fallo la promesa'))
    .finally(()=>{
        console.log('pase lo que pase se ejecuta')
    })
```

Esto garantiza que las promesas se ejecuten en el orden correcto, personalmente no me gusta la anidacion en exceso puedes resolver este problema con async/await

#### Promesas recurrentes
Tambien conocidas como promesas en serie o secuenciales, Es un patron de diseño donde se ejecuta una operacion asincrona de forma repetida hasta que se cumple una condicion. Esto implica la creacion de un bucle (tipicamente while) y dentro de el, llamar a una funcion que devuelve una promesa.
son utilez cuando necesitas ejecutar una misma operacion varias veces de forma secuencial, utilizando el resultado de una iteracion como entrada a la siguiente.
*Suele usarse para tareas como paginacion, donde se obtienen datos por partes hasta que no haya mas*
```Javascript
function obtenerDatosPorPagina(pagina) {
  // ... (código para obtener datos de una página específica)
}

async function obtenerTodosLosDatos() {
  let paginaActual = 1;
  let todosLosDatos = [];

  while (true) {
    const datosPagina = await obtenerDatosPorPagina(paginaActual);

    if (datosPagina.length === 0) {
      break; // Si no hay más datos, salimos del bucle
    }

    todosLosDatos = todosLosDatos.concat(datosPagina);
    paginaActual++;
  }

  return todosLosDatos;
}
```
#### Ejecucion concurrente con Promise.all
En situaciones donde necesitas ejecutar varias operaciones asincronas en paralelo y continuar solo cuando todas hayan completado, Promise.all es una herramienta poderosa, esta tecnica permite ejcutar multiples promesas simultaneamente y devuelve una unica promesa que se resuelve cuando todas las promesas en la lista se han completado con exito. Si alguna de las promesas falla, Promises.all tambien fallara, rechazando con la razon de la primera promesa que haya fallado.
Ejemplo basico:
Imagina que tenemos tres funciones asincronas que simulan operaciones de lectura de datos desde diferentes fuentes:
``` Javascript
function fetchDataFromAPI1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Datos de API 1"), 1000);
    });
}

function fetchDataFromAPI2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Datos de API 2"), 2000);
    });
}

function fetchDataFromAPI3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Datos de API 3"), 1500);
    });
}
```
Podemos ejecutar estas funciones en paralelo usando Promise.all:
``` Javascript
Promise.all([fetchDataFromAPI1(), fetchDataFromAPI2(), fetchDataFromAPI3()])
    .then((results) => {
        console.log("Todas las promesas se resolvieron:", results);
    })
    .catch((error) => {
        console.error("Una de las promesas falló:", error);
    });

```
- Entrada: Promise.all toma una matriz/array de promesas como argumento.
- Salida: devuelve una unica promesa que:
  - Se resuelve cuando todas las promesas en la matriz se han resuelto exitosamente. Los resultados se devuelven en una matriz, en el mismo orden en que fueron pasadas las promesas.
  - Se rechaza inmediatamente si cualquiera de las promesas proporcionadas se rechaza. El primer error encontrado se pasa el bloque catch.

##### Uso comun:
Promise.all es util en casos como:
- Cargar datos simultaneamente desde diferentes endpoints de una API.
- Procesar multiples archivos en paralelo y continuar cuando todos esten listos.
- Ejecutar multiples tareas donde todas son necesarias antes de continuar con un paso siguiente.

### async/await
La declaracion "async function" crea un objeto asyncfunction. cada vez que una funcion asincrona se llama esta retorna una nueva promesa que debe resolverse con el valor retornado por la funcion asincrona, o rechazada con la exception lanzada por la async function.
Las funciones asincronas puede contentes zero o mas expresiones "await". 
las expresiones**await** hacen que una promesa se simule ser sincrona ya que tiene que esperar a que se resuelva y devolver un valor (exitoso o no). Usar async y await suele usarse con los tipicos bloques try/catch alrededor del codigo asincrono.
``` Javascript
// Estas dos funciones son similares pero una usa promesas y el otro async
async function foo() {
  return 1;
}
function foo() {
  return Promise.resolve(1);
}
```
Ejemplo de tipico uso de async/await
``` Javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.ejemplo.com/datos');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    // Manejar el error, por ejemplo, reintentar la petición o mostrar un mensaje
  }
}
```
### Orden de prioridad de las ordenes asincronicas.
process.nextTick se añade a process.nextTick queue
Promise.then() se añade a promises microtask queue.
setTimeout y setInmmediate se añaden a macrotask queue.

El evenloop siempre ejecutara primero las tareas en process.nextTick queue, luego ejecutara las promesas microtask queue, y posteriormente las macrotask queue.

Ejemplo:
``` Javascript
const baz = () => console.log('baz');
const foo = () => console.log('foo');
const zoo = () => console.log('zoo');

const start = () => {
  console.log('start');// 1
  setImmediate(baz);//5
  new Promise((resolve, reject) => {
    resolve('bar');
  }).then(resolve => {
    console.log(resolve);//3
    process.nextTick(zoo);//4
  });
  process.nextTick(foo);//2
};

start();

// El orden en el que se resolvera todo es el siguiente:
// start foo bar zoo baz
```
La prioridad aparente de console.log() se debe a su naturaleza sincrónica y a su ubicación en el código. al ser lo primero que se encontro es lo primero que se resolvio.

1. start: Se ejecuta inmediatamente, ya que es sincrónico.
2. foo: Se añade a la process.nextTick queue y se ejecuta a continuación, ya que tiene la mayor prioridad.
3. bar: La promesa se resuelve y su callback se añade a la promises microtask queue. Se ejecuta después de foo.
4. zoo: Se añade a la process.nextTick queue dentro del callback de la promesa, pero se ejecuta después de bar, ya que las microtareas se ejecutan antes de que se devuelva el control al event loop.
5. baz: Se añade a la macrotask queue y se ejecuta al final, ya que tiene la menor prioridad.

## Event emmiter
**Recomiendo ver el patron observer para entender mejor este modulo**
En el navegador es facil estar familiarizado con los eventos de presionar botones, clicks, presionar teclas, reaccionar a movimientos del mouse, scroll, etc. En el lado del backend, Node.js nos ofrece sistema similar de modulos de eventos.
``` Javascript
import EventEmitter from 'node:events';

const eventEmitter = new EventEmitter();
```
Este modulo de eventos es fundamental para crear aplicaciones reactivas y modularizar codigo.

### ¿Como funciona?
1. Creacion del emisor: Se crea una instacia de EventEmitter o una clase que hereda de ella.
2. Suscripcion: Se utilizan metodos como "on" o "addListener" para suscribir una funcion (listener) a un evento espeficico.
3. Emision: cuando ocurre un evento, se utiliza el metodo "emit" para notificar a todos los listeners suscritos a ese evento.

### Metodos mas utilizados de eventEmitter
- on(event, listener): agrega un nuevo listener para el evento especificado.
- once(event, listener): agrega un listener que se ejecuta solo una vez.
- emit(event, [...args]): emite un evento, pasando argumentos opcionales a los listeners.
- off(event, listener): elimina un listener especifico para un evento.
removeAllListeners([event]): elimina todos los listeners o los listeners de un evento especifico.
- setMaxListeners(n): Establece el número máximo de listeners que puede tener un evento antes de emitir una advertencia. Esto ayuda a prevenir fugas de memoria y errores de rendimiento.
- listenerCount(event): Devuelve el número de listeners registrados para un evento específico.
- eventNames(): Devuelve un array con los nombres de todos los eventos que tienen al menos un listener.

```Javascript
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('personaAgregada', (persona) => {
  console.log(`Se ha agregado a: ${persona.nombre}`);
});

myEmitter.on('error', (error) => {
  console.error('Error:', error);
});

// Agregar una persona
const agregarPersona = (persona) => {
  try {
    // Simulación de una operación que puede fallar
    if (persona.edad < 18) {
      throw new Error('La persona es menor de edad');
    }
    myEmitter.emit('personaAgregada', persona);
  } catch (error) {
    myEmitter.emit('error', error);
  }
};

agregarPersona({ nombre: 'Juan', edad: 25 });
agregarPersona({ nombre: 'Ana', edad: 15 });
```

### Usos comunes de eventEmitter
- Comunicacion entre modulos: Diferentes partes de una aplicacion pueden comunicarse a traves de eventos.
- creacion de interfaces de usuario reactivas: Los eventos pueden actualizar la interfaz de usuario en respuesta a cambios en los datos.
- Gestion de errores: los eventos pueden utilizarse para notificar errores a diferentes partes de la app.
- implementacion de patrones de diseño como el Observer: el patron observer se basa en la idea de que un objeto (el sujeto) mantiene una lista de otros objetos (observadores) y los notifica automaticamente de cualquier cambio de estado.

### EventEmitter con express.
``` Javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // ...
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
```
En este ejemplo, cuando el cliente realiza una solicitud GET a la raiz, se emite un evento 'request' que es capturado por el middleware de rutas de express

### Consideraciones
- Desempeño: emitir eventos a muchos listeners puede tener un impacto en el rendimiento. Considera utilizar tecnicas de optimizacion si es necesario.
- Memoria: Asegurate de eliminar los listeners cuando ya no sean necesarios para evitar fugas de memoria.
- Asincronia: los listeners se ejecutan de forma asincrona, lo que significa que pueden tardar en ejecutarse o incluso ejecutarse en paralelo.

### EventLoop - Entendiendo como nodejs ejecuta el codigo Javascript.
Event Loop es un mecanismo que te permite especificar que sucede cuando ocurre un evento en particular. Esto podria serte familiar al escribir javascript del lado del cliente, donde un boton podria tener un evento como onClick. Cuando se hace clien en el boton, se ejecuta el codigo asociado con el evento onClick. El nodo simplemente extiende esta idea a las operaciones de E/S: Cuando inicia una operacion como leer un archivo, puede pasar el control de nuevo a Node y hacer que su codigo se ejecute cuando se hayan leido los datos.
Node no puede interrumpir ni interrumpira el bucle while. El bucle de eventos solo se usa para determinar que hacer a continuacion cuando finaliza la ejecucion de un codigo, Que en este caso despues de cuatro segundos de espera forzada. Si tiene una tarea intensiva en CPU que tarda cuatro segundos en completarse, entonces un servidor Node no podria responder otras solicitudes durantes esos cuatro segundos, dado que el bucle de eventos solo se verifica para nuevas tareas una vez que finaliza su codigo.
Se ha criticado mucho el modelo de proceso unico de Node porque es posible bloquear el hilo actual de ejecucion como se muestra arriba.
Sin embargo, la alternativa, usar hilos y coordinar su ejecucion, require una codificacion algo intrincada para funcionar y solo es util si los ciclos de CPU son el principal cuello de botella. Node trata de tomar una idea simple (bucles de eventos de un solo proceso) y ver hasta donde se puede llegar. Incluso con un solo modelo de proceso, puede mover el trabajo intensivo de CPU a otros procesos en segundo plano, por ejemplo: configurando una cola que es procesada por un grupo de trabajadores, o mediante el equilibrio de carga sobre multiples procesos. Si estas realizando un trabajo vinculado a la CPU, entonces, las unicas soluciones reales son encontras un mejor algoritmo (para usar menos CPU) o escalar a multiples nucleo y multiples maquinas (para que mas CPU trabajen en el problema).

#### Call stack
La pila de llamadas o call stack es una estructura de datos LIFO (Last In, First Out) que mantiene un registro de las funciones que se estan ejecutando en un momento dado. Cada vez que se llama a una funciones, se agrega un marco a la pila. Cuando la funcion devuelve un valor, se elimina el marco de la pila.
La relacion que esto tiene con el event loop es que este interactua con la call stack. cuando una operacion sincrona (como una lectura de archivo o una peticion HTTP) esta lista para ser procesada, su callback se coloca en la cola de tareas. Una vez que la call stack esta vacia, el event loop toma el siguiente callback de la cola y lo coloca en la pila, continuando asi el ciclo.

#### el problema de tener solo un hilo
Si una operacion sincrona tarda mucho tiempo en completarse, bloquea la call stack y evita que el event loop procese otras tareas, incluyendo las callbacks de las operaciones asincronas- Esto puede llevar a que la aplicacion se vuelva lenta o deje de responder.
- Perdida de rendimiento: la app no puede atender a otras solicitudes mientras una tarea bloquea el hilo.

##### No bloquees el event loop
- **Operaciones asincronas**: utiliza operaciones asincronas siempre que sea posible, especialmente para tareas que implican E/S (entrada/salida).
- **Workers**: para tareas intensivas de CPU, considera utilizar workers (procesos hijos) para delegar el trabajo.
- **Clustering**: Para escalar horizontalmente, puedes utilizar el modulo cluster de node.js para crear multiples procesos que comprartan el puerto.
- **Librerias especializadas**: existen librerias como async o bluebird que ofrecen herramientas para manejar la asincronia de forma mas elegante.

####  Task queue
- Almacenamiento de callbacks: cuando una operacion asincrona finaliza, su callback se coloca en la Task Queue.
- Proceso: El event loop revisa periodicamente la Task Queue y ejecuta los callbacks uno por uno.
- Orden de ejecucion: Los callbacks se ejecutan en el orden en que se agregaron a la cola.
####  Microtask queue
- Prioridad: **La microtask queue tiene prioridad sobre la Task queue**.
- Las microtareas se utilizan para tareas que deben ejecutarse lo antes posible despues de que se haya completado la ejecucion del codigo sincrono actual, pero antes de que se proceses las tareas de la task queue.