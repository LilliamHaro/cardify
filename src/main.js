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
    $('img').css({ 'width': '80p%',
    'heigth': '40%' });
    images.each(function() {
      // encerrando la imagen en la etiqueta figure
      $(this).wrap('<figure></figure>').css({'margin-top': '15%',
      'margin-left': '10%',
      'box-shadow': '10px 10px white, -10px -10px rgb(132, 175, 155), 0px 0px 40px 10px pink', 
      'border-color': '1px solid blue' });
      // creando la etiqueta figcaption con el contenido del attr alt de la imagen
      let figcaption = $('<figcaption>');
      let altText = $(this).attr('alt');
      figcaption.text(altText).css({ 'color': 'darkblue',
      'font-size': '2rem',
      'margin-left': '10%',
      'margin-top': '5%'});
      // anexando la etiqueta figcaption y su contenido a la etiqueta figure con la imagen
      $(this).parent().append($('<figcaption></figcaption>'));
      // return this;
    });
  };
}(jQuery));
