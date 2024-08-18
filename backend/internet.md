# ¿como funciona internet?
Antes tenemos que entender que es una Network, una Network es un conjunto de computadoras o dispositivos conectados entre si. cada casa se podria considerar una Network y internet es una Network de Networks.
El internet fue creado en los años 60 por el departamento de defensa de EEUU. buscando una comunicacion descentralizada para los ataques nucleares.
En un alto nivel el internet funciona conectando dispositivos y computadoras usando unos protocolos estandarizados, esos protocolos definen que informacion es intercambiada entre disposivivos asegurando su seguridad.
Cuando envias informacion a travez de internet esta se rompe a travez de pequeños paquetes. el router examina el paquete y se lo pasa al router destinatario. este proceso continua hasta que el paquete llega a su destino final.
Para asegurarse que los paquetes se envian y reciben correctamente, internet usa una variedad de protocolos incluyendo Internet Protocol (IP) y Transmission Control Protocol (TCP). La IP es responsable de rutear los paquetes para su destino correcto, mientras que TCP se asegura que esos paquetes se transmitan  de forma segura y en el orden correto.
Junto a estos protocolos centrales hay una gran rango de otras tecnologias y protocolos que se usan para habilitar la comunicacion y el intercambio de informacion. Incluyendo: Domain Name System(DNS), the Hypertext Transfer Protocol(HTTP), and the Secure Sockets Layer/Transport Layer Security (SSL/TLS).
## Conceptos basicos y terminologia:
- Packet: es una pequeña unidad de informacion que se transmite por internet.
- IP address: un identificador unico asignado a cada dispositivo en la Network, usado por el router para enviar la informacion al dispositivo correcto.
- Domain Name: La version amigable para los humanos para identificar a los sitios web (google.com)
- DNS: el sistema de nombres de dominio es el responsable de convertir nombres de dominio en direcciones IP.
- HTTP: The HyperText Transfer Protocol es usado para tranferir informacion entre el cliente (suele ser el navegador web) y el servidor.
- HTTPS: una version encriptada de HTTP usada para proveer una comunicacion segura entre el cliente y el servidor.
- SSL/TLS: se usa para proveer una comunicacion segura en internet.

## El rol de los protocolos en internet.
Un protocolo es un conjunto de reglas y estandares que definen como la informacion sera intercambiada entre los dispositivos y los sistemas.
La IP es la responsable del enrutamiento de los paquetes de informacion hacia su destino correcto, mientras que TCP y UDP se aseguran que esos paquetes se transmitan de forma de forma segura y eficiente. DNS se asegura de traducir los nombres de dominio en direcciones IP y HTTP se usa para tranferir la informacion entre el cliente y el servidor.
Uno de los beneficion de los protocolos estandarizados es que gracias a estos un navegador web desarrollado por una compania puede comunicarse con otro servidor web desarrollado por otra compania. al fin y al cabo los dos estan aderidos a los mismos protocolos.
## Entendiendo los nombres de dominio y las direcciones IP.
Una direccion IP es un identificador unico para cada dispositivo en la network. se usa para rutear la informacion hacia el destino correcto. asegurando que la informacion se envie al destino previsto. Usualmente sn representados por cuatro numeros separados en periodos como: "192.168.1.1"
Por otro lado los nombres de dominio son la version amigable para indentificar sitios web para los humanos. suelen estar compuestas por dos o mas partes, separadas por periodos. por ejemplo google.com es un nombre de dominio. los nombres de dominio se traducen en direcciones IP usando el protocolo DNS.
DNS es la parte critica de la infraestructura de interneet, responsable de traducir los nombres de dminio en direcciones IP. cuando entras a una web tu computadora envia un DNS query al DNS server el cual retorna la direccion IP correspondiente.

## Introduccion a HTTP y HTTPS
Son dos de los protocolos mas comunes de internet basados en aplicaciones y servicios.

HTTP es el protocolo utilizado para transferir informacion entre el cliente (navegador web) y el servidor (el sitio web). cuando visitas el sitio web, tu navegador enia una peticion HTTP al servidor y le pregunta a la pagina o a otro recurso que hayas pedido. el servidor envia una respuesta HTTP de vuelta al cliente, esta respuesta contiene la informacion.

HTTPS es mas segura que HTTP, con la informacion encriptada se transmiten entre el clientes y el servidor usando SSL/TLS encryption. esto provee una capa mayor de seguridad, ayudando a proteger la informacion sensible como credenciales de login, informacion de pago y otra informacion personal.

