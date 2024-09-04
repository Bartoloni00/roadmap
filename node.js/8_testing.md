# Testing
*En los primeros dias del desarrolo de software por los años 60 y 70, las pruebas se realizaban de manera ad-hoc*, con desarrolladores ejecutando manualmente sus aplicaciones para asegurarse de que funcionaran correctamente. A medida que sus aplicaciones crecieron en complejidad y la llegada de las metodologias de desarrollo agil en los años 90, se hizo evidente la necesidad de una metodologia mas estructurada. Asi surgio el concepto "testing" o pruebas, dando origen a practicas como Test-driven development (TDD) y Behavior-driven development (BDD) especialmente en el backend, donde la logica y las operaciones criticas del sistema residen.
El testing se convirtio en una parte crucial del desarrollo de software, permitiendo a los desarrolladores detectar errores antes de que lleguen al entorno de produccion.
Con la llegada de metodologias agiles y DevOps, el testing automatizado se volvio indispensable, ayudando a mantener la calidad del codigo en un ciclo de desarrollo rapido y continuo.

## Testing en backend
El testing en backend es esencial para garantizar que los sistemas funcionen como se espera, manejando la logica del negocio, la integridad de los datos, y la interaccion con otras partes del sistema. En un entorno donde la calidad es clave, las pruebas son una herramienta poderosa para asegurar que el codigo es robusto eficiente y libre de errores.

## Ventajas del testing en backend

- **Deteccion temprana de errores**: Identificar problemas antes de que lleguen a produccion reduce el costo de las correcciones.

- **Mejora de la calidad del codigo**: Las pruebas obligan a los desarrolladores a pensar en diferentes casos, lo que resulta en un codigo mas robusto.

- **Facilita el mantenimiento**: Un codigo bien probado es mas facil de modificar y actualizar sin temos a romper funcionalidades existentes.

- **Confianza en el despliegue**: Permite a los equipos de desarrollo desplegar con confianza, sabiendo que su codigo ha sido rigurosamente probado.

A continuacion exploraremos los diferentes tipos de testing sus ventajas, y las tecnicas mas comunes utilizadas en el testing de backend, incluyendo White Box y Black Box testing.

## Tipos de testing en backend

### 1.Unit Testing: 
Estas pruebas son la primera línea de defensa contra los errores. Se enfocan en pequeñas piezas del código, como funciones o métodos individuales, para asegurarse de que funcionan como se espera de manera aislada. Se suelen utilizar mocks y stubs para simular dependencias externas.

**Caso de uso**: Imagina que estás desarrollando una API que maneja pagos. Una función crítica podría ser calculateTotalPrice(items), que suma los precios de una lista de productos. Un unit test verificará que esta función retorna el total correcto dado un conjunto de entradas específicas, sin importar el comportamiento del resto del sistema.

**Ejemplo**: Verificar que calculateTotalPrice([{price: 100}, {price: 200}]) devuelve 300.

### 2.Integration Testing: 
Estas pruebas verifican que diferentes módulos o servicios interactúen correctamente entre sí. Pueden ser más complejas que las pruebas unitarias porque involucran múltiples componentes del sistema, y a menudo requieren configuraciones de entorno más detalladas.

**Caso de Uso**: Supongamos que tu sistema tiene un servicio de autenticación que interactúa con una base de datos para validar credenciales de usuario. Un integration test verificaría que cuando un usuario intenta iniciar sesión, el sistema interactúa correctamente con la base de datos y devuelve el resultado esperado.

**Ejemplo**: Probar que la función loginUser(username, password) retorna un token válido después de consultar la base de datos con credenciales correctas.

### 3.Functional Testing: 
Estas pruebas se enfocan en verificar que el sistema cumpla con los requisitos funcionales especificados. Aquí, el tester simula el comportamiento del usuario final, asegurándose de que todas las funciones del sistema respondan correctamente a las entradas.

**Caso de Uso**: Si estás desarrollando un sistema de reservas para un hotel, un functional test podría verificar que un usuario puede completar una reserva desde la selección de la habitación hasta el pago, asegurándose de que todos los pasos intermedios funcionen como se espera.

