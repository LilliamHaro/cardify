# Cardify
* Nuestra primera librería usando JavaScript
***

## A. Objetivo:

Implementar un plugin de jQuery que dado un _contenedor_ debe buscar todas las
imágenes que encuentre dentro del _contenedor_ y reemplazarlas por un nuevo
elemento `<figure>` que contenga la imagen (`<img>`) además de un `<figcaption>`
con el texto del atributo `alt` de la imagen.

* Ejemplo de funcionamiento

Tenemos dos contenedores con imagenes varias, las etiquetas <img> al ser inline suelen verse desordenadas junto a otros elementos cercanos por eso queremos que se vean mas espaciados y con una pequeña descripcion tomada de su altributo alt.

```html
  <div id="container">
    <img src="assets/images/1.jpg" alt="primera imagen">
    <img src="assets/images/2.jpg" alt="segunda imagen">
    <div >
      <img src="assets/images/3.jpg" alt="tercera imagen">
    </div>
  </div>
  <div id="other-container">
    <img src="assets/images/1.jpg" alt="primera imagen">
    <img src="assets/images/2.jpg" alt="segunda imagen">  
  </div>
```

Para ello usamos el plugin cardify y seleccionamos el contenedor en el que queremos que actue desde la hoja js.

```javascript
    $('#container').cardify();
```
Así se verá el resultado:

```html
  <div id="container">
    <figure><img src="assets/images/1.jpg" alt="primera imagen"><figcaption>primera imagen</figcaption></figure>
    <figure><img src="assets/images/2.jpg" alt="segunda imagen"><figcaption>segunda imagen</figcaption></figure>
    <div>
     <figure><img src="assets/images/3.jpg" alt="tercera imagen"><figcaption>tercera imagen</figcaption></figure>
    </div>
  </div>
  <div id="other-container">
    <img src="assets/images/1.jpg" alt="primera imagen">
    <img src="assets/images/2.jpg" alt="segunda imagen">  
  </div>
```

## B.  Flujo de trabajo:

### Semana 1

1. Se realizó un [**fork**](https://gist.github.com/ivandevp/1de47ae69a5e139a6622d78c882e1f74) de este repositorio.


2. La segunda integrante realiza un fork del repositorio de la primera integrante para luego posicionarse en la rama      creada, clonar el repositorio de la companera y comenzar a trabajar.


3. Se escribe una primera version de README, este posee una descripcion general del proyecto.


4. Se crean issues y milestones como hoja de ruta (roadmap).


### Semana 2

1. Agregar tests que describan la API de tu librería y los casos de uso esperados

2. Implementar funcionalidad esencial

3. Hacer code review con tus compañeras e instructorxs (parte 1).

### Semana 3

1. Hacer code review con tus compañeras e instructores (parte 2).

2. Preparar demo/presentación.

3. Publicar el ejemplo principal (index.html) en GitHub pages.

## C. Archivos 

* README.md con descripción de la librería, instrucciones de instalación, uso y documentación del API.
* index.js: Librería debe exportar una función u objeto al entorno global (window) y hacer uso de features de ES6.
* index.html: Página web de la librería.
* .eslintrc con configuración para linter.
* .gitignore para ignorar node_modules u otras carpetas que no deban incluirse en control de versiones.
* package.json con nombre, versión, descripción, autores, licencia, dependencias, scripts (pretest, test, ...)


## C. Recursos utilizados

* HTML5
* CSS
* BOOTSTRAP v4.0.0
* JQUERY v3.2.1.
* Eslintrc v4.15.0
* Se utilizó el transpilador Babel.

## D. Integrantes

* Lilliam Haro
* Jymma Mogollon


## F. Producto

![Cardify](assets/images/.png)
![Cardify](assets/images/.png)
![Cardify](assets/images/.png)
![Cardify](assets/images/.png)


## G. Licencia

*Copyright (C) 2018 ~ Cardify*
