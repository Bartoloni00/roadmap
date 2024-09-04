# Logging de errores en node.js
El logging es una parte importarte para soportar el ciclo de vida de nustra app.
## ¿Quien usa los logs?
Los ingenieros de operaciones y los desarrolladores usan logs para el debugging. Product managers y UX designers usan los logs para planificar y diseñar, los de marketing los utilizan para verificar el rendimiento y crear nuevas campañas de anuncios.

## ¿Que deberia loguear?
Si bien no existe un estandar y tenemos muchas categorias que podrian ser consideradas estas son los mas comunes:
- error
- warn
- info
- verbose
- debug
Cada una de estas categorias puede ser agregada por un proposito especifico.  Miremos cada categoria.

### Exceptions
Los log del nivel error y warn seran mostrados por stderr cuando se llamen desde la consola.
No todas las excepciones son causadas por error en nuestro codigo, por ejemplo los errores de coneccion. Nuestro codigo tiene que poder manejar este tipo de excepcion porque lo estamos esperando. Sin embargo algunas excepciones no son predecibles ya que vienen de informacion corrupta.