**Ejemplo**: Simular el proceso de reserva y confirmar que el sistema confirma la reserva y genera un número de reserva.

### 4.Performance Testing: 
Incluye pruebas de carga, estrés y escalabilidad para evaluar cómo se comporta el sistema bajo diferentes condiciones de uso. Esto es crucial para identificar cuellos de botella y garantizar que el sistema pueda manejar la cantidad esperada de tráfico.

**Caso de Uso**: Imagina que estás gestionando un sistema de ecommerce que espera un alto tráfico durante el Black Friday. Un performance test podría simular miles de usuarios simultáneos realizando compras para ver cómo el sistema maneja la carga.

**Ejemplo**: Realizar un stress test para verificar que el sistema pueda manejar 10,000 solicitudes de compra por minuto sin degradar significativamente el rendimiento.

### 5.Security Testing: 
Este tipo de prueba busca vulnerabilidades en el sistema, como inyecciones SQL, vulnerabilidades XSS, y problemas de autenticación. Es vital para garantizar que los datos sensibles estén protegidos y que el sistema sea resistente a ataques.

**Caso de Uso**: Si estás desarrollando una API que maneja información sensible como datos de tarjetas de crédito, un security test podría intentar inyecciones SQL para asegurarse de que las consultas a la base de datos sean seguras.

**Ejemplo**: Probar que una inyección SQL en el campo de entrada de nombre de usuario no permite acceder a datos no autorizados.

### 6.Regression Testing: 
Estas pruebas aseguran que los cambios recientes no hayan introducido nuevos errores en el sistema. Se suelen automatizar y ejecutar después de cada cambio en el código para detectar rápidamente cualquier problema.

**Caso de Uso**: Has implementado una nueva funcionalidad en tu sistema de gestión de inventarios. Un regression test asegurará que esta nueva funcionalidad no ha roto ninguna de las funcionalidades existentes del sistema.

**Ejemplo**: Ejecutar un conjunto de pruebas automatizadas que validen todas las funcionalidades críticas del sistema después de cada cambio de código.

### 7.Acceptance Testing: 
Estas pruebas verifican que el sistema cumpla con los criterios de aceptacion definidos por el cliente o el negocio. Son la ultima fase de pruebas antes de que el software se despligue en produccion

**Caso de Uso**: Si estás desarrollando un sistema para un cliente que requiere que todas las facturas generadas se envíen por correo electrónico automáticamente, un acceptance test verificaría que esta funcionalidad cumple con los requisitos del cliente.

**Ejemplo**: Probar que, después de generar una factura, se envía un correo electrónico con la factura adjunta al destinatario correcto.

### 8.End-to-end testing (E2E)**: 
Estas pruebas simulan un flujo completo del usuario desde el forntend hasta el backend, verificando que todos los componentes del sistema funcionen juntos de manera cohesiva.

**Caso de Uso**: Si estás construyendo una aplicación web que permite a los usuarios buscar, seleccionar y comprar productos, un E2E test podría simular todo el proceso, desde la búsqueda de un producto hasta la confirmación de la compra.

**Ejemplo**: Probar que un usuario puede buscar un producto, agregarlo al carrito, realizar el pago, y recibir una confirmación de la compra.

### 9.White box testing
Es una tecnica que implica probar la estructura interna del codigo. EL tester conoce la logica y el flujo del codigo y utiliza este conocimiento para diseñar casos de prueba. Esideal para pruebas unitarias y de integracion.

**Caso de Uso**: Durante el desarrollo de un algoritmo de encriptación, un white box test podría validar que todos los caminos lógicos en la función de encriptado se ejecutan correctamente.

**Ejemplo**: Probar que todas las ramas de un algoritmo de cifrado se ejecutan correctamente bajo diferentes condiciones de entrada.

### 10.Black box testing 
En contraste a white box testing se enfoca en la funcionalidad del software sin tener en cuenta la estructura interna. El tester verifica las entradas y salidas, asegurandose de que el sistema cumple con las especificaciones. Es ideal para pruebas funcionales y de integracion.

**Caso de Uso**: Si has desarrollado una API RESTful que procesa órdenes de compra, un black box test podría validar que, dadas ciertas entradas, las respuestas de la API son correctas sin conocer los detalles de la implementación interna.

