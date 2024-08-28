# Construir y consumir API
Las API son mecanismos que permiten a dos componentes de software comunicarse entre si mediante un conjunto de definiciones y protocolos.
Por ejemplo, el sistema de software del instituto de meteorologia contiene datos meteorologicos diarios. La aplicacion meteorologica de su telefono "habla" con este sistema a traves de las API y le muestra las actualizaciones metereologicas diarias en su telefono.

API significa "interfez de programacion de aplicaciones". EN el contexto de las API, la palabra aplicacion se refiere a cualquier software con una funcion distinta. La interfaz puede considerarse como un contrato de servicio entre dos aplicaciones. Este contrato define como se comunican entre si mediante solicitudes y respuestas. La documentacion de su API contiene informacion sobre como los desarrolladores deben estructurar esas solicitudes y respuestas.

## ¿Como funcionan las API?
La arquitectura de las API suele explicarse en terminos de cliente y servidor. La aplicacion que envia la solicitud se llama cliente, y la que envia la respuesta se llama servidor. En el ejemplo del tiempo, la base de datos metereologicos del instituto es el servidor y la aplicacion movil es el cliente.
Las API pueden funcionar de cuatro maneras diferentes, segun el momento y el motivo de su creacion.
1. **API de SOAP**
Estas API utilizan el protocolo simple de acceso a objetos. EL cliente y el servidor intercambian mensajes mediante XML. Se trata de una API menos flexible que era mas popular en el pasado.
2. **API de RPC**
Estas API se denominan lamadas a procedimientos remotos. El cliente completa una funcion (o procedimiento) en el servidor, y el servidor devuelve el resultado al cliente.
3. **API de WebSocket**
Es otro desarrollo moderno de la API web que utiliza objetos JSON para transmitir datos. La API de websocket admite la comunicacion bidireccional entre las aplicaciones cliente y el servidor. El servidor puede enviar mensajes de devolucion de llamada a los clientes conectados, por lo que es mas eficiente que la API de REST.
4. **API de REST**
Estas son las API mas populares y flexibles que se encunetran en la web actualmente. EL cliente envia las solicitudes al servidor como datos. El servidor utiliza esta entrada del cliente para iniciar funciones internas y devuelve los datos de salida al cliente. Veamos las API de REST con mas detalle:
REST significa transferencia de estado representacional. REST define un confunto de funciones como GET, PUT, DELETE, etc. que los clientes pueden utilizar para acceder a los datos del servidor. Los clientes y los servidores intercambian datos mediante HTTP.
La principal caracteristica es que no tienen estado. La ausencia de estado significa que los servidores no guardan los datos del cliente entre las solicitudes. Las solicitudes de los clientes al servidor son similares a las URL que se escriben en el navegador para visitar un sitio web. La respuesta del servidor son datos simples, sin la tipica representacion grafica de una pagina web.

## Que es una API web?
Una API web o API de servicios web es una interfaz de procesamiento de aplicaciones entre un servidor web y un navegador web. Todos los servicios web son API, pero no todas las API son servicios web. La API de REST es un tipo especial de API web que utiliza el estado arquitectonico estandar explicado anteriormente.
> Los diferentes terminos relacionados con las API, como API de java o API de servicios, existen porque historicamente las API se crearon antes que la world wide web. Las API web modernas son las API de REST y los terminos pueden utilizarse indistintamente.

## ¿Que son las integraciones de las API?
Las integraciones de las API son componentes de software que actualizan automaticamente los datos entre los clientes y los servidores. Algunos ejemplos de integraciones de las API son la sincronizacion automatica de datos en la nube desde la galeria de imagenes de tu telefono o la sincronizacion de la hora y fecha.

