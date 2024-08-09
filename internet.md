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