**Ejemplo**: Verificar que la API devuelve un código de estado 201 (Created) y un cuerpo JSON con los detalles de la orden cuando se envía una solicitud de orden de compra válida.

### 11.Grey Box testing 
En este enfoque hibrido se combinan elementos de White box y black box testing. En gray box testing, el tester tiene un conocimiento parcial del sistema interno lo que le permite diseñar casos de prueba mas completos y efectivos. Es particularmente util para pruebas de seguridad e integracion.

**Caso de Uso**: Si estás probando un sistema de autenticación que se integra con varios servicios de terceros, un grey box test podría validar las interacciones y las respuestas sin conocer todos los detalles internos de los servicios de terceros.

**Ejemplo**: Probar la autenticación asegurando que, aunque conozcas parte del proceso interno, todas las integraciones funcionan correctamente.

### 12.Component interface**: 
Se centra en probar las interfaces entre componentes. En el backend, esto podria asegurar que los diferentes modulos o servicios se comuniquen correctamente a traves de APIs, mensajes, o llamadas de funcion. El objetivo es garantizar que, aunque cada componente funcione por separado, tambien lo hagan correctamente cuado interacturan entre si.

**Caso de Uso**: Si tu aplicación tiene un microservicio que se comunica con otros servicios a través de APIs, un component interface test verificaría que la comunicación entre estos servicios funciona correctamente.

**Ejemplo**: Probar que el microservicio de facturación recibe y procesa correctamente los datos de la API de pedidos.

### 13.Installation testing: 
Verifica que el sistema se instale correctamente en todos los entornos previstos. Para el backend, esto puede incluir la verificacion de que todas las dependencias esten configuradas correctamente, que las bases de datos se inicialicen y que el sistema este listo para funcionar despues de la instalacion.

**Caso de Uso**: Cuando desarrollas un sistema que debe instalarse en servidores con configuraciones específicas, un installation test aseguraría que la instalación se complete sin errores y que todas las dependencias estén correctamente configuradas.

**Ejemplo**: Probar que la instalación de un sistema de gestión de contenido en un servidor Linux configura correctamente la base de datos y el servidor web.

### 14.Compatibility testing 
Se asegura que el sistema funcione correctamente en diferentes entornos, configuraciones de hardware, sistemas operativos, y versiones de software. En el backend, esto podria implicar la verificacion de que el sistema funcione con diferentes versiones de servidores, bases de datos, o APIs externas.

**Caso de Uso**: Si tu backend debe funcionar con diferentes versiones de una base de datos, un compatibility test aseguraría que la aplicación funcione correctamente en todas las versiones soportadas.

**Ejemplo**: Probar que tu aplicación funciona tanto con MySQL 5.7 como con MySQL 8.0 sin problemas.

### 15.Smoke and Sanity testing
- **Smoke testing**: Prueba basica que se realiza para asegurar que las funciones mas esenciales del sistema funcionen correctamente. Si falla, el sistema no se considera apto para pruebas mas detalladas.
- **Sanity Testing**: Un subconjunto de las pruebas de regresion que se realiza para verificar que una pequeña parte del sistema funcione como se esperaba despues de un cambio o correccion de errores.

**Caso de Uso**: Antes de realizar pruebas más exhaustivas en un sistema nuevo, puedes realizar un smoke test para asegurarte de que las funcionalidades principales están operativas.

**Ejemplo**: Probar que la API principal responde correctamente a solicitudes básicas antes de realizar pruebas más detalladas.

### 16.Alpha testing: 
Es realizado por los desarrolladores internos antes de liberar el software al publico. Es una forma de pruebas antes de pasar a pruebas mas extensas con usuarios reales.

**Caso de Uso**: Antes de lanzar un nuevo sistema CRM a un grupo selecto de usuarios, podrías realizar un alpha test para detectar problemas internos y corregirlos.

**Ejemplo**: Los desarrolladores internos usan el CRM en un entorno controlado para identificar y corregir errores antes del lanzamiento beta.