## Beneficios de las API REST
1. **Integracion**: Las API se utilizan para integrar nuevas aplicaciones con los sistemas de software existentes. Esto aumenta la velocidad de desarrollo, ya que no hay que escribir cada funcionalidad desde cero. Puede utilizar Las API para aprovechar el codigo existente.
2. **Innovacion**: Sectores enteros pueden cambiar con la llegada de una nueva aplicacion. Las empresas deben responder con rapidez y respaldar la rapida implementacion de servicios innovadores. Para ello pueden hacer cambios en la API sin tener que reescribir todo el codigo.
3. **Ampliacion**: Las API presentan una oportunidad unica para que las empresas satisfagan las necesidades de sus clientes en diferentes plataformas. Por ejemplo, la API de mapas permite la integracion de informacion de los mapas en sitios web, Android, IOS, etc. Cualquier empresa puede dar un acceso similar a sus bases de datos internas mediante el uso de API gratuitas o de pago.
4. **Facilidad de mantenimiento**: La API actua como una puerta de enlace entre dos sistemas. Cada sistema esta obligado a hacer cambios internos para que la API no se vea afectada. De este modo, cualquier cambio futuro que haga una de las partes en el codigo no afectara a la otra.

## Diferentes tipos de API:
Las API se clasifican en funcion de su arquitectura o de su ambito de uso. Antes vimos los principales tipos de arquitecturas ahora veamos el ambito de uso.
1. **API privadas**
Estas son internas de una empresa y solo se utilizan para conectar sistemas y datos dentro de la empresa.
2. **API publicas**
Estan abiertas al publico y pueden cualquier persona utilizarlas. Puede haber o no alguna autorizacion y coste asociado a este tipo de API.
3. **API de socios**: 
Solo pueden acceder a ellas los desarrolladores externos autorizados para ayudar a las asociaciones entre empresas.
4. **API compuestas**: 
Estas combinan dos o mas API diferentes para abordar requisitos o comportamientos complejos del sistema.

## ¿Que es un punto de conexion de la API y porque es importante?
Los puntos de conexion de las API son los ultimos puntos de contacto del sistema de comunicacion de las API. Se trata de las URL de servidores, servicios y otras ubicaciones digitales especificas desde las que se envia y recibe informacion entre sistemas. Los puntos de conexion de las API son fundamentales para las empresas por dos motivos principales:
1. **Seguridad**
Los puntos de conexion de las API hacen que el sistema sea vulnerable a los ataques. La supervision de las API es crucial para evitar su uso indebido.
2. **Rendimiento**:
Los puntos de conexion de las API, especialmente los de alto trafico, pueden provocar cuellos de botella y afectar al rendimiento del sistema.

## ¿Como proteger una API REST?
Todas las API deben protegerse mediante una autenticacion y una supervision adecuada. Las dos maneras de proteger las API de REST son las siguientes:
1. **Token de autenticacion**
Se utilizan para autorizar a los usuarios a hacer la llamada a la API. Los tokens de autenticacion comprueban que los usuarios son quienes dicen ser y que tienen los derechos de acceso para esa llamada concreta a la API. Por ejemplo, cuando inicia sesion ene l servidor de correo electronico, el cliente de correo electronico utiliza tokens de autenticacion para un acceso seguro.
2. **Claves de API**
Las claves de API verifican el programa o la aplicacion que hace la llamada a la API. Identifican la aplicacion y se aseguran de que tienen los derechos de acceso necesarios para hacer la llamada a la API en cuestion.
Las claves de API no son tan seguras como los tokens, pero permiten supervisar la API para recopilar datos sobre su uso. Es posible que haya notado una larga cadena de caraceres y numeros en la URL de su navegador cuando visita diferentes sitios web. Esta cadena es una clave de la API que el sitio web utiliza para hacer llamadas internas a las API.

## ¿Como crear una API?

Se require la debida diligencia y esfuerzo para crear una API con la que otros desarrolladores quieran trabajar y en la que confien. Los siguientes son los cinco pasos necesarios para un diseño de API de alta calidad:

1. Planificacion de la API
Las especificaciones de la API, como OpenAPI, proporcionan el esquema para el diseño de su API. Es mejor pensar en los diferentes casos de uso por adelantado y asegurarse de que la API cumple con los estandares de desarrollo actuales.

