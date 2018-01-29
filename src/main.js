// funcion normal con js es6
// let cardify = (containerID) => {
//   let container = document.getElementById(containerID);
//   let images = container.querySelectorAll('img');
//   images.forEach((img) => {
//     let figure = document.createElement('figure');
//     let figCaption = document.createElement('figcaption');
//     let altText = img.getAttribute('alt');
//     var imgCopy = img;
//     figCaption.innerText = altText;
//     img.replaceWith(figure);
//     figure.appendChild(imgCopy);
//     figure.append(figCaption);
//   });
// };


// function-plugin con jquery
(function($) {
  // fn$.fn => jQuery.prototype
  $.fn.cardify = function() {
    let images = $(this).find('img');
    images.each(function() {
      // encerrando la imagen en la etiqueta figure
      $(this).wrap('<figure>');
      // creando la etiqueta figcaption con el contenido del attr alt de la imagen
      let figcaption = $('<figcaption>');
      let altText = $(this).attr('alt');
      figcaption.text(altText);
      // anexando la etiqueta figcaption y su contenido a la etiqueta figure con la imagen
      $(this).parent().append(figcaption);
      // return this;
    });
  };
}(jQuery));