### 17.Beta testing: 
Es la fase en la que el software se libera a un grupo limitado de usuarios que lo utilizan en condiciones reales. Este tipo de pruebas ayuda a identificar errores que podrian no haber sido detectados durante las pruebas internas, asi como a obtener retroalimentacion sobre la usabilidad y rendimiento del sistema.

**Caso de Uso**: Después del alpha testing, podrías liberar el sistema CRM a un grupo limitado de usuarios reales para recibir retroalimentación en un entorno de uso real.

**Ejemplo**: Un grupo selecto de vendedores usa el CRM durante un mes, y tú recolectas sus comentarios y reportes de errores para mejorar el sistema.

### 18.Functional vs Non-function testing:
- **Functional testing**: Se enfoca en probar las funcionalidades del software segun las especificaciones. Incluye pruebas de interfaz API, bases de datos, etc., Para verificar que el sistema haga lo que se supone que dene hacer.
- **Non-functional testing**: Evalua aspectos del software que no estan relacionados con funciones especificas,como el rendimiento, la seguridad, la escalabilidad y la usabilidad.

**Caso de Uso**: Mientras que un functional test podría validar que tu sistema de reservas acepta y procesa reservas correctamente, un non-functional test podría asegurarse de que el sistema maneje 1,000 reservas simultáneamente sin fallos.

**Ejemplo**: Probar que las reservas se procesan en menos de 2 segundos bajo condiciones de carga.

### 19.Continuous testing: 
Es la practica de ejecutar pruebas automaticamente en cada etapa del pipeline de desarrollo, desde la codificacion hasta la entrega. Es un componente esencial en las practicas de CI/CD (Continuous integration/Continuous Deployment), asegurando que los errores se detecten y corrijan rapidamente.

**Caso de Uso**: Si estás usando un pipeline de CI/CD, implementar continuous testing asegurará que cada commit de código sea probado automáticamente para detectar errores lo antes posible.

**Ejemplo**: Cada vez que se realiza un commit en el repositorio de código, se ejecutan automáticamente pruebas unitarias, de integración y de regresión.

### 20.Destructive testing: 
busca probar los limites del sistema intentado romperlo deliberadamente. EL objetivo es identificar como y cuando el sistema falla, y que tan bien maneja los errores o las condiciones extremas.

**Caso de Uso**: Imagina que desarrollas un sistema que maneja pagos electrónicos. Un destructive test podría intentar enviar datos corruptos o mal formados a la API de pago para ver cómo el sistema maneja la situación.

**Ejemplo**: Enviar datos de transacciones con campos faltantes o incorrectos y verificar que el sistema responde adecuadamente, sin corromper la base de datos.

### 21.Software performance testing: 
Evalua como el sistema maneja la carga y el estres. Incluye pruebas de carga, estres, y escalabilidad para asegurar que el backend pueda manejar el trafico y las demandas esperada sin degradar el rendimiento.

**Caso de Uso**: Para un sistema que maneja grandes cantidades de datos en tiempo real, un performance test aseguraría que el sistema pueda manejar la carga y responder en tiempos aceptables.

**Ejemplo**: Probar que un sistema de análisis de datos puede procesar 1 millón de registros en menos de un minuto.

### 22.Internationalization and localization:
- **Internationalization (I18n)** es un proceso de diseñar software para que pueda adaptarse a diferentes idiomas y regiones sin necesidad de cambios en el codigo.
- **Localization (L10n)** es la adaptacion del software para una regios especifica, que incluye la traduccion de textos y la adaptacion de otros elementos como formatos de fecha, moneda, etc.

**Caso de Uso**: Si desarrollas una aplicación que se usará en diferentes países, un i18n test aseguraría que el sistema se puede adaptar fácilmente a diferentes idiomas, mientras que un l10n test aseguraría que se muestre la moneda y formato de fecha correctos para cada región.

**Ejemplo**: Probar que la aplicación puede cambiar entre inglés, español y francés, y que las fechas se muestran correctamente en los formatos locales.

### 23.Development testing: 
Abarca las pruebas que se realizan durante la fase de desarrollo. Puede incluir pruebas unitarias, de integracion, y otras realizadas por los desarrolladores para asegurar que el codigo funcione correctamente antes de ser enviado a la etapa de pruebas formal.