2. Creacion de la API
Los diseñadores de API crean prototipos de API mediante codigo reutilizable. Una vez probado el prototipo, los desarrolladores pueden personalizarlo a las especificaciones internas.

3. Prueba de la API
Las pruebas de la API son las mismas que las de software y deben hacerse para evitar errores y defectos. Las herraminetas de pruebas de la API pueden utilizarse para reforzar la prueba de la API contra los ciberataques.

4. Documentacion de la API
Aunque las API son explicativas, la documentacion de las mismas sirve de guia para mejorar su uso. Las API bien documentadas que ofrecen una gama de funciones y casos de uso tienden a ser mas populares en una arquitectura orientada a servicios.

5. Comercializacion de la API
Asi como Amazon es un mercado en linea para venta minorista, los mercados de API existen para que los desarrolladores compren y vendan otras API. publicar su API puede permitirle monetizarla.

## ¿Que son las pruebas de API?
Las estrategias de pruebas de API son similares a otras metodologias de pruebas de software. El objetivo principal es validar las respuestas del servidor. Las pruebas de API incluyen lo siguiente:

- Hacer varias solicitudes a los puntos de conexion de la API para probar el rendimiento.

- Escribir prubeas de unidades para comprobar la logica empresarial y la correccion funcional.

- Probar la seguridad mediante la simulacion de ataques al sistema.

## ¿Como escribir la documentacion de la API?
La escritura de la documentacion completa de la API forma parte del  proceso de administracion de la API. La documentacion de la API puede generarse automaticamente mediante herramientas o escribirse manualmente. Entre algunas de las practicas recomendadas se encuentran las siguientes:

- Escribir las explicaciones en un ingles sensillo y facil de leer. Los documentos generados por las herramientas pueden resultar farragosos y requerir su edicion.
- Utilizar ejemplos de codigo para explicar la funcionalidad.
- Mantener la documentacion para que sea precisa y este actualizada.
- Orientar el estilo de arquitectura a los principiantes.
- Cubrir todos los problemas que la api puede resolver por los usuarios.

## ¿Como utilizar una API?
1. Obtener una clave de API. Esto se hace mediante la creacion de una cuenta verificada con el proveedor de la API.
2. Configurar un clente de API HTTP. Esta herramienta permite estructurar facilmente las solicitudes de la API mediante las claves de la API recibidas.
3. Si no tiene un cliente de API, puede intentar estructurar la solicitud por su cuenta en su navegador, para ello, consulte la documentacion de la API.
4. Una vez que se acostumbre a la nueva sintaxis de la API, puede comenzar a utilizarla en su codigo.

## ¿Que es una puerta de enlace de API?
Una puerta de enlace de API es un herramienta de administracion de API para clientes empresariales que utilizan una amplia gama de servicios de backend. Las puertas de enlace de API suelen encargarse de tareas comunes, como la autenticacion de usuarios, las estadisticas y la administracion de tarifas que se aplican a todas las llamadas a las API. Ejemplo: Amazon API Gateway

### Administracion de API
La administración de interfaces de programación de aplicaciones, o administración de API, consiste en un conjunto de herramientas y servicios que permiten a los desarrolladores y las empresas crear, analizar, operar y escalar las API en entornos seguros. La administración de API se puede entregar en las instalaciones, a través de la nube o utilizando un enfoque híbrido en las instalaciones de SaaS (Software como servicio).

En su nivel más simple, las interfaces de programación de aplicaciones (API) permiten la comunicación entre aplicaciones de software dispares. Los desarrolladores pueden conectar API de diferentes compañías y servicios para lograr resultados específicos. Los usos populares de las API incluyen habilitar la implementación de bibliotecas y marcos en diferentes idiomas, especificar la interfaz entre una aplicación y un sistema operativo, manipular recursos remotos a través de protocolos y definir la interfaz a través de la cual se producen interacciones entre un tercero y las aplicaciones que usan los recursos. Desde desarrolladores web y desarrolladores móviles independientes hasta grandes compañías y agencias gubernamentales, las API se aprovechan cada vez más en una variedad de industrias y casos de uso.

