# Bash: convirtiendome en un experto de la terminal
Voy a dejar el historial de como resolvi cada nivel de overthewire.org
nivel 0: leer un archivo
``` bash
ssh bandit0@bandit.labs.overthewire.org -p 2220
cat readme
```
Resolucion: ZjLjTmM6FvvyRnrb2rfNWOZOTa6ip5If

nivel 1: leer un archivo llamado "-"
``` bash
ssh bandit1@bandit.labs.overthewire.org -p 2220
ls -l
cat ./-
```
Resolucion: 263JGJPfgU6LtdEvgfWU1XP5yac29mFx

nivel 2: leer un archivo sin nombre
``` bash
ssh bandit2@bandit.labs.overthewire.org -p 2220
ls -l
cat "spaces in this filename"
```
Resolucion: MNk8KNH3Usiio41PRUEoDFPqfxLPlSmx

nivel 3: entrar a una carpeta y ver leer archivo oculto
``` bash
ssh bandit3@bandit.labs.overthewire.org -p 2220
cd inhere
ls -la
cat ...Hiding-From-You 
```
Resolucion: 2WmrDFRmJIq3IPxneAaMGhap0pFhF3NJ

nivel 4: entrar a una carpeta y leer el unico archivo legible por los humanos.
Con el comando file podemos ver el tipo de archivo que es
``` bash
ssh bandit4@bandit.labs.overthewire.org -p 2220
file inhere/* 
cd inhere
cat ./-file07
```
Resolucion: 4oQYVPkxZOOEOO5pTW81FB8j8lxXGUQw
