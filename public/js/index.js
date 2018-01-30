// function-plugin con jquery
(function($) {
  // fn$.fn => jQuery.prototype
  $.fn.cardify = function() {
    var images = $(this).find('img');
    images.each(function() {
      // encerrando la imagen en la etiqueta 2 figure tag
      // primer figure(inline) tag -> definir los limites del figcaption que rodearan toda la imagen
      // segundo figure(block) -> darle forma de bloque
      var newFigure = $(this).wrap('<figure><figure>');
      $(this).css({
        // 'width': '100%'
      });
      $(this).parent().css({
        'position': 'relative',
        'display': 'inline-block',
        'box-shadow': '2px 2px 5px #999',
      });
      var figcaption = $('<figcaption>');
      var altText = $(this).attr('alt');
      figcaption.text(altText);
      // anexando la etiqueta figcaption y su contenido a la etiqueta figure con la imagen
      $(this).parent().append(figcaption);
      // agregandole clases para que el texto aparezca encima de la imagen sin que se muestre
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
        'color': '#fff',
        'z-index': '-1',
        'justify-content': 'center'
      });
    });
    // agregando eventos para que aparezca el texto alt
    images.on('mouseover', function() {
      $(this).css({
        'opacity': '0.1',
      });
    });
    images.on('mouseout', function() {
      $(this).css({
        'opacity': '1'
      });
    });
  };
}(jQuery));