# Construyendo aplicaciones con TCP/IP
Transmission control protocol/internet protocol es el protocolo fundamental de comunicacion usado en la mayoria de las aplicaciones y servision basados en internet. Esto provee seguridad, orden y checkeo de errores al transmitir la informacion corriendo en diferentes dispositivos.
- Ports: los puertos son usados para identificar aplicaciones o servicios corriendo en un dispositivo. cada aplicacion o servicio tiene asignada un numero de puerto unico. Permition que la informacion se envie al destino correcto.
- Sockets: un socket es una combinacion de direcciones IP y numeros de puertos, representando un endpoint especifico para la comunicacion. lo sockets se utilizan para establecer conecciones entre dispositivos y transferir datos entre aplicaciones.
- Connecciones: una coneccion es establecida entre dos sockets cuando dos dispositivos se quieren comunicar entre si, durante la coneccion el proceso de establecimiento, los dispositivos negocian varios parametros como el maximo tamaño por segmento y tamaño de ventanta. esto determina como la informacion sera transmitida sobre  la coneccion.
- Data transfer: una vez que la conneccion fue establecida la informacion puede ser transferida entre las aplicaciones corriendo en cada dispositivo. la informacion suele transmitirse en segments. cada segmento contiene una secuencia de numeros y otros metadats para asegurar envio confiable.

Cuando construyes una aplicacion con TCP/IP, necesitaras asegurarte que esa aplicacion esta designada para trabajar con los apropiados puertos, sockets y conecciones. tambien necesitaras estar familiarizado con varios protocolos y estandares como TCP/IP, HTTP, FTP (FILE TRANSFER PROTOCOL) y SMTP (SIMPLE MAIL TRANSFER PROTOCOL).

## El futuro: tendencias y tecnologias emergentes
- 5G: es la ultima generacion de tecnologia de network para celulares. ofreciendo una velocidad mas rapida, menor latencia y una mejor capacidad que las generaciones previas, esto se espera que se use en mas casos y aplicaciones como autos autonomos y cirugias remotas.
- Internet of things (IOT): se refiere a las network sobre dispositivos fisicos: autos, electrodomesticos, y otros objetos que se conecten a internet y puedan intercambiar informacion. Como IoT continua creciendo se espera que revolucione las industrias como la salud, transporte y manufacturacion.
- Inteligencia artificial: Las tecnologias como machine learning y procesamiento de lenguaje natural ya estan comenzando a ser parte de poderosas aplicaciones y servicios. desde asistentes de vos para deteccion de fraude. la IA continua avanzando y se espera que este apta para mas casos y transforme las industrias de la salud, finanzas y educacion.
- Blockchain: Blockchain es una tecnología de contabilidad distribuida que permite transacciones seguras y descentralizadas. Se utiliza para impulsar una amplia gama de aplicaciones, desde criptomonedas hasta gestión de la cadena de suministro.
- Edge computing: se refiere al procesamiento y almacen de datos en el borde de la red, se espera que sea apta para usarse en casos como analiticas en tiempo real y aplicaciones de baja latencia.