**Caso de Uso**: Mientras desarrollas un nuevo módulo de facturación, puedes realizar pruebas unitarias e integración para asegurarte de que el código funciona correctamente antes de enviarlo para pruebas más formales.

**Ejemplo**: Ejecutar pruebas unitarias que validen cada método del módulo de facturación y asegurarte de que las integraciones con otros módulos funcionen como se espera.

### 24.Concurrent testing: 
Evalua como el sistema maneja multiples procesos o threads ejecutandose simultaneamente. Es crucial para sistemas backend que deben manejar muchas conexiones o solicitudes concurrentes.

**Caso de Uso**: Para un servidor de chat en tiempo real, un concurrent test aseguraría que múltiples usuarios pueden enviar y recibir mensajes simultáneamente sin perder datos.

**Ejemplo**: Probar que 1,000 usuarios pueden enviar mensajes al mismo tiempo sin que se pierdan o dupliquen.

### 25.Conformance testing or Type testing: 
Conformance testing asegura que el software cumpla con las especificaciones y estandares requeridos. En el backend, esto podria significar garantizar que las APIs cumplan con los estandares RESTful o que los datos sigan un esquema especifico.

**Caso de Uso**: Si estás desarrollando una API RESTful, un conformance test podría asegurarse de que la API sigue las especificaciones REST y retorna los códigos de estado HTTP correctos.

**Ejemplo**: Verificar que todas las respuestas de la API sigan el formato JSON especificado y que los códigos de estado sean los correctos (200, 404, 500, etc.).

### 26.Output comparison testing: 
Verifica que la salida generada por el sistema bajo prueba coincida con la salida esperada. Esto es particularmente util en pruebas de regresion y para verificar que las modificaciones no hayan cambiado el comportamiento del sistema de manera no deseada.

**Caso de Uso**: Si estás actualizando un sistema de generación de informes, un output comparison test podría asegurarse de que los informes generados después de la actualización coincidan con los generados antes de la actualización.

**Ejemplo**: Comparar los resultados de un informe generado antes y después de una actualización para asegurarse de que no hay diferencias inesperadas.

### 27.Property testing: 
Verifica que ciertas propiedades o invariantes del  sistema se mantengan bajo una variedad de entradas. En backend, esto podria incluir asegurar que las operaciones CRUD en una base de datos siempre mantengas la integridad de los datos.

**Caso de Uso**: Para un sistema de base de datos que maneja operaciones CRUD, un property test podría verificar que todas las operaciones mantienen la integridad de los datos.

**Ejemplo**: Probar que las operaciones de inserción, actualización y eliminación mantienen las claves foráneas y no violan restricciones de integridad.

### 28.Metamorphic testing: 
Se utiliza cuando la salida exacta no es facil de determinar. En lugar de eso, se prueban relaciones entre las salidas bajo diferentes entradas, para asegurarse de que el sistema se comporte de manera consistente bajo cambios especificos.

**Caso de Uso**: Si estás desarrollando un sistema de recomendación que ofrece productos basados en las preferencias del usuario, un metamorphic test podría verificar que pequeñas variaciones en las entradas no producen cambios drásticos en las recomendaciones.

**Ejemplo**: Probar que cambiar ligeramente el historial de navegación de un usuario no produce recomendaciones completamente diferentes.

### 29.VCR testing: 
Se refiere a la tecnica de grabar las respuestas de las llamadas a APIs externas para poder reproducirlas en las pruebas posteriores, lo que permite pruebas mas consistentes y aisladas del entorno externo.

**Caso de Uso**: Si tu sistema interactúa con APIs externas para obtener datos, un VCR test podría grabar las respuestas de la API durante las pruebas iniciales y reproducirlas en pruebas posteriores para asegurar consistencia.

**Ejemplo**: Probar que el sistema maneja correctamente las respuestas de la API de clima grabadas previamente, simulando condiciones de red estables para asegurar que el sistema funcione consistentemente.

## Conceptos exclusivos del Front-end que no inclui en este resumen:
1. Visual testing
2. Usability testing
3. Accessibility testing
4. A/B testing

## Recomendacion
> Framework de testing recomendado para aprender: Jest en combinacion con la libreria de testing para node.js: supertest