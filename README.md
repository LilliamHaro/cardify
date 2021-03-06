# Cardify

Cardify es un plugin de jQuery que dado un _contenedor_ busca todas las
imágenes que encuentre dentro del _contenedor_ y las reemplaza por un nuevo
elemento `<figure>` que contenga la imagen (`<img>`) y además un `<figcaption>`
con el texto del atributo `alt` de la imagen.


## Ejemplo de funcionamiento

Tenemos dos contenedores con imagenes como se muestra en el siguiente codigo html

```html
  <div class='overflow'>
    <div id='container' class='col-md-offset-2 col-md-4'>
      <img src='assets/images/infancia.png' alt='Ada Lovelace de niña'>
    </div>
  </div>
  <div class='overflow'>
    <div id='container2' class='col-md-offset-2 col-md-4'>
      <img src='assets/images/maqanalitica.png' alt='La máquina analítica de Babbage'>
    </div>
  </div>

```

Sí queremos darle un efecto hover distinto y de forma rápida a las imagenes del contenedor con id _container_, cardify será de mucha ayuda!
Simplemente seleccionamos el contenedor en el que queremos que actue desde la hoja javascript de la siguiente manera:

```javascript
    $('.overflow').cardify();
```
Así se verá el cambio al momento del hover :

![Cardify](public/assets/images/adagirl.png)


## Instalación

  * Cardify requiere el uso de jquery para su correcto funcionamiento
  * Se debe llamar a la hoja index.js (previamente descargada) desde la hoja html mediante una etiqueta script

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="index.js"></script>
```


##  Recursos utilizados

* HTML5
* CSS
* BOOTSTRAP v4.0.0
* JQUERY v3.2.1.
* Eslintrc v4.15.0
* Mocha
* Chai


## Autores

* Lilliam Haro
* Jymma Mogollon

## Archivos utilizados

* README.md con descripción de la librería, instrucciones de instalación, uso y documentación del API.
* index.js: Librería debe exportar una función u objeto al entorno global (window) y hacer uso de features de ES6.
* index.html: Página web de la librería.
* .eslintrc con configuración para linter.
* .gitignore para ignorar node_modules u otras carpetas que no deban incluirse en control de versiones.
* package.json con nombre, versión, descripción, autores, licencia, dependencias, scripts (pretest, test, ...)

## Realizando nuestras primeras pruebas

![Cardify](public/assets/images/test2.png)

## Licencia

*Copyright (C) 2018 ~ Cardify*