En la actualidad, los desarrolladores, las compañías y las organizaciones a menudo crean API abiertas que permiten a otros integrarse con sus productos y sus servicios. En todos los sectores existen cientos de miles de API diseñadas para facilitar el intercambio de información. A medida que aumenta la cantidad de API, aumenta la necesidad de que los desarrolladores y las compañías las monitoricen y administren de forma segura y escalable.

# Frameworks / Tecnologias mas utilizadas para construir API con Node.js
- Express: Express es uno de los frameworks más populares para Node.js, conocido por su simplicidad y flexibilidad. Es minimalista, lo que significa que proporciona solo las características básicas necesarias para construir una API, y permite añadir middleware y otras herramientas según sea necesario.
    **Ventajas**
    - Extremadamente popular: Hay una gran comunidad y abundante documentación disponible.
    - Simplicidad: Fácil de aprender y usar, especialmente para principiantes.
    - Flexibilidad: Puedes construir una API simple o una aplicación web completa, según las necesidades.
    - Middleware: Gran ecosistema de middleware que permite ampliar la funcionalidad de la aplicación.
    **Desventajas**
    - Performance: No es el mas rapido en comparacion con algunos frameworks mas nuevos.
    - Sin convencion estricta: La libertad que ofrece puede llevar a que el codigo se vuelva inconsistente si no se siguen buenas practicas
- Fastify: Fastify es un framework de Node.js diseñado para ser rápido y eficiente. Se enfoca en el rendimiento y la baja sobrecarga, y utiliza un sistema de plugins que facilita la modularidad y la reusabilidad del código.
    **Ventajas**
    - Alto rendimiento: Considerablemente más rápido que Express en muchos casos.
    - Sistema de plugins: Facilita la extensión y la reutilización de componentes de forma modular.
    - Esquema de validación: Integra validaciones de datos con JSON Schema, lo que mejora la seguridad y la confiabilidad.
    - Eficiencia: Menor consumo de recursos en comparación con otros frameworks.
    **Desventajas**
    - Comunidad más pequeña: Aunque está creciendo, todavía no es tan popular como Express, lo que puede limitar los recursos disponibles.
    - Curva de aprendizaje: Puede ser más difícil de aprender para los nuevos desarrolladores debido a su enfoque en el rendimiento y la modularidad.
- NextJS: Next.js es un framework de React que se usa principalmente para construir aplicaciones web y sitios web estáticos, pero también es capaz de construir APIs. Permite la renderización del lado del servidor y del lado del cliente, lo que lo hace muy poderoso para aplicaciones completas.
    **Ventajas**
    - SSR y SSG: Ofrece renderización del lado del servidor (SSR) y generación de sitios estáticos (SSG), lo que mejora la performance y el SEO.
    - File-based routing: El sistema de enrutamiento basado en archivos facilita la organización de las rutas.
    - Integración con React: Si ya estás familiarizado con React, Next.js es una extensión natural.
    - Full-stack: Permite desarrollar tanto el frontend como el backend en un solo proyecto.
    **Desventajas**
    - Más pesado: No es tan liviano como Express o Fastify, lo que puede ser un problema si solo necesitas una API.
    - Dependencia de React: No es ideal si no quieres usar React para el frontend.
    - Complejidad: Más complejo de configurar y mantener si solo necesitas una API simple.
