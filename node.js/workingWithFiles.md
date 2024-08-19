# Trabajando con archivos en Node.js
En un uso diario y normal de una computadora, los usuarios suelen leer y escribir archivos en varios directorios con el fin de completar tareas, guardar descargas o acceder a informacion usada en otra aplicacion. En este mismo camino los programas backend o command line interface (CLI) suelen necesitar escribir archivos, guardarlos o las aplicaciones data-intensive pueden necesitar exportar a formatos JSON, CSV o Excel.
Estos programas necesitas comunicarse con el sistema de archvivos o el sistema operativo que este corriendo.
Con Node.js, se pueden manipular archivos con el mudulo fs (File System).

## fs module
### Leer
1. fs.readFile() metodo usado para leer archivos en tu computadora, acepta 3 parametros: el archivo, la codificacion(ej: UTF-8) y un callback. Este callback recibe dos parametros error y data.

### Crear/Escribir/Actualizar

1. fs.appendFile() añade contenido al archivo que le pasemos, si el archivo no existe lo creara.
tambien recibe 3 parametros: el archivo, el contenido que queremos agregar y un callback que recibe el error.

``` Javascript
var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
}); 
```

2. fs.open() este metodo toma la "flag" como segundo argumento, si la flag es "w" (de writing), el archivo se abrira para ser escrito, si el archivo no existe se creara un archivo vacio.
``` Javascript
var fs = require('fs');

fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
}); 
```

3. fs.writeFile() metodo que remplaza el contenido de un archivo con lo que le pasemos (sobreescribe). SI el archivo no existe crea otro con el contenido que le pasemos.
``` Javascript
var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
}); 
```
### Eliminar
Para eliminar archivos con el modulo fs usamos fs.unlink()
``` Javascript
var fs = require('fs');

fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
}); 
```

### Renombrar archivos
Para renombrar archivos con el modulo fs usamos fs.rename()
``` Javascript
var fs = require('fs');

fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
}); 
```

## path module
En informatica, una ruta/path es la forma de referenciar un arhivo informatico o directorio dentro de un sistema operativo. Una ruta señala la localizacion exacta de un archivo o directorio mediante una cadena de caracteres.
Hay que destacar que la ruta puede tener diferente nomenclatura dependiendo del sistema operativo y del sistema d erchivos en cuestion.
- Linux y macOS: /users/foo/example.txt
- Windows: C:\users\foo\example.txt
Estas dos rutas en particular inician desde la raiz del disco duro hasta llegar al contenido, pasando por multiples directorios si es necesario. Mencionando que, en la mayoria de los sitemas operativos, una ruta se puede expresar de dos diferentes formas, denominadas rutas absolutas y rutas relativas.
- Ruta absoluta: Indica toda la ruta del archivo, incluyendo el directorio raiz.
- Ruta relativa: indica la ruta a partir de donde este en ese momento situado. No se incluye el directorio raiz.

**El modulo path en Node.js** proporciona utilidades esenciales para trabajar con rutas de archivos y directorios. Esta herramienta es especialmente valiosa para tratar con sistemas operativos que tienen diferentes convenciones de ruta. El modulo Path garantiza la compatibilidad y estandarizacion de las rutas, reduciendo al minimo los errores debidos a inconsistencias entre plataformas.

### Metodos basicos
1. informacion general
    1. **sep**: podemos utilizar la propiedad sep (abreviatura de separador) para obtener el simbolo separador de rutas del sistema operativo. En este contexto, si el programa se ejecuta en una plataforma windows, la propiedad sep nos proporcionara el caracter especifico utilizado para separar las partes de una ruta en ese OS.
    ``` Javascript
    import path from 'path'
    console.log(path.sep)
    // en windows devolvera: \
    // en linux o macOS devolvera: /
    ```
    2. **extname**: sirve para obtener la extencion del archivo que le pasamos
    ``` Javascript 
    const path = require('path');
    const route = "./extname.js";
    console.log(path.extname(route)); // .js
    ```
2. Normalizacion de rutas
    1. **normalize**: Para normalizar la cadena de texto de una ruta, Se encarga de gestionar las artes "..", ".", y ademas cuando encuentra multiples barras las remplaza por una sola. SI la ruta termina en una barra esta se conserva. El proceso de normalizacion asegura que la ruta este formateada de manera coherente, eliminando redundancias y facilitando su interpretacion y manipulacion.
    ``` Javascript
    const path = require('path');

    const route = 'C:/Users//Admin////Desktop//Courses//nodejs-fundamentals//7. path/examples/normalize.js';

    console.log(path.normalize(route)); 
    // C:\Users\Admin\Desktop\Courses\nodejs-fundamentals\7. path\examples\normalize.js
    ```
3. Construccion de rutas
    1. **join**: Para construir rutas y unir todos los segmentos empleando el separador especifico de la plataforma, utilizamos el metodo join. Este metodo no solo une los segmentos, sino que tambien normaliza el resultado segun la plataforma en la que se este ejecutando el codigo. join se encarga de manejar los detalles especificos de la plataforma, asegurando que la ruta resultante sea coherente y compatible independientemente del sistema operativo.
    ``` Javascript
    const path = require('path')

    const route = path.join('/foo', 'js', 'foo.js');

    console.log(route); // \foo\js\foo.js
    ```
## __dirname
__dirname es una variable de entorno/global que te dice la ruta absoluta del directorio donde se encuentra el archivo Javascript que estas ejecutando actualmente.
- Suele utiliarse como punto de partida para construir rutas relativas dentro de tu proyecto.
- Ademas te ayuda a mantener una estructura de carpetas organizada y a evitar rutas absolutas que pueden ser dificiles de mantener si cambias la ubicacion de tu proyecto.
- tambien puedes utilizar __dirname para crear archivos nuevos en directorios especificos dentro de tu proyecto.
ejemplo de uso en donde creamos un archivo llamado output.txt en el mismo directorio del archivo JS que estamos ejecutando:
``` Javascript 
const fs = require('fs');

// Ruta al archivo de salida
const outputFile = __dirname + '/output.txt';

// Escribir un mensaje en el archivo
fs.writeFile(outputFile, '¡Hola desde __dirname!', (err) => {
    if (err) throw err;
    console.log('El archivo ha sido creado!');
});
```
[!WARNING]
>
> __dirname es una variable global, pero es buena práctica utilizarla de manera consciente y evitar sobrecargar tus scripts con demasiadas rutas absolutas.
## __filename
Si dirname te indica la direccion de tu casa (el directorio), filename te dice cual es el nombre de tu casa (el archivo). Es otra variable global en Node.js que te proporciona la ruta absoluta del archivo JS que se esta ejecutando actualmente.
### ¿Para que sirve?
- Identificar archivos: Es util cuando necesitas saber el nombre exacto del archivo que esas ejecutando, por ejemplo para registrar informacion en un log o para crear nombres de archivos unicos.
- Construir rutas: aunque es menos comun que dirname, puedes usarlo en combinacion con otros modulos como path para construir rutas relativas.

ejemplo en el cual creamos un archivo de log con el nombre del archivo:
``` Javascript
const fs = require('fs');

// Obtener el nombre del archivo sin la extensión
const fileName = __filename.slice(0, -3); // Elimina los últimos 3 caracteres (la extensión .js)

// Crear el nombre del archivo de log
const logFile = fileName + '.log';

// Escribir un mensaje en el archivo de log
fs.writeFile(logFile, 'Este es un mensaje de log', (err) => {
    if (err) throw err;
    console.log('El archivo de log ha sido creado!');
});
```
[!WARNING]
>
> Al igual que dirname, filename es una variable global, pero es recomendable usarla de manera consciente y evitar sobrecargar tus scripts con demasidas rutas absolutas.
> Si mueves el archivo estas rutas dejaran de ser validas.
## process.cwd()
Devuelve la ruta absoluta del directorio de trabajo actual. Es decir, el directorio desde donde se ejecuto el proceso de Node.js.
Se utiliza cuando necesitas conocer el directorio base de tu app, especialmente si estas ejecutando tu script desde diferentes ubicaciones.
tambien se utiliza para establecer rutas relativas basadas en el directorio de trabajo actual.

### La diferencia entre process.cwd() y __dirname
Imaginemos que tienes una casa (tu proyecto) y estas en una habitacion (tu archivo javascript)
-__dirname: te dice en que habitacion estas. Es la direccion exacta de esa habitacion dentro de tu casa.
- process.cwd(): te dice en que parte de la calle estas parado frente a tu casa. Es decir te indica el directorio desde donde iniciaste tu aplicacion, no necesariamente donde esta el archivo actual.

## Librerias para trabajar con el sistema de archivos en node.js
Las mas conocidas son: glob, globby, fs-extra, chokidar

Glob y globby sirven para expandir patrones de archivos y obtener una lista de archivos que coincidan con esos patrones.
- Glob: es una de las librerias mas antiguas y sensillas.
- Globby: es una version mas moderna, con mejoras de rendimiento y caracteristicas adicionales.

fs-extra: Extiende el modulo fs de node.js, proporcionando funciones adicionales para trabajar con archivos y directorios.
Es recomendable utilizarla cuando realizas operaciones de archivos comunes de forma mas sencilla, como copiar directorios recursivamente, mover archivos, crear directorios, etc. O trabajar con archivos y directorios de forma mas robusta y con menos codigo.

Chokidar: sirve para observar cambios en el sistema de archivos en tiempo real.
Cuando necesitas detectar cambios en archivos o directorios y reaccionar a ellos, como en herramientas de compilacion, servidores de desarrollo etc.
Para implementar sistemas de sincronizacion de archivos o sistemas de vigilancia.