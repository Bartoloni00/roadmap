# Que es NPM
Es un manejador de paquetes para nodejs (al igual que composer para PHP).

NPM suele venir pre-instalado con nodejs.

ver la version de npm:
``` Bash
npm -v
```

Entrar a la ayuda de NPM:
``` Bash
npm
```

# Package.json File:
- Es el archivo de manifiesto con la informacion de la app.
- Lista las dependencias (nombre y version).
- Especifica si las versiones deberian actualizarse.
- Crea NPM scripts.
- Facilmente se crea con el comando:
    ``` Bash
    npm init
    ```
    Ese comando te dara una especie de formulario que deberas completar (o entregar todo en blanco) para saltearte esas preguntas usa la siguiente flag:
    ``` Bash
    npm init -y
    ```
    si deseas modificar algo de ese archivo desde la consola puedes hacerlo con:
    ``` Bash
    npm config set init-<campo a modificar>
    ```
    Para revisar alguno de esos campos puedes utilizar:
    ``` Bash
    npm config get init-<campo que quieres leer>
    ```
    y si quieres eliminar un campo usa el siguiente comando:
    ``` Bash
    npm config delete init-<campo a eliminar>
    ```

Instalar todos los modulos/librerias del proyecto:
``` Bash
npm install
```

Agregar un modulo/libreria al proyecto:
``` Bash
npm install <libreria>
```

**Estos dos comandos anteriores fallaran si el archivo package.json no existe o no tiene el campo de dependencies**

Algunas dependencias querremos que solo esten disponibles solo durante el desarrollo del proyecto para lograr esto utilizamos:
``` Bash
npm install --save-dev <nombre-del-paquete>
```

** Muchas dependencias ya poseen subdependencias lo cual hace que facilmente tengamos un monton de dependencias en nuestro proyecto**

Con el clasico "npm install" instalamos las dependencias de produccion y las de desarrollo. si solo queremos las dependencias de produccion ejecutemos:
``` Bash
npm install --production
```

Para desinstalar dependencias ejecutamos cualquiera de estos comandos:
``` Bash
npm uninstall <nombre-del-paquete>
```
``` Bash
npm remove <nombre-del-paquete>
```
``` Bash
npm rm <nombre-del-paquete>
```

Instalar una version especifica de una libreria:
``` Bash
npm install <nombre-del-paquete>@<version>
```

Actualizar a la ultima version:
``` Bash
npm update <nombre-del-paquete>
```

# Semanticas de las versiones de los paquetes
Ejemplo: 8.2.6 || major, minor, patch

- major: Cambios que rompen la compatibilidad hacia atras.
- Minor: Nuevas funcionalidades sin romper la compatibilidad.
- Patch: correccion de errores sin cambios funcionales.

En el archivo package.json veremos que en muchos casos podemos encontrarnos con el caracter "^" este caracter indica que esta dependencia se actualiza automaticamente

# Instalar modulos fuera del proyecto.
Tambien podemos instalar modulos de manera global en nuestra PC y tenerlo disponible en todos nuestros proyectos.
Para esto usaremos el comando:
``` Bash
npm install -g <nombre-del-paquete>
```
y para ver la ubicacion de estos modulos usaremos:
``` Bash
npm root -g
```

Para listar todas las dependencias en nuestro proyecto usaremos:
``` Bash
npm list
```
Listar las dependencias de desarrollo:
``` Bash
npm list --depth 0
```
Y si queremos listar estas dependencias de desarrollo y las subdependencias usaremos:
``` Bash
npm list --depth 1
```
Incrementando ese numero seguiremos viendo las subdependencias de cada libreria

# NPM SCRIPS
Los scripts permiten automatizar tareas comunes como compilación, pruebas y despliegue. Se definen en el archivo package.json bajo la propiedad scripts.
``` JSON
"scripts": {
  "start": "node index.js",
  "test": "jest",
  "build": "webpack"
}
```


# NPM WORKSPACES.
es una caracteristica de NPM que permite organizar múltiples paquetes dentro de un solo repositorio. Es decir, en lugar de tener múltiples repositorios para diferentes paquetes, puedes agruparlos todos en uno, lo que simplifica la gestión de dependencias, facilita la colaboración y mejora la eficiencia en proyectos grandes.

1. Para configurarlo debemos añadir la propiedad workspaces al archivo package.json del proyecto raiz, donde se especifican las ubicaciones de los paquetes.
2. Enlazado simbolico: npm crea enlaces simbolicos entre los paquetes, lo que permite que se accedan mutuamente como si estuvieran instalados localmente.
3. Gestion de dependencias: npm gestiona las dependencias de cada paquete de forma independiente, pero permite compartir de pendencias comunes entre ellos.

``` JSON
{
  "workspaces": [
    "packages/*",
    "components/*"
  ]
}
```