- Hono: Hono es un framework ultraligero para construir APIs con Node.js. Está diseñado para ser extremadamente rápido y pequeño, con un enfoque en la simplicidad y el rendimiento. Es compatible con la especificación Web API, lo que lo hace similar a trabajar con el entorno fetch.
    **Ventajas**
    - Extremadamente ligero: Ideal para microservicios y aplicaciones donde el rendimiento es crítico.
    - Compatible con Web API: Si estás familiarizado con fetch y otros estándares web, Hono será fácil de adoptar.
    - Alto rendimiento: Comparable o incluso superior a Fastify en términos de velocidad.
    **Desventajas**
    - Comunidad pequeña: Aún es un framework emergente con una comunidad limitada.
    - Menos documentación: Puede ser difícil encontrar ejemplos o soluciones a problemas comunes debido a su juventud.

## Comparacion:
### Rendimiento:
Fastify y Hono son los frameworks mas rapidos. Hono, siendo ultraligero, puede tener la ventaja en escenarios donde cada milisegundo cuenta. Express, aunque mas lento, sigue siendo suficientemente rapido para muchas aplicaciones comunes. Next.js, debido a su naturaleza full-stack, puede ser mas pesado y menos eficiente para APIs puras.
### Facilidad de uso
Express y Next.js destacan por su facilidad de uso, especialmente Express, que es extremandamente sencillo para API simples.
Next.js es mas facil si ya estas trabajando con React. Fastify, aunque mas rapido, tiene una curva de aprendizaje mas pronunciada. Hono, debido a su simplicidad, es facil de adoptar si estas familiarizado con la Web API, pero la documentacion limitada puede ser un obstaculo.
### Flexibilidad y Econsistema
Express tiene el ecosistema mas amplio, con una enorme cantidad de middleware disponible. Fastify le sigue con su sistema de plugins, que es muy potente. Next.js es el mas adecuado para aplicaciones full-stack que requieren tanto frontend como backend en react. Hono es ideal para microservicios o APIs donde la simplicidad y el rendimiento son criticos, pero su ecosistema es mas limitado.
### Modularidad y Escalabilidad
Fastify se destacada con sus sistema de plugins, que facilita la creacion de aplicaciones modulares y escalables. Express, aunque flexible, require mas esfuerzo para mantener una estructura modular en aplicaciones grandes. Next.js es excelente para proyectos Full-stack, pero puede ser excesivo si solo se necesita una API. Hono, al ser ultraligero, es mas adecuado para microservicios que para aplicaciones muy grandes.

# LLamar a una API
A continuacion se muestran todas las maneras de llamar a un API desde Node.js no es necesario que conozcas todas pero puede ser util para saber cual es la que mas te conviene en cada situacion.
## HTTP MODULE
El modulo 'http' es parte del nucleo de node.js y se utiliza para realizar operaciones HTTP sin la necesidad de instalar paquetes adicionales. Es mas bajo nivel en comparacion con otras opciones y require mas configuracion.
``` Javascript
const http = require('http')

// configuramos las opciones de la solicitud
const options = {
    hostname: 'api.xambple.com',
    port: 80,
    path: '/data',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}

//Hacer la solicitud
const req = http.request(options, res => {
    let data = ''
    // recibimos los datos
    res.on('data', chunk => {
        data += chunk
    })

    //terminar la solicitud
    res.on('end',()=>{
        console.log(JSON.parce(data))
    })
})

// manejar errores
req.on('error', error => {
    console.error(`Error: ${error.message}`)
})

// finalizar la solicitud
req.end()
```

**Ventajas**
- No requiere instalacion de paquetes adicionales.
- Alta flexibilidad y control sobre la solicitud.

**Desventajas**
- Es mas complejo y verboso que otras opciones.
- Carece de caracteristicas como promesas o manejo de errores simplificado.

## Fetch
fetch es una API nativa de JavaScript disponible en navegadores y, gracias a bibliotecas como node-fetch, también se puede usar en Node.js. Es simple y moderna, usando promesas para manejar solicitudes HTTP.
``` Javascript
const fetch = require('node-fetch');

fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

**Ventajas**
- API moderna basada en promesas.
- Facil de usar y entender.
- Compatibilidad con navegadores y Node.js

**Desventajas**
- Necesitas una biblioteca adicional como 'node-fetch' en Node.js
- Carece de algunas funcionalidades avanzadas que ofrecen otros paquetes.

## axios
es una biblioteca popular para realizar solicitudes HTTP. Soporta promesas y ofrece una API fácil de usar, con características avanzadas como interceptores y cancelación de solicitudes.

``` Javascript
const axios = require('axios');

