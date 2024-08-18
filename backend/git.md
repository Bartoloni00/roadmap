# ¿Que significa control de versiones?
El control de versiones es la practica de hacer un seguimiento y manejar todos los cambios en el codigo del software. Los sistemas de control de versiones son herramientas que ayudan al equipo de software a manejar ls cambios del codigo a traves del tiempo. Como los entornos de desarrollo son acelerados, los sistemas de control de versiones ayudan a los equipos de trabajo a ser mas rapidos e inteligentes. Especialmente utiles para equipos DevOps.
Los software de control de versiones mantienen trakeada cada modificacion en el codigo en especial tipos de bases de datos. si ocurre un error, los desarrolladores pueden volver atras en el tiempo y comparar con las versiones anteriores mas recientes del codigo esto puede ayudar a arreglar los errores mientras se minimisa la ruptora de los equipos.
En casi todos los proyectos de software el codigo es como un tipo de joya, un activo precioso y valioso que debe ser protegido. el codigo es un repositorio invaluable de conocimiento y entendimiento sobre el problema que esos desarrolladores han recolectado y refinado con cuidado y esfuerzo. El control de versiones protege ese codigo de dos cosas: catastrofe y la casual degradacion por errres humanos y desentendimiento de las consecuencias.
Los desarrolladores trabajan en equipo continuamente escribiendo nuevo codigo y cambiando el existente, el codigo de un proyecto, aplicacion o componente de software esta tipicamente organizado en una estructura de carpetas o arbol de archivos. Un desarrollador en el equipo debe trabajar en una nueva funcionalidad mientras otro desarrollador arregla un error cambiando el codigo. cada desarrollador debe hacer cambios en multiples partes de ese arbol de archivos.
El control de versiones ayuda a resolver ese tipo de problemas, traquea cada cambio que hace cada uno de los desarrolladores y ayuda a prevenir conflictos de trabajo. los cambios pueden sern incompatibles entre las versiones modificadas por cada desarrollador cuando estos escriben codigo al mismo tiempo. este problema tiene que resolverse sin bloquear el trabajo del resto del equipo. en cada desarrollo de software cualquier cambiopuede introducir nuevos errores. por lo que cada cambio tiene que ser verificado en su compatibilidad y testeado para que no sume errores al proyecto.
## Beneficios de los sistemas de control de versiones.
vcs (Version control systems) tambien conocido como SCM(Source Code Management) tools o RCS (Revision Control System).es una de las mas populares heramientas de VSC. GIT como muchos sistemas de versiones actuales es gratis y de codigo abierto.
1. Tener un historial largo y completo de cada archivo. esto signifca mantener cada cambio que hicimos a traves de los años. cambios incluye editar, eliminar archivos u otros contenidos. Tambien ver como se renombran o mueven archivos. Este historial tambien continee el autor de cada cambio, la fecha y las notas o mensajes de que se hizo. teniendo un historial tan completo es facil volver atras y analizar donde estan los errores y que necesitamos para resolverlos. tambien nos da la oportunidad de volver a versiones viejas del software.
2. Branching and merging: Un gran equipo de trabajo puede trabajar individualmente en el mismo proyecto y trabajar de forma independientemente de los cambios de cada miembro.
3. Trazabilidad. Poder rastrear cada cambio hecho en el software y vincularlo con herramientas de gestión de proyectos y seguimiento de bugs como Jira, además de anotar cada cambio con un mensaje que describa su propósito, no solo ayuda en el análisis de la causa raíz y otras investigaciones. Tener ese historial anotado al alcance cuando estás leyendo el código y tratando de entender qué hace y por qué está diseñado así, permite a los desarrolladores hacer cambios correctos y coherentes con el diseño a largo plazo del sistema. Esto es clave para trabajar eficazmente con código heredado y estimar el trabajo futuro con precisión.

Si bien es posible desarrollar software sin control de versiones, hacerlo expone el proyecto a un riesgo enorme que ningún equipo profesional debería aceptar. Así que la pregunta no es si usar control de versiones, sino cuál sistema de control de versiones usar.

# Git
## ¿Que es Git?
Git es un sistema de control de versiones gratuito y de codigo abierto diseñado para proyectos grandes o pequeños con velocidad y eficiencia.
[Usare el siguiente juego/tutorial y pondre todos los apuntes que vea necesatios:](https://learngitbranching.js.org/?locale=es_ES)

- Un commit es un repositorio git registra un snapshot de todos los archivos en tu directorio. Es como un copy&paste.
Para mantener todo lo mas liviano posible no se copia todo el directorio. Cuando es posible comprime el commit con un conjunto de cambios entra una version de tu repositorio y la siguiente.
Git mantiene un historial de que commits se hicieron y cuando facilitando el trabajo en equipo.
- Las ramas (branches) son referencias a un commit especifico y suele decirse el mantra: "crea ramas al principio y hazlo tambien de manera frecuente"
Como no hay consumo extra de almacenamiento ni memoria al crear varias ramas, es mas facil dividir tu trabajo que trabajar solmanete con un par de ramas grandes.

Crear una nueva rama:
``` Bash
git branch <nuevarama>
```

Moverte hacia otra rama:
``` Bash
git checkout <rama>
```

Una vez que ya resolvimos los cambios podriamos querer insertar todas estas modificaciones en la rama principal. Esto se denomina hacer un **merge** esto realiza un commit sobre las dos ramas afectadas y todos sus ancestros.

Este comando para hacer los merge tenemos que hacerlo desde la rama a la que queremos traer (generalmente sera la principal) los cambios realizados en el otro lugar.
Ejemplo estamos en la rama main y queremos traer los cambios de la rama bugFix
``` Bash
git merge <rama>
```

**Git rebase**: es otro modo para combinar el trabajo de distintas ramas. selecciona un conjunto de commits, los "copia" y los aplica en algun otro lado. suele servir para mantener un historial de commits mas limpio y claro.
``` Bash
git rebase <rama>
```

**HEAD**: es un puntero que siempre apunta al último commit (confirmación) realizado en la rama actual. Imagina que tu repositorio es una línea del tiempo, y cada commit es una instantánea de tu proyecto en un momento dado. HEAD es como una flecha que señala siempre al último "fotograma" de esa línea del tiempo.
con git.
Ir a otro commit para desatachear el HEAD:
``` Bash
git checkout <nombrecommit>
```

**Logs**: Es la forma mas comun de lograr visualizar los hashes.
Especificar el commit por su hash no es nada facil debido a su longitud pero aun asi los commits relativos son poderosos y podemos encontras dos formas simples para movernos:
- Moverse un commit hacia atras "^".
    decir main^ es equivalente a "el primer padre de main".
    main^^ es el abuelo (segunda generación de ancestros) de main
``` Bash
git checkout <rama>^
```
- Moverse una cantidad de commits hacia adeltante "~<num>"
Puedes reasignar directamente una rama a un commit usando la opción -f. (-f es para forzar).
``` Bash
git branch -f main HEAD~3
```