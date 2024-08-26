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
