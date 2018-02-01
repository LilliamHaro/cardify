const $ = require('jquery');
const cardify = {};


(function (jQuery) {
  // $.fn => jQuery.prototype
  $.fn.cardify = function () {
    var images = $(this).find('img');
    images.each(function () {
      images.css({
        'box-shadow': '7px 7px 10px #000',
        'margin-bottom': '25px',
        'margin-top': '25px'
      });
    });
    // agregando eventos para que aparezca el texto alt
    images.on('mouseover', function (event) {
      $(event.target).css({
        'opacity': '0.1',
      });
      var newFigure = $(event.target).wrap('<figure>');
      $(event.target).parent().css({
        'position': 'relative',
        'display': 'inline-block',
      });
      var figcaption = $('<figcaption class="fig">');
      var altText = $(event.target).attr('alt');
      figcaption.text(altText);
      // anexando la etiqueta figcaption y su contenido a la etiqueta figure con la imagen
      $(event.target).parent().append(figcaption);
      // agregandole clases para que el texto aparezca encima de la imagen
      figcaption.css({
        'position': 'absolute',
        'top': '0',
        'left': '0',
        'right': '0',
        'bottom': '0',
        'background': 'rgba(0,0,0,0.9)',
        'margin': '0',
        'display': 'flex',
        'text-align': 'center',
        'align-items': 'center',
        'font-weight': 'bold',
        'font-size': '2rem',
        'padding': '15px',
        'color': '#fff',
        'z-index': '-1',
        'justify-content': 'center',
        'box-shadow': '7px 7px 10px #000',
        'margin-bottom': '25px',
        'margin-top': '25px'
      });
    });
    images.on('mouseout', function (event) {
      $('.fig').remove();
      $(event.target).unwrap();
      $(event.target).css({
        'opacity': '1'
      });
    });
  };
}(jQuery));