# Todo lo que necesitas saber sobre HTTP
(Bibliografia)[https://cs.fyi/guide/http-in-depth]
Es un protocolo de comunicacion de capa de aplicacion basado en TCP/IP que estandariza la forma en que los clientes y los servidores se comunican entre si.
Esto define como el contenido es requerido y transmitido a travez de internet.
HTTP por si mismo depende de TCP/IP para hacer peticiones y respuestas entre el cliente y el servidor. por defecto, TCP usa el puerto 80, pero puede usar cualquier otro puerto.

## El primer HTTP
La primera version documentada de HTTP fue HTTP/0.9 sacada en 1991. Esta fue la version mas simple la cual solo contenia el metodo GET.
- No existian los headers.
- **GET** era el unico metodo permitido
- Las respuestas tenian que ser HTML

## HTTP/1.0
En 1996 salio la siguiente version, no gustaba que las respuestas solo puedan ser HTML asique ahora se podian responder con otros formatos como: imagenes, videos, archivos, texto plano, etc.
Tambien añadieron mas metodos (POST y HEAD).
Se añadieron los HTTP headers a las peticiones y respuestas, codigos de estado para identificar la respuesta, soporte de caracteres, multi-part types, autorizacion, caching, content encoding y mas cosas.

Ahora que sus respuestas no eran solo texto plano su nombre perdio un poco de sentido (seria mejor llamarlo HMTP o Hypermedia transfer protocol) pero el nombre HTTP quedo para siempre.

Uno de los mayores problemas de HTTP/1.0 era la imposibilidad de realizar múltiples peticiones por conexión. Cuando el cliente necesitaba algo del servidor, tenía que abrir una nueva conexión TCP, y una vez completada esa única petición, la conexión se cerraba. Por ejemplo, si necesitábamos solicitar al servidor 10 imágenes, 5 archivos CSS y 5 archivos JS, teníamos que hacer una petición por cada archivo, lo que afectaba negativamente el rendimiento.

## Three-way handshake
El Three-way handshake en TCP es un proceso de tres pasos que establece una conexión fiable entre un cliente y un servidor. Consiste en intercambiar paquetes SYN, SYN ACK y ACK para sincronizar y establecer la conexión antes de transferir datos de la aplicación.

### Pasos del Three-way handshake
1. SYN: el cliente selecciona un numero aleatorio y lo envia al servidor (ejemplo: x).
2. SYN ACK: el servidor confirma la solicitud enviando un paquete ACK de vuelta al cliente. Este paquete contiene un numero aleatorio seleccionado por el servidor (ejemplo: y) y el numero x+1, donde x es el numero enviado por el cliente.
3. ACK: El cliente incrementa el numero y recibido del servidor y envia un paquete ACK de vuelta con el numero y + 1.

Una vez completado el three-way handshake, puede comenzar el intercambio de datos entre el cliente y el servidor. cabe destacar que el clietne puede comenzar a enviar datos de la aplicacion tan pronto como envie el ultimo paquete ACK, pero el servidor debe esperar a recibir este paquete ACK para cumplir con la solicitud.

## HTTP/1.1
En 1999, HTTP/1.1 fue lanzado con varias mejoras importantes respecto a la versión anterior. Las principales mejoras fueron:
- Nuevos metodos HTTP fueron introducidos (PUT, PATCH, OPTIONS, DELETE).
- Encabezado "Host" se volvió obligatorio, lo que permite a los servidores identificar correctamente el sitio web solicitado en entornos de servidores virtuales, mejorando la gestión de recursos y la compatibilidad con futuras extensiones del protocolo.
- En HTTP/1.1 se empezaron a introducir las conecciones persistentes, ahora las conecciones no se cerraban por defecto sino que se mantenian abiertas esto permitia la secuencia de multiples peticiones.
- Soporte para Pipelining. cuando el cliente podia enviar multiples peticiones al servidor sin esperar la respuesta del mismo en la misma coneccion el servidor tenia que enviar la misma secuencia de respuestas en el mismo orden.
    Este soporte a los pipelining trajo problemas de contenido dinamico ya que el servidor no podia identificar la longitud de ante mano.
    - Sin "Content-Length": si el servidor no puede calcular la logitud del contenido, no puede usar el encabezado "content-length". Esto significa que el cliente no puede determinar el final de una respuesta y el inicio de la siguiente usando solo este encabezado para resolver este problea se introdujo:**chunked encoding** o codificacion por fragmentos.
    - Chunked encoding: permite al servidor enviar la respuesta en fragmentos o "chunks". cada fragmento tiene un encabezado que indica su tamaño, y el ultimo fragmneto señala el final de la respuesta.
    Esto permite al cliente saber exactamente donde termina cada fragmento de la respuesta, incluso cuando el contenido es dinamico y su longitud no se conoce de antemano.
Si no se puede usar ni Content-Length ni chunked encoding, la conexión debe cerrarse al final de la solicitud.
- La tranferencia de chunks en casos de contenidom dinamico: cuando el servidor no puede realmente encontrar el content-length al comenzar la transmicion, debemos comenzar enviando el contenido en piezas (chunk a chunk) y añadir el content-length a cada chunk que enviamos, cuando todos se hayan enviado, debemos enviar otro chunk vacion para identificar que la transmicion fue completada. los servidores incluyen el header: **Transfer-Encoding: chunked**
- Se incluyo la autentificacion por proxy.
- Otras Mejoras: Incluye soporte para caching, rangos de bytes, conjuntos de caracteres, negociación de idiomas, cookies del cliente, compresión mejorada, nuevos códigos de estado y más.

## SPDY - 2009
Google se puso a la cabeza del proyecto y empezo a experimentar con protocolos alternativos para hacer la web mas rapida y mas segura, reduciendo la latencia de las web (SPDY es un nombre comercial no un acronimo).
En 2016 google decidio que no queria que dos estandares compitieran y hizo un merge a HTTP dando vida a HTTP/2 y deprecando SPDY.

## HTTP/2 - 2015
Las principales diferencias con HTTP/1.1:
1. Protocolo binario: HTTP/2 es un protocolo binario, lo que facilita su analisis pero lo hace ilegible para los humanos- Los componentes principales de HTTP/2 son los frames(marcos) y strams(flujos):
    - Frames y streams: los mensajes HTTP ahora se componen de uno o mas frames. los tipos de frames incluyen headers (Para metadatos) y DATA (para el contenido), entre otros. cada solicitud y respuesta HTTP/2 tiene un ID de flujo unico y se divide en frames, que son piezas binarias de datos. Una coollecion de frames forma un stream. Las solicitudes del cliente usan IDs de flujo impares y las respuestas del servidor usan IDs de flujo pares.
    - RST_STREAM: Este frame especial se utiliza para abortar un flujo especifico sin cerrar toda la conexion entera para detener la respuesta del servidor.
2. Multiplexing: enviar multiples streams de manera asincronica a traves de una sola conexion TCP. esto resuelve el problema del bloqueo de cabecera (Head-of-line-blocking) que existia en versiones anteriores, permitiendo que otras solicitudes se proceses sin esperar a la que esta tardando mas.
3. Compresion de encabezados: Para reducir la redundancia de datos. **los valores literales se codifican usando el codigo Huffman** y tanto el cliente como el servidor mantienen una tabla de encabezados para omitir encabezados repetitivos en solocitudes subsiguientes. los encabezados siguen siendo los mismos que en HTTP/1.1, con la adicion de algunos pseudo encabezados como ":method", ":scheme", ":host", ":path".
4. Server push: permite al servidor enviar recursos al cliente sin que este los solicite explicitamente. Ejemplo: al cargar una pagina web, el servidor puede anticiparse y enviar los recursos necesarios. Esto se realiza mediante un frame llamado PUSH_PROMISE que notifica al cliente que el servidor enviara un recurso especifico.
5. Priorizacion de solicitudes: El cliente puede asignar prioridades a los streams usando la informacion de priorizacion en el frame HEADERS o mediante un frame PRIORITY. sin informacion de prioridad, el servidor procesa las solicitudes de manera asincronica. la priorizacion ayuda al servidor a decidir la asignacion de recursos para procesar las solicitudes segun su importancia.
6. Seguridad: Aunque no es obligatorio por especificaciones, la mayoria de los proveedores solo soportan HTTP/2 sobre TLS (transport layer secutiry). HTTP/2 requiere TLS version 1.2 o supeior, ciertos tamaños minimos de claves y el uso de claves efimeras.

## Todo sobre los nombres de dominio:
Son una parte clave de la infraestructura de internet. Proporciona una direccion legible para cualquier servidor web disponible en internet.
Cualquier computadora con internet puede ser alcanzada a partir de una IP publica, la cual esta formada por 32 bits para el protocolo IPv4 (por lo general se escribe con 4 números separados por puntos entre el 0 y 255, por ejemplo, 173.194.121.32) o por 128 bits para la versión IPv6 (formada por 8 grupos de 4 números hexadecimales separados por dos puntos, ejemplo 2027:0da8:8b73:0000:0000:8a2e:0370:1337).  Las computadoras pueden manejar estas direcciones facilmente, pero las personas no, ya que son dificiles de recordar y pueden cambiarse en cualquier momento. Para resolver este problema se usan direcciones que las personas puedan leer, intuitivas y faciles de recordar. esta direcciones se llaman nombres de dominio.
### Estructura de los nombres de dominio

**google.com**
**myargentina.gov**
**davinci.edu.ar**
- TLDs locales como .us,.fr o .se pueden requerir de un servicio en un determinado idioma o que este alojado en un pais en particular.
- Los TLDs que contienen .gov solo esta permitido que lo usen los departamentos de gobierno.
- Los TLDs como .edu y .ac .uk son para instituciones academicas o educacionales.

- TLD de primer nivel, tienen informacion mas generica como .com, .org, .net y no requieren que cumplan un criterio en particular.
- SLD: puede ser cualquier cosa, desde una letra hasta una oracion,  Un nombre de dominio puede tener muchas etiquetas (o componentes), no es obligatorio ni necesario tener tres etiquetas para formar un nombre de dominio. Por ejemplo, www.inf.ed.ac.uk es un nombre de dominio correcto. Para cualquier dominio sobre el que se tenga control (por ejemplo mozilla.org), uno puede crear otros nombres de dominio (a veces llamados "subdominios", por ejemplo developer.mozilla.org o iot.mozilla.org).
- 2dl: ejemplos: google, myargentina, davinci.

## Los dominios se compran?
No, se paga por el derecho de usarlo por uno o mas años y se te priorizara en caso de renovacion.

## Cual es la diferencia entre un nombre de dominio y una URL
Uniform resouce locator (url) Aveces llamado direccion web, contiene el nombre de dominio de un sitio y otra informacion, incluyendo el protocolo y la ruta, ejemplo: URL 'https://abrahambartoloni.com/blog/git.php#introduccion', abrahambartoloni.com es el nombre de dominio, https, el procolo y /blog/git.php es la ruta especifica de la pagina del sitio web y por ultimo #introduccion es un ancla a una seccion especifica de una pagina del sitio web.

## que es un servidor web?
Un servidor web es un software que se ejecuta en un servidor (una computadora) y se encarga de gestionar, procesar y responder a las solicitudes de los navegadores web. Cuando ingresás una URL en tu navegador, éste envía una solicitud al servidor web correspondiente, que luego busca el contenido solicitado (como una página HTML, una imagen o un archivo) y lo envía de vuelta al navegador para que lo muestre al usuario.

Además de servir contenido estático, como archivos HTML y multimedia, muchos servidores web también pueden procesar contenido dinámico a través de scripts o aplicaciones web, utilizando tecnologías como PHP, Python, Node.js, entre otros. Los servidores web también manejan tareas como la gestión de seguridad, la autenticación de usuarios y la compresión de datos para mejorar la eficiencia en la transmisión de información.

Ejemplos populares de servidores web son Apache, Nginx, Microsoft IIS y LiteSpeed.

## ¿como funciona el DNS?
1. Solicitud del navegador: cuando ingresas a una URL en tu navegador, este no conoce la direccion IP correspondiente al nombre de dominio. Por eso necesita consultar el DNS.
2. Consulta al cachè local: Primero revisa si el navegador ya contiene la dirrecion IP en alguna busqueda reciente, en caso contrario continua el proceso.
3. Consulta al servidor DNS recursivo: Si no hay información en el caché local, la solicitud se envía a un servidor DNS recursivo, que normalmente es proporcionado por tu proveedor de servicios de internet (ISP).
4. Búsqueda en la jerarquía DNS:
    - Servidor raíz: El servidor DNS recursivo primero consulta a uno de los servidores raíz del DNS, que le indica cuál servidor TLD (dominio de nivel superior) debe consultar según la extensión del dominio (por ejemplo, .com, .org).
    - Servidor TLD: El servidor recursivo consulta al servidor TLD, que le indica cuál servidor de nombres autoritativo gestiona el dominio específico (por ejemplo, google.com).
    - Servidor autoritativo: El servidor recursivo consulta al servidor autoritativo, que tiene la información exacta de la dirección IP asociada al nombre de dominio solicitado.
5. Respuesta al navegador: Una vez que el servidor recursivo obtiene la dirección IP, la almacena en su caché para futuras consultas y la envía de vuelta al navegador, que entonces puede conectarse al servidor web correspondiente utilizando esa dirección IP.

## Todo sobre los navegadores web.
### Su principal funcionalidad
Es presentrr el recurso web que elijas solicitandolo al servicio y mostrandolo enla ventana del navegador(documentos HTML, PDF, imagenes, etc.) El usuario especifica la ubicacion del recurso mediante un URI (identificador uniforme de recursos)

La manera en la que el navegador interpreta y muestra los archivos HTML se especifica en las especificaciones HTML y CSS. La organizacion W3C (World wide web consortium), que es la organizacion de estandares para la WEB. Durante años, los navegadores se adaptaron a solo una parte de las especificaciones y desarrollaron sus propias extensiones. esto provoco graves problemas de compatibilidad para los autores web. Actualmente la W3C logro una mayor estandarizacion.

No existe ninguna obligatoriedad de elementos en la interfaz de usuario de los navegadores pero si suelen colocarse ciertos elementos. ejemplo: Barra de direcciones para insertar el URI.

### Motores de renderizacion:
Un motor de renderización web es el componente de un navegador web que se encarga de interpretar el código HTML, CSS y JavaScript de una página web para convertirlo en la interfaz gráfica que ves en pantalla. Este proceso incluye el análisis del código, la construcción del DOM (Document Object Model), el cálculo de los estilos visuales, el renderizado de las capas y el dibujo final en la pantalla.

Para poder renderizar tipos de archivos que no son HTML, CSS, o JavaScript, como documentos PDF, contenido multimedia (audio, video), y otros formatos especializados se utilizan los "complementos". Estos complementos actúan como extensiones al motor de renderización principal, integrándose en el proceso de renderizado para ofrecer una experiencia de usuario más completa.

#### ¿Cómo funciona un motor de renderización web?
1. **Parsers y tokenizadores:** El motor comienza leyendo el código HTML y CSS, y lo convierte en un árbol de nodos conocido como DOM.
2. **Construcción del DOM:** El DOM es una representación jerárquica de todos los elementos de la página. A medida que el motor parsea el HTML, crea nodos para cada etiqueta, y a estos nodos se les aplica el estilo adecuado (CSS).
3. **Aplicación de estilos (CSSOM):** Se crea una estructura similar al DOM, llamada CSSOM (CSS Object Model), donde se almacenan las reglas de estilo. Este CSSOM se combina con el DOM para determinar cómo se verá cada elemento.
4. **Layout:** En esta etapa, el motor calcula la posición exacta y el tamaño de cada elemento en función del DOM y CSSOM.
5. **Renderización:** Aquí es donde el motor dibuja los elementos en la pantalla utilizando técnicas como el rasterizado, que convierte las instrucciones en píxeles que se mostrarán en la pantalla.
6. **JavaScript y el motor de JavaScript:** Si la página contiene JavaScript, el motor de JavaScript (como V8 en Chrome) ejecuta el código y puede modificar el DOM o CSSOM, provocando una nueva fase de renderizado.

Los motores de renderizacion mas comunes son Blink el cual se utiliza por Chrome, edge, brave, etc. el cual es un fork del motor WebKit, desarrollador principalmente por google. Blink es muy rapido y soporta las ultimas tecnologias web. Todos estos navegadores al utilizar chromium utilizan Blink. Gecko es el otro motor de renderizado el cual es utilizado por Mozilla firefox y desarrollado por Mozilla, se conoce por su flexibilidad y soporte a estandares web avanzados, ademas, al intrudicir el proyecto Quantum mejoro considerablemente la velocidad y eficiencia del motor.

#### El flujo principal del motor de renderizado.
Por lo general, esto se hace en fragmentos de 8KB. El motor de renderizado **comenzara a analizar el documento HTML y convertira los elementos en nodos DOM** en un arbol denominado "arbol de contenido". El motor analizara los datos de estilo, tanto los archivos CSS externos como en elementos en estilo. La informacion de estilo junto con las intrucciones visuales en el codigo HTML se usara para crear otro arbol: **el arbol de renderizacion**.
El arbol de renderizacion contiene rectangulos con los atributos visuales como el color y las dimensiones, los rectangulos estan en el orden correcto para que se muestren en la pantalla.

Despues de la construccion del arbol de renderizacion, **se pasa por un proceso de diseño o administracion de recursos**. Esto significa que debes indicar a cada nodo las coordenadas exactas del lugar en el que debe aparecer en la pantalla. **La siguiente etapa es Painting**: SE recorrera el arbol de renderizacion y se pintara cada nodo con la capa de backend de la IU.

Para mejorar la experiencia del usuario, se renderiza el contenido lo antes posible y no se espera hasta que se analice todo el HTML para comenzar a compilar y diseñar el arbol de representacion.

#### Analisis general
Cuando visitas una pagina web, el navegador recibe un monton de informacion, como texto, imagenes, y enlaces. Siguiendo un conjunto de reglas muy especificas el navegador se encarga de organizar estas piezas para que tu veas la pagina correctamente y todo funciones.
El navegador divide la pagina en partes asi como se hace en una formula matematica y las organiza en un arbol para entender que hacer primero al igual que como hariamos al intentar resolver una formula como por ejemplo: 3+2-1 = primero sumamos, luego restamos. esta organizacion es la que se da en el arbol.

#### Gramatica sin contexto ¿que es?
Son las reglas del juego que no necesitan mirar el contexto de cada pieza para decidir que hacer. Estas reglas  describen como las cadenas (secuencias de simbolos) de un lenguaje se generan y como se deben estructurar.
Caracteristicas claves:
1. Producciones: Las reglas de produccion tienen la forma 'A -> a', donde 'A' es un simbolo no terminal (una categoria gramatical como una etiqueta HTML) y 'a' es una secuencia de simbolos que puede incluir tanto simbolos terminales (elemenos del lenguaje, como texto o numeros) como no terminales.
2. Independencia del contexto: lo crucial es que el simbolo no terminal 'A' puede ser reemplazado por 'a' sin considerar el contrexto en el que 'A' aparece. Es decir, la regla se aplica siempre de la misma manera, independientemente de lo que haya antes o despues.
3. Determinismo: las reglas se pueden aplicar de manera consistente para analizar o generar las estructuras del lenguaje.

- Símbolos No Terminales: Son las categorías gramaticales que se pueden descomponer o expandir en otros símbolos, y no aparecen directamente en el código final que se procesa. En el contexto de HTML:
    - Ejemplos de símbolos no terminales pueden ser cosas como Documento, Cuerpo, Contenido, etc. Estos representan partes abstractas de la estructura de un documento HTML.
- Símbolos Terminales: Son los elementos más básicos del lenguaje que no se descomponen más. En HTML, los símbolos terminales son los elementos que realmente ves en el código:
    - Etiquetas HTML como <html>, <body>, <p>, y <div> son ejemplos de símbolos terminales.
    - Texto plano dentro de las etiquetas, como el contenido "Hello, World!" en <p>Hello, World!</p>, también es un símbolo terminal.

#### Combinacion de Lexer y analizador
Consta de dos subprocesos: analisis lexico y analisis sintactico.
- Analisis lexico: Proceso de divir la entrada en tokens. los token son el vocabulario del lenguaje: la coleccion de componentes basicos validos.
- analisis sintactico: aplicacion de las reglas de sintaxis del lenguaje.

Estos analizadores suelen dividir el trabajo entre dos compoenentes: el **lexer** (tokenizador) que es responsable de dividr la entrada en tokens validos y el analizador que construye el arbol de analisis analizando la estructura del documento de acuerdo con las reglas de sintaxis del lenguaje. quitando caracteres irrelevantes, como espacios en blanco y saltos de linea.

El proceso de analisis es iterativo. el analizador pedira al lexer un token nuevo y tratara de hacer coincidir el token con una de las reglas de sintaxis. si una regla coincide, se agrega un nodo correspondiente al token al arbol de analisis y el analizador solicitara otro token.
Pero si no coincide ninguna regla, el analizador almacena el token internamente y seguira solicitando tokens hasta que se encuentre una regla que coincida con todos los tokens almacenados internamente si no se encuentra ninguna regla el analizador presentara una excepcion. Lo cuan significa que el documento no es valdido y contiene errores de sintaxis.

#### Tipos de analizadores
1. **Top Down**: Examinan la estructura de alto nivel de la sintaxis y buscan una coincidencia de reglas. 
    Ej: veamos la formula: "2 + 3 - 1" ... Primero identifica 2 + 3 como una expresion y luego identifica a 2 + 3 - 1 como una expresion. este proceso de identificacion de la expresion evoluciona y coincide con las otras reglas.
    **Lenguajes donde se utiliza: Pascal, Lisp, Python, JavaScript, C.**
2. **Bottom Up:** los analizadores ascendentes comienzan con la entrada y la transforman gradualmente en reglas de sintaxis, comenzando desde las reglas de bajo nivel hasta que se cumplen las reglas de alto nivel.
    El proceso es el siguiente:
    1. Lee los tokens.
    2. Combina estos tokens para formar subexpresiones
    **Lenguajes donde se utiliza: C++, Java, Ruby, Perl, GO**

Crear un analizador es para tu lenguaje es una tarea muy complicada por lo que existen generadores de analizadores.
Webkit usa dos generadores de analizadores conocidos **Flex** para crear un analizador y **Bison** para crear un analizador (tambien llamados Lex y Yacc) Flex es un archivo que contiene definiciones de expresiones regulares de los tokens y bison son las reglas de sintaxis del lenguaje en formato BNF.

**¿que es el formato BNF?**
BNF (Backus-Naur Form) es un lenguaje formal utilizado para describir la sintaxis de lenguajes de programación y otros lenguajes formales. BNF es una notación que permite definir reglas gramaticales de forma clara y estructurada, lo que es especialmente útil para diseñar y especificar compiladores e intérpretes.
``` plaintext
<expresión> ::= <término> | <expresión> + <término> | <expresión> - <término>
<término> ::= <factor> | <término> * <factor> | <término> / <factor>
<factor> ::= <número> | ( <expresión> )
<número> ::= 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

```
BNF es ampliamente utilizado para especificar la gramática de lenguajes de programación como C, Java, Python, etc. Los documentos de referencia del lenguaje a menudo incluyen una descripción de la gramática en BNF.

#### Analizador HTML
El trabajo del analizador de HTML es analizar el lenguaje en un arbol de analisis

##### Gramatica HTML
El vocabulario y la sintaxis de HTML se define en especificaciones creadas por la W3C.
Lamentablemente, todos los temas de los analizadores convencionales no se aplican al codigo HTML. HTML no se puede definir facilmente mediante una gramatica libre de contexto que los analizadores necesitan.

El formato oficial para definir HTML es **DTD** (DEFINICION DEL TIPO DE DOCUMENTO). Pero no es una gramatica sin contexto.

HTML es muy parecido a XML y existen muchos analizadores de XML. De hecho existe una variacion XML de HTML y XHTML. pero la diferencia entre estos dos es el enfoque. siendo HTML mas tolerante a omitir ciertas etiquetas que luego se agregan implicitamente u omitir etiquetas de inicio o finalizacion y asi sucesivamente. Siendo mucho mas suave en lugar de rigido y exigente como XML.
Esta pequeña diferencia hace que HTML sea mas popular pero dificulta la gramatica formal por lo que los analizadores convencionales no pueden analizar facilmente HTML.

En resumen estos son los motivos por los que no se puede analizar con los analizadores normales:
1. La naturaleza tolerante del lenguaje.
2. El hecho de que los navegadores tengan la tolerancia a errores tradicional para admitir casos conocidos de HTML no valido.
3. El proceso de analises es reentrante, en HTML el codigo es dinamico y con llamadas (principalmente con JS) se pueden agregar tokens.

##### DTD de HTML
DTD es el formato que se usa para definir lenguajes de la familia SGMI. el formato contiene definiciones para todos los elementos permitidos, sus atributos y jerarquias. La DTD no crea gramatica libre de contexto.
*No encontre el DTD de HTML 5 dejo el de HTML4 aca:* 
[DTD de HTML4](https://www.w3.org/TR/html4/strict.dtd)
    SGML es un meta-lenguaje, lo que significa que no es un lenguaje de marcado en si mismo, sino un conjunto de reglas para definir lenguajes de marcado. Algunos lenguajes derivados de SGML: HTML, XML, XHTML, DocBook, MathML

##### DOM
Es un arbol de nodos de elementos y atributos del DOM. DOM (Document Object Model). Es la presentacion de objetos del documento HTML y la interfaz de los elementos HTML al mundo exterior como JavaScript.
La raiz del arbol se denomina Document y luego tiene una relacion uno a uno con el lenguaje de marcado.

##### El algoritmo de asignacion de token
El algoritmo es demasiado complejo para describirlo por completo, pero veamos un ejemplo simple para entenderlo. antes dejo aca un link al algoritmo completo:
[Algoritmo de asignacion de token completo](https://html.spec.whatwg.org/multipage/parsing.html)
1. Al encontrar el caracter "<" el estado cambia a Tag open state.
2. luego al encontrar un caracter "a-z" el estado queda en Tag name state y se queda en este estado hasta encontrar un ">"
3. ahora que se alcanzo esa etiqueda se emite el token actual y el estado cambia a "Estado de los datos"
4. Empieza a consumir los caracteres del contenido de la etiqueta uno a uno y se emiten los token de caracter.
5.  esto continua hasta alcanzar el `</body>`

##### Algoritmo de construccion de arboles
Simultaneamente a la creacion del analizador se crea el objeto Document y durante la construccion del arbol se modificara el DOM, agregandole los elementos.
1. Modo Inicial: Se recibe el HTML.
2. Before html: en esta etapa, se vuelve a procesar el HTML, lo que provoca la creación del elemento HTMLHtmlElement, que se añadirá al objeto document raíz.
3. Before head: Se recibe el token y se crea el HTMLHeadElement de manera implícita, incluso si no tenemos un encabezado definido.
4. IN THE HEAD and Before the head: Se procesan todos los elementos dentro de la sección `<head>` y se inserta el HTMLBodyElement. El modo se transfiere a In Body.
5. In body: Se procesan las etiquetas y los tokens de caracteres, creando e insertando los nodos de texto. Los demás caracteres se añaden a estos nodos.
6. After body: Se activa al recibir la etiqueta de cierre del `<body>`
7. After after body: Cuando se recibe la etiqueta de cierre del `<html>`, se entra en este estado y se finaliza el análisis.
8. El navegador marca el documento como interactivo y comenzara a analizar las secuencias de comandos en diferido.

##### Tolerancia a errores:
Nunca se obtendra una sintaxis no valida en una pagina HTML. Los navegadores corrigen el contenido no valido y continuan.
El manejo de errores es bastante consistente en los navegadores, pero sorprendentemente no ha formado parte de las especificaciones HTML. Como los marcadores y los botones atrás/adelante, es algo que se desarrolló en los navegadores a lo largo de los años. Se conocen construcciones HTML no válidas que se repiten en muchos sitios y los navegadores intentan corregirlas de manera que se ajusten a los otros navegadores.

los principales puntos para resolver estos errores de sintaxis:
1. El elemento que se agrega está explícitamente prohibido dentro de alguna etiqueta externa. En este caso, debemos cerrar todas las etiquetas hasta la que prohíbe el elemento y, luego, agregarlas.
2. No podemos agregar el elemento directamente. Esto puede deberse a que la persona que escribió el documento olvidó alguna etiqueta intermedia (o que la etiqueta intermedia es opcional). Esto podría suceder con las siguientes etiquetas: HTML HEAD BODY TBODY TR TD LI (¿olvidé alguna?).
3. Queremos agregar un elemento de bloque dentro de un elemento intercalado. Cierra todos los elementos intercalados hasta el siguiente elemento de bloque más alto.
4. Si esto no ayuda, cierra los elementos hasta que podamos agregarlos o ignora la etiqueta.

**Ejemplos mas comunes:**
1. `</br>` en lugar de `<br>`
``` Javascript
if (t->isCloseTag(brTag) && m_document->inCompatMode()) {
     reportError(MalformedBRError);
     t->beginTag = true;
}
```
2. Una tabla desviada
    - Sin corregir
    ``` HTML
    <table>
    <table>
        <tr><td>inner table</td></tr>
    </table>
    <tr><td>outer table</td></tr>
    </table>
    ```
    - Luego de ser corregido por webkit
    ``` HTML
    <table>
    <tr><td>outer table</td></tr>
    </table>
    <table>
    <tr><td>inner table</td></tr>
    </table>
    ```
    - Codigo interno que resuelve el error
    ``` Javascript
    if (m_inStrayTableContent && localName == tableTag)
        popBlock(tableTag);
    ```

#### Analisis de CSS
A diferencia de HTML, CSS es una gramatica sin contexto y se puede analizar
A la hora de renderizarse. Conceptualmente, parece que, como las hojas de estilo no cambian el árbol del DOM, no hay razón para esperarlas y detener el análisis del documento. Sin embargo, existe un problema con las secuencias de comandos que solicitan información de estilo durante la etapa de análisis del documento. Si el estilo aún no se carga ni analiza, la secuencia de comandos obtendrá respuestas incorrectas y, al parecer, esto causó muchos problemas. Parece ser un caso límite, pero es bastante común. Firefox bloquea todas las secuencias de comandos cuando hay una hoja de estilo que todavía se está cargando y analizando. WebKit bloquea las secuencias de comandos únicamente cuando intentan acceder a determinadas propiedades de estilo que pueden verse afectadas por las hojas de estilo descargadas.

#### Relación del árbol de representación (Estilos) con el árbol del DOM
Los representadores corresponden a elementos del DOM pero la relacion no es uno a uno (head no tiene representacion, algunos elementos con visibilidad hidden aparecen en el arbol, otros elementros no tienen representacion y un representacion puede pertenecer a muchos elementos del DOM).
