# PRUEBA TÉCNICA - FRONT END MELI
# Por: Brayan Camargo
 
## Requerimientos
 
+ Node js 14+
+ yarn
 
## Lanzar frontend (Ract + TS + SSR):
 
```
cd ./meli-challenge-front/
yarn install
yarn run launch
```
## Lanzar backend (Node + Express):
 
```
cd ./meli-challenge-front/
yarn install
yarn dev
```
 
## Abrir aplicación
 
En un navegador ir a la URL http://localhost:3000
 
## Descripción de la prueba desarrollada
 
La prueba técnica se realizó usando las siguientes tecnologías:
 
+ Frontend
    + React.js
    + Typescript
    + Sass
    + Express (Para realizar el server side rendering)
+ Backend
    + Node.js
    + Express
 
Se construyó bajo la premisa de los principios de SOLID, usando una interpretación de la arquitectura hexagonal y DDD, así mismo se implementaron algunos patrones de diseño dentro de su desarrollo.
 
La compilación del la aplicación de frontend se realiza mediante una implementación de webpack y posteriormente se sirve en un pequeño servido express esto con el fin de mejorar los tiempo de carga y el performance en general de la aplicación, además esto nos ayuda a implementar SEO dentro de las paginas, para lograr una mejor integración en la web y posicionamiento en buscadores.
 
Para la realización de los test se utilizó la librería Testing Library y el framework Jest.
 
 
## 6. Posibles mejoras
 
+ Completar en un valor cercano al 100% el coverage de los test unitarios en el frontend
 
+ Implementar test unitarios en el proyecto de backend
 
+ Diseñar pruebas de integración para la aplicación