axios.get('https://api.example.com/data')
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));
```

**Ventajas**
- Soporte para promesas
- Manejo avanzado de solicitudes, como interceptores.
- API intuitiva y sencilla.

**Desventajas**
- Necesita ser instalado como una dependencia adicional.
- Mas pesado que otras opciones como 'fetch'
## KY
Es una biblioteca ligera para realizar solicitudes HTTP basada en fetch. Ofrece una API moderna y simplificada, incluyendo soporte para interceptores y manejo de errores mejorado.
``` Javascript
const ky = require('ky').default;

ky.get('https://api.example.com/data')
  .json()
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

**Ventajas**
- Ligero y facil de usar
- Basado en fetch, pero con funcionalidades adicionales.
- Ideal para proyectos pequeños o medianos.

**Desventajas**
- Menos popular que axios, lo que significa menos ejemplos y recursos.
- Menos caracteristicas avanzadas en comparacion con axios.

## Got package
es una biblioteca popular para realizar solicitudes HTTP en Node.js. Es rápida, con una API rica en funciones como manejo de streams, soporte para promesas, y opciones avanzadas de personalización.
``` Javascript
const got = require('got');

got('https://api.example.com/data')
  .json()
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

**Ventajas**
- Soporta promesas y streams.
- API rica en caracteristicas, similar a axios
- Manejo avanzado de errores y opciones de personalizacion.

**Desventajas**
- Puede ser mas conplejo de configurar para usos basicos.
- Necesita instalacion como una dependencia adicional.

## Comparacion
- Simplicidad: fetch y KY son las opciones más simples y modernas, ideales para solicitudes rápidas y sencillas. axios y got son más avanzados y completos, pero también más pesados. El módulo http es más complejo y menos intuitivo.

- Popularidad: axios es el más popular, seguido por fetch. got es conocido en la comunidad de Node.js, mientras que KY es menos común pero apreciado por su ligereza.

- Características: axios y got ofrecen más características avanzadas como interceptores, cancelación de solicitudes y manejo avanzado de errores. fetch y KY son más ligeros y directos, pero carecen de algunas de estas funcionalidades. El módulo http ofrece el control más granular, pero a costa de la simplicidad.

# Authentication
## JWT: JSON Web Token
Es un estandar abierto (RFC 7519) que define una forma compacta y autonoma para transmitir informacion de manera segura entre dos partes como un objeto JSON.
Esta informacion puede ser verificada y confiada porque esta firmada digitalmente. Enla mayoria de los casos, seutiliza para autenticar a usuarios en aplicaciones web.
### ¿Como funciona JWT?
1. Creacion del token:
    Cuando un usuario inicia sesion en una aplicacion, el servidor genera un JWT y lo envia al cliente (generalmente un navegador web)
    Este Token contiene tres partes:
    1. Header (Encabezado): Describe el tipo de token y el algoritmo de firma.
    2. Payload (Cuerpo): Contiene los reclamos o datos que se transmiten, como el ID del usuario y otros detalles.
    3. Signature (Firma): Se crea combinando el encabezado codigicado, el cuerpo codificado y una clave secreta utilizando el algoritmo especificado en el encabezado.
2. Uso del Token:
El cliente almacena el JWT (a menudo en el almacenamiento local o en una cookie) y lo envia en el encabezado de autorizacion de cada solicitud posterior al servidor.
EL servidor verifica la firma del token utilizando la clave secreta. Si la firma es valida, el servidor confia en los datos del token y permite el acceso a los recursos solicitados.
3. Verificacion y expiracion:
El servidor puede validar el JWT sin necesidad de consultar una base de datos, lo que hace que sea una solucion escalable.
Los JWT generalmente incluyen un tiempo de expiracion ('exp') despues del cual no son validos, lo que aumenta la seguridad.

Ejemplo de uso:
1. Instalar dependencias
``` Bash
npm install express jsonwebtoken
```
2. Crear un servidor express con JWT
``` Javascript
const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3000;

// Clave secreta para firmar el JWT
const SECRET_KEY = 'mySecretKey';

// Middleware para leer el cuerpo de las solicitudes
app.use(express.json());

// Ruta para iniciar sesión y generar un JWT
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Validar las credenciales del usuario (esto es un ejemplo simple)
  if (username === 'user' && password === 'password') {
    // Crear un payload con los datos del usuario
    const payload = {
      username,
      role: 'admin'
    };

    // Generar el JWT
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });

    // Enviar el token al cliente
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Credenciales incorrectas' });
  }
});

// Middleware para proteger rutas y verificar el JWT
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ error: 'Token requerido' });
  }

  // Verificar el JWT
  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Token inválido' });
    }

    // Si el token es válido, agregar la información del usuario a la solicitud
    req.user = user;
    next();
  });
};

// Ruta protegida, accesible solo con un JWT válido
app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Acceso permitido', user: req.user });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
```

3. Probar la aplicacion
    1. Iniciar sesion:
    Enviar una solicitud POST a la url de login (http://localhost:300/login) con el siguiente cuerpo:
    ``` JSON
    {
    "username": "user",
    "password": "password"
    }
    ```
    > si las credenciales son correctas recibis un JWT en la respuesta.
    2. Acceder a una ruta protegida:
    Enviar la solicitud a la ruta protegida (http://localhost:3000/protected) incluyendo el JWT en el encabezado de autorizacion:
    ``` http
    Authorization: Bearer <tu-jwt-aquí>
    ```
    > Si el token es valido, ingresaras a la ruta protegida.
## passport.js
Passport.js es un middleware de autenticación para Node.js que proporciona una manera sencilla y flexible de implementar autenticación en aplicaciones web. Es extremadamente modular y soporta una gran variedad de estrategias de autenticación, como autenticación local (usuario/contraseña), OAuth (por ejemplo, con Google, Facebook, Twitter), JWT, y muchas más.
### ¿Como funciona Passport.js?
1. Estrategias de Autenticación:

    Passport.js funciona con estrategias que definen cómo se autentican los usuarios. Una estrategia puede ser cualquier método de autenticación, como la verificación de un nombre de usuario y contraseña, o la autenticación a través de un servicio externo como Google o GitHub.
    Cada estrategia se configura de forma independiente, lo que permite añadir y combinar múltiples métodos de autenticación en una misma aplicación.

2. Serialización y Deserialización:

    Passport.js utiliza dos métodos clave: serializeUser y deserializeUser. Estos métodos determinan cómo los datos del usuario se guardan en la sesión y cómo se recuperan para ser utilizados en cada solicitud.
    Por ejemplo, el serializeUser podría almacenar el ID del usuario en la sesión, mientras que deserializeUser usa ese ID para cargar el usuario completo desde la base de datos.

3. Middleware:
    Passport.js se integra con Express como middleware, lo que permite proteger rutas, gestionar sesiones y controlar el flujo de autenticación con facilidad.

### Ventajas de passport.js
- Modularidad: Soporta una gran variedad de estrategias de autenticación, lo que permite integrar múltiples métodos en una sola aplicación.
- Integración con Express: Se integra de manera fluida con Express, facilitando la protección de rutas y la gestión de sesiones.
- Facilidad de uso: Una vez configurado, es muy sencillo proteger rutas y manejar la autenticación.
### Desventajas de passport.js
- Curva de aprendizaje: Puede ser un poco complicado al principio, especialmente cuando se trabaja con estrategias más complejas.
- Manejo de sesiones: Aunque es poderoso, puede requerir una configuración adicional para manejar sesiones y cookies de manera efectiva.