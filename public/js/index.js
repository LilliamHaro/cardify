(function(jQuery) {
  // fn$.fn => jQuery.prototype
  $.fn.cardify = function() {
    var images = $(this).find('img');
    images.each(function() {
      images.css({
        'box-shadow': '7px 7px 10px #000',
      });
    });
    // agregando eventos para que aparezca el texto alt
    images.on('mouseover', function() {
      $(this).css({
        'opacity': '0.1',
      });
      var newFigure = $(this).wrap('<figure>');
      $(this).parent().css({
        'position': 'relative',
        'display': 'inline-block',
      });
      var figcaption = $('<figcaption class="fig">');
      var altText = $(this).attr('alt');
      figcaption.text(altText);
      // anexando la etiqueta figcaption y su contenido a la etiqueta figure con la imagen
      $(this).parent().append(figcaption);
      // agregandole clases para que el texto aparezca encima de la imagen
      figcaption.css({
        'position': 'absolute',
        'top': '0',
        'left': '0',
        'right': '0',
        'bottom': '0',
        'background': 'rgba(0,0,0,0.8)',
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
      });
    });
    images.on('mouseout', function() {
      $('.fig').remove();
      $(this).unwrap();
      $(this).css({
        'opacity': '1'
      });
    });
  };
}(jQuery));
