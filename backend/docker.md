# Docker
Siguiendo el curso de este video: [Domina Docker de CERO a PRO](https://www.youtube.com/watch?v=Wgo3Q5sIxi4)

## ¿Qué es Docker?

Docker es una plataforma que te permite empaquetar aplicaciones y sus dependencias en contenedores. Imagina un contenedor como una caja que contiene todo lo necesario para que una aplicación funcione correctamente, sin importar en qué entorno se ejecute. Esto incluye el código de la aplicación, las bibliotecas, las herramientas y la configuración necesaria.

## ¿Cuál es la diferencia con las máquinas virtuales?

Para entender mejor la diferencia, pensemos en una analogía:

- **Máquinas virtuales**: Son como apartamentos completos. Cada apartamento tiene su propio sistema operativo, sus propias aplicaciones y recursos. Son más pesados y tardan más en arrancar.
- **Contenedores Docker**: Son como habitaciones dentro de un mismo edificio. Compartien el sistema operativo base del edificio (el host) y solo tienen lo estrictamente necesario para que la aplicación funcione. Son más ligeros y se inician mucho más rápido.

## ¿Cuándo usar Docker?

- Desarrollo de aplicaciones: Para crear entornos de desarrollo consistentes y aislados.
- Despliegue de aplicaciones: Para distribuir aplicaciones de manera rápida y eficiente.
- Microservicios: Para construir arquitecturas basadas en microservicios.
- Orquestación de contenedores: Para gestionar grandes cantidades de contenedores (Kubernetes, Docker Swarm).

## Ventajas de Docker:

- Portabilidad: Ejecuta tus aplicaciones en cualquier lugar donde haya Docker instalado.
- Escalabilidad: Fácilmente puedes escalar tus aplicaciones añadiendo más contenedores.
- Aislamiento: Cada contenedor funciona de forma independiente, evitando conflictos.
- Eficiencia: Menor consumo de recursos en comparación con las máquinas virtuales.

# Instalacion
Yo lo instalare en arch linux el cual no aparece en la [Documentacion oficial](https://docs.docker.com/engine/install/) 
1. Actualiza el sistema:
``` Bash
sudo pacman -Syu
```

2. Instalar Docker
``` Bash
sudo pacman -S docker
```

3. Inicia y habilita el servicio de docker
``` Bash
sudo systemctl start docker
sudo systemctl enable docker
```

4. Verifica que docker este funcionando:
``` Bash
docker --version
docker run hello-world
```

> En caso de que la ejecucion del hellow-world falle por falta de permisos ejecutar lo siguiente:
1. Comprobamos si docker esta activo
``` Bash
sudo systemctl status docker
sudo systemctl start docker # Iniciamos en caso contrario
```
2. Añadimos nuestro usuario al grupo de docker
``` Bash
sudo usermod -aG docker <tu-usuario>
```
3. Cierra sesion y vuelva a iniciar sesion para aplicar los cambios:
``` Bash
newgrp docker
```
4. Verificamos los permisos:
``` Bash
ls -l /var/run/docker.sock
# Output esperado:
# srw-rw---- 1 root docker 0 Sep 10 12:34 /var/run/docker.sock
```

# Tutorial
Instalar una imagen (en este caso ubuntu)
``` Bash
docker pull ubuntu
```
por defecto se instala la ultima version de la imagen en produccion suele usarse 2 o 3 versiones anteriores a la ultima para conocer los posibles bugs existentes.

El output deberia ser algo asi:
``` Bash
Using default tag: latest
latest: Pulling from library/ubuntu
Digest: # token para comprobar que descargamos la imagen correcta
Status: Image is up to date for ubuntu:latest
docker.io/library/ubuntu:latest
```

Tambien podria ser algo asi:
``` Bash
docker pull mysql
```
output:
``` Bash
Using default tag: latest
latest: Pulling from library/mysql
5e407bf3af90: Pull complete 
5f79c432ce4c: Pull complete 
e93edcbaa54f: Pull complete 
a0535a79ba39: Pull complete 
20ab03fc7bed: Pull complete 
75f2fdac1421: Pull complete 
f8d6a5d16572: Pull complete 
b8dff4a91460: Pull complete 
90c257e20398: Pull complete 
17219240cf71: Pull complete 
Digest: sha256:c69299937e5e2fc9a2cb26f5cd7a7151e48d9d5a3b3679f62bfd1275de698c0c
Status: Downloaded newer image for mysql:latest
docker.io/library/mysql:latest
```
se descargan diferentes paquetes ya que en este caso la imagen esta fragmentada en varias partes.

**Comando para ver todas las imagenes que tenemos instaladas:**
``` Bash
docker images
```
output:
``` Bash
REPOSITORY    TAG       IMAGE ID       CREATED         SIZE
ubuntu        latest    edbfe74c41f8   6 weeks ago     78MB
mysql         latest    680b8c60dce6   7 weeks ago     586MB
hello-world   latest    d2c94e258dcb   16 months ago   13.3kB
```

**otra manera de Listar las imagenes**
``` Bash
docker image ls
```

**Eliminar imagen de docker**
``` Bash
docker image rm <nombre-de-la-imagen>
```

**Ver la informacion de la imagen**
``` Bash
docker image inspect <Nombre-de-la-imagen>
``` 

## Montando un contenedor
Ahora que ya tenemos imagenes instaladas podemos montar un contenedor.

**Correr un contenedor**
``` Bash
docker run ubuntu
```
> Con este comando empezamos a correr un contenedor con la imagen de ubuntu.
Con este comando tiene dos funciones una es montar el contenedor con esa imagen pero si la imagen no existe la descarga.

## Comandos de docker mas comunes
- Lista las primeras 10 imagenes
``` Bash
docker images | head
```
- Lista las 10 ultimas imagenes
``` Bash
docker images | tail
```

- Para saber que tenemos corriendo
``` Bash
docker ps
```

> [!IMPORTAT]
> Es importante guardar la informacion de nuestra aplicacion fuera del contenedor por si este llega a romperse.

- Para correr un contenedor pero que este no nos tome la consola y podamos seguir ejecutando ahi ejecutar:
``` Bash
docker run -d <imagen>
```
Este comando nos devolvera un id.

- Detener un contenedor
``` Bash
docker stop <id-del-contenedor>
```

- Levantar el mismo contenedor anterior pero con la informacion que ya teniamos
``` Bash
docker start <id-del-contenedor>
```

- ver los contenedores que hemos ejecutado (una especie de historial) desde ahi podemos sacar los id de los contenedores anteriores para volver a ejecutarlos
``` Bash
docker ps -a
```

- Ver los logs de un contenedor
``` Bash
docker logs <id-del-contenedor>
```

- Con la banderita "-f" accedemos a los logs en directo por lo que podemos ver las actualizaciones en tiempo real
``` Bash
docker logs -f <id-del-contenedor>
```

- Ejecutar comados dentro de un contenedor
``` Bash
docker exec
```

**Ejemplo:**
``` Bash
docker -it <id-de-contenedor> sh
```
    - "-i" Abre una session interactiva en el contenedor que indicamos
    - -i"t" abre una terminal
    - sh : es el comando que se ejecuta 



# Dockerizar nuestra APP De laravel
