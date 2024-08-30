# Bash: convirtiendome en un experto de la terminal
Voy a dejar el historial de como resolvi cada nivel de overthewire.org
## nivel 0: leer un archivo
``` bash
ssh bandit0@bandit.labs.overthewire.org -p 2220
cat readme
```
Resolucion: ZjLjTmM6FvvyRnrb2rfNWOZOTa6ip5If

## nivel 1: leer un archivo llamado "-"
``` bash
ssh bandit1@bandit.labs.overthewire.org -p 2220
ls -l
cat ./-
```
Resolucion: 263JGJPfgU6LtdEvgfWU1XP5yac29mFx

## nivel 2: leer un archivo sin nombre
``` bash
ssh bandit2@bandit.labs.overthewire.org -p 2220
ls -l
cat "spaces in this filename"
```
Resolucion: MNk8KNH3Usiio41PRUEoDFPqfxLPlSmx

## nivel 3: entrar a una carpeta y ver leer archivo oculto
``` bash
ssh bandit3@bandit.labs.overthewire.org -p 2220
cd inhere
ls -la
cat ...Hiding-From-You 
```
Resolucion: 2WmrDFRmJIq3IPxneAaMGhap0pFhF3NJ

## nivel 4: entrar a una carpeta y leer el unico archivo legible por los humanos.
Con el comando file podemos ver el tipo de archivo que es
``` bash
ssh bandit4@bandit.labs.overthewire.org -p 2220
file inhere/* 
cd inhere
cat ./-file07
```
Resolucion: 4oQYVPkxZOOEOO5pTW81FB8j8lxXGUQw

## nivel 5: 
Encontrar un archivo que esta en una carpeta con las siguientes propiedades:
- human-readable
- 1033 bytes in size
- not executable
``` bash
ssh bandit5@bandit.labs.overthewire.org -p 2220
cd inheare
find . -type f -readable ! -executable -size 1033c
./maybehere07/.file2

cat ./maybehere07/.file2
```
Resolucion: HWasnPhtq9AVKe0dmk45nxy20cvUa6EG

> utilizamos las flags para indicarle a find que sea un archivo (-type f), que se pueda leer (-readable), que no se pueda ejecutar (! -executable) y que su tamaño sea de 1033 bytes (-size 1033c)

## nivel 5: 
``` bash
ssh bandit6@bandit.labs.overthewire.org -p 2220
find / -user bandit7 -group bandit6 -size 33c 2>/dev/null | xargs cat
```
Resolucion: morbNTDkSW6jIlUc0ymOdMaLnOlFVAaj

buscamos un archivo que le pertenece al usuario bandit7 y al grupo de bandit6, el archivo tiene un tamaño de 33 bytes, para solo ver los resultados exitosos (porque nos mostraba muchos errores por permisos denegados en la consola) agregamos esta parte del comando que envia todos los errores a un archivo dentro del sistem: (2>/dev/null). Luego agregamos el '|' para ejecutar otro comando en la misma linea. el otro comando es xargs cat el cual muestra el contenido interno de ese archivo

## nivel 6: 
La contraseña de este nivel esta en un archivo llamado data.txt cerca de la palabra millionth
``` bash
ssh bandit7@bandit.labs.overthewire.org -p 2220

# vemos la cantidad de lineas que tiene el archivo:
cat data.txt | wc -l

# Vemos la cantidad de caracteres que tiene el archivo
cat data.txt | wc -c

# Con grep buscamos lo que esta cerca de la palabra millionth
cat data.txt | grep "millionth"
# El output fue este: millionth       dfwvzFQi4mU0wfNbFOe9RoWskMLg7eEc

# otra opcion era ejecutar este comando (grep es mas eficiente en cuanto a tiempo de ejecucion pero awk es mas potente):
awk /millionth/ data.txt

# con el comando
# greb "millionth" data.txt -n
# podriamos ver la linea en el cual estaba el dato que buscabamos
```
Resolucion: dfwvzFQi4mU0wfNbFOe9RoWskMLg7eEc

## Nivel 7
Tenemos que encontrar una linea de texto que solo se repite una vez dentro de un archivo llamado data.txt (es un archivo de 1001 lineas y solo existe una linea que no se repite)
``` bash
ssh bandit8@bandit.labs.overthewire.org -p 2220

# Listamos todas las lineas en orden alfabetico:
# cat data.txt | sort 

# Es necesario ordenarlo porque sino uniq no tendra forma de comparar si esa linea ya existia o no:
cat data.txt | sort | uniq -u

```
Resolucion: 4CKMh1JI91bUIZZPXDqGanal4xvAg0JM

## Nivel 8