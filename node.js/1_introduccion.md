# ¿que es Node JS?
- Es un entorno de ejecucion para el lenguaje javascript fuera del navegador.
- Usualmente se utiliza para contruir servicios de Backend
- lo que diferencia a node de los demas lenguajes para backend es:
    - Es muy rapido y escalable.
    - Es buena para prototipar y desarrollo agil de aplicaciones.
    - Si sabes Javascript no tenes que aprender otro lenguaje.
    - Tiene un ecosistema de librerias open-source muy grande.

# ¿Como trabaja Node JS?
Siempre se dice que es altamente escalabre, puede recibir muchos datos y es buena para construir apps en tiempo real. Esto se debe a su arquitectura de asyncronia (no bloquea las peticiones las deja para mas tarde creando una lista de tareas).
Tiene un solo hilo pero ese hilo puede este puede aceptar multiples solicitudes gracias a la asincronia.

Node.js es ideal para applicaciones intensivas en E/S (input/output) porque esta diseñado especificamente para manejar un gran numero de conexiones simultaneas de manera eficiente. Esto significa que es excelente para apps que necesitan interactuar frecuentemente con el exterior, como:
- Apps web: manejando multiples solicitudes HTTP al mismo tiempo.
- Aps in real time: como chats, juegos en linea o apps de colaboracion.
- Apps de streaming: transmitiendo datos continuamente.
- Apps IOT: Interactuando con multiples dispositivos conectados.

Esto se debe a que tiene un modelo E/S no bloqueante y asincrono.

A pesar de todo esto, nodejs n esta diseñado para tareas de computo pesado, con calculos complejos o largos procesos de procesamiento.
Si tu app requiere procesamiento de imagenes, analisis de datos, simulaciones cientificas, compresion de video, cifrado de datos o algoritmos geneticos NO se recomienda utilizar node.
para este tipo de tareas mejor usa lenguajes como C++, GO, Rust, Python o incluso PHP.

# La historia de nodejs
pendiente...

# Node.js vs Browser
En el browser, la mayor parte del tiempo estaras interactuando con el DOM o otras APIs web como las Cookies, eso no existe en Node.js. No existe el objeto document o windows asi como muchos otros objetos que provee el navegador. y el navegador no tiene todas las APIs que Node.js provee como los modulos, filesystem, etc.

Otra gran diferencia es que en node.js vos tenes el control del entorno. Puede ser desplegado en cualquier lugar, vos sabes que version de node.js correra tu aplicacion. Comparando con el entorno del navegador, donde vos no tenes el lujo de elegir que navegador va a tener el visitante de nuestra web.
Esto significa que podes escribir todo el codigo moderno de javascrip que tu version de Node.js soporte. 

Otra diferencia es que desde nodejs v12 se soportan ambos modelos de systemas CommonJS y ES modules. Estamos comenzando a ver que el modulo ES esta convirtiendose en el estandar.

# Como correr script de nodejs desde la linea de comandos
La manera mas comun es utilizar la variable global "node" (que deberia estar disponible si tienes instalado node.js) y seguidamente colocas el nombre del archivo a ejecutar.
``` Bash
node app.js
```

tambien puedes decirle explicitamente a la consola que se corra como un archivo de node con una linea "shebang". Esta linea tiene que ser la primera en todo el archivo y le dice al OS que se interprete como un script.
``` JavaScript
#!/usr/bin/node
#!/usr/bin/env node

// codigo javascript
```
Para esto necesitaras permisos de ejecucion del archivo.

Tambien puedes ejecutar codigo js directamente en la consola utilizando las flags --eval o -e.
``` Bash
node --eval "console.log('hola mundo')"

node -e "console.log('hola mundo')"
```

# Variables globales en nodejs

Para declarar variables globales (Lo cual no es para nada recomendable) en nodejs no usamos el tradicional var que vemos en JS. en su lugar se declara de esta manera:
``` JavaScript
global.variable = 'Soy una variable global'
```