# Instalacion
podes instalarlo especificamente en un proyecto o de manera global en tu pc.

- Verificar si lo tenemos instalado:
``` Bash
tsc -v
```
- Instalarlo de manera global
``` Bash
npm i typescript -g
```
en mi caso al estar en Arch linux tuve que instalarlo utilizando sudo ya que no me permitia instalarlo desde mi usuario comun.

# Compilar archivos de typescript
No podemos ejecutar directamente los archivos con la extension ".ts" pero si los que tiene la extension ".js" por lo que para compilar el archivo de typescript y que se pase a javascript se usa el siguiente comando:
``` Bash
tsc <archivo.ts>
```

# Modo observador
Es una caracteristica de typescript el cual se queda escuchando los cambios del archivo ".ts" y cada vez que se cambia se genera automaticamente el archivo ".js".
``` Bash
tsc <archivo.ts> -w
```
(la "w" proviene de watch)

como ves solo estamos escuchando un solo archivo por lo que deberiamos inicializar el proyecto como un proyecto typescript.
Para hacer esto debemos estar ubicados en la raiz del proyecto y desde ese lugar ejecutar el siguiente comando:
``` Bash
tsc -init
```

Este comando nos crea un archivo llamado `tsconfig.json` como te imaginaras por su nombre desde este archivo json podremos configurar todo acerca sobre como se utilizara typescript en nuestro proyecto.

Ahora para poder observar varios archivos estando posicionados en la raiz del proyecto y luego de haber inicializado el proyecto como typescript ejecuta lo siguiente:
``` Bash
tsc -w
```

# Tipos de datos en Typescript
Typescript MEJORA EL USO DE LOS tipos de datos:
[Repositorio donde podemos ver algunos de  ellos con ejemplos](https://github.com/sergiecode/tipo-de-datos-en-typescript)

**Existen 3 tipos de datos:**

- Primitivos:
    - STRING
    - Number
    - BOOLEAN
    - UNDEFINED
    - NULL

- Compuestos:
    - OBJECT
    - ARRAY
    - ENUM
    - FUNCTION

- Definidos por el usuario:
    - CLASS
    - INTERFACE
    - TYPE

## Datos primitivos
``` Javascript
// Tipeamos una variable para que soo acepte valores booleanos
let isStudent: boolean = true;

// Tipeamos la variable number para que solo acepte valores numericos
let age: number = 24;

// En esta funcion vemos como tipeamos los parametros y ademas el retorno de esta funcion, como no retornamos nada utilizamos void, en un caso mas realista esta funcion deberia retornar un booleano
function isOlder(age: number): void
{
    let mensaje: string = '';
    if(age > 18)
        mensaje = 'Sos mayor de edad'
    {
    } else {
        mensaje = 'Sos menor de edad'
    }

    console.log(mensaje)
}


isOlder(age);

// Tambien podemos indicar en el tipado que se aceptan multiples tipos de datos diferentes:
let carcasa: string | null | undefined = 'ejemplo'
```

## Tipo de dato ANY
Tenemos que evitarlo siempre que sea posible, ya que aca estamos indicando que esa variable aceptara cualquier tipo de dato lo cual hace que typescript pierda todo el sentido.
Como ya entenderas se suele utilizar para saltearse el tipado y dejarlo para mas adelante.

``` Javascript
// si declaramos la variable sin indicar el tipado se asumira que su valor aceptado es any
let carcasa: any;

carcasa = 'hola'
console.log(carcasa) // carcasa aca es un string

carcasa = 14 // pisamos el valor y ahora se convirtio en un number
console.log(carcasa)
```

## Arrays
``` Javascript
// Indicamos que este sera un array que solo contendra numeros
let arreglo1: number[] = [1,2,3,4,5];

// Inidicamos que es un array que solo contendra strings
let arreglo2: string[] = ['html','css','js'];

// Hacer arrays de varias cosas:

// Esto no tenemos que hacerlo:
let arreglo2: any[] = ['html',2,'js'];
```
css
## Objetos
Es muy similar a Javascript

``` Javascript
// simplemente de la siguiente manera typescript ya entiende que humano es un objeto que contiene 3 valores de los cuales nombre y genero seran un string y tomaMate sera un booleano.
let humano = {
    nombre : 'abraham',
    genero : 'masculino',
    tomaMate : true
}
```

## Type personalizado
Se usa para muchas cosas pero principalmente para tipar objetos

``` Javascript
// los Types, clases y interfaces siempre arranca con mayuscula
type Humano = {
    nombre: string,
    tecnologias: string,
    tomaMate?: boolean | null
}

let abraham: Humano = {
    nombre : 'abraham',
    genero : 'masculino',
    tomaMate : true
}

// Como agregamos el operador ?: indicamos que ese dato puede no existir
let kratos: Humano = {
    nombre : 'kratos',
    genero : 'masculino',
}


// tambien permitimos que el valor de tomaMate sea null
let kratos: Humano = {
    nombre : 'kratos',
    genero : 'masculino',
    tomaMate:  null
}
```

## Interfaces:
``` Javascript
interface Programador {
    nombre: string,
    tecnologias: string[],
    tomaMate?: boolean | null
}
```

La principal diferencia con Type es que si lo utilizamos para por ejemplo: tipar los parametros de una funcion se fijara que cumpla las condiciones pero puede que ese parametro que le pasamos contenga mas cosas. Ejemplo:
``` Javascript
let dev = {
    nombre: 'abraham',
    tecnologias: ['laravel', 'node.js'],
    tomaMate: true,
    apellido: 'Bartoloni'
}

function saludar(programador: Programador) {
    console.log(`Hola ${programador.nombre}, Me impresiona tu habilidad con ${programador.tecnologias[0]}`)
}

saludar(dev)
```

El codigo anterior en type fallaria pero en interface no.

## Clases y POO
``` Javascript
class Pelicula {
    nombre?: string;
    protagonistas?: string[];
    actores?: string[];

    constructor(nombre: string, protagonistas: string[], actores: string[]) {
        $this.nombre = nombre
        $this.protagonistas = protagonistas
        $this.actores = actores
    }

    proyectarEnCine(){
        console.log(`${$this.nombre} esta siendo proyectada.`)
    }
}

const pelicula = new Pelicula('Soy leyenda', ['will smith'], ['perro', 'zombies'])
pelicula.proyectarEnCine()
```

## encapsulamiento y genericos
Los genericos son una especie de tipado que dejamos para mas adelante la sintaxis es "<>" y adentro ponemos lo que querramos. Ejemplo de uso: 
``` Javascript
class Sorteo<T> {
   private ticket?: T;

   constructor(nombre: string)
   {

   }

   setTicket(ticket: T)
   {
    this.ticket = ticket
   }

   getTicket()
   {
    return $this.ticket
   }

   public sortear(): string
   {
    return `El ticket con el valor: ${$this.ticket} es para: ${$this.nombre}`
   }
}

// creamos una instancia de la clase Sorteo e indicamos que el generico sera un numero
let sorteo = new Sorteo<number>('Abraham')
sorteo.setTicket(14)
```

## Ejemplo real en node y express para portear una api:
1. Instalamos typescript en el proyecto como una dev dependencia.
``` Bash
npm i typescript -D
```
2. Inicializamos el proyecto typescript:
``` Bash
tsc -init
```

Al pasar nuestro proyecto a typescript seguramente tendremos problemas con que no se encuentran los paquetes de tipos de las dependencias que estamos utilizando (ejemplo express) por lo que tendremos que buscar si alguien ya las hizo e instalarlas y si nadie lo hizo hacerlo nosotros.
``` Bash
npm install @types/express -D
```