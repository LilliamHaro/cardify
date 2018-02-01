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

(function(jQuery) {
  // $.fn => jQuery.prototype
  $.fn.cardify = function() {
    let images = this.find('img');
    images.each(function() {
      images.css({
        'box-shadow': '7px 7px 10px #000',
      });
    });
    // agregando eventos para que aparezca el texto alt
    images.on('mouseover', (event) => {
      $(event.target).css({
        'opacity': '0.1',
      });
      let newFigure = $(event.target).wrap('<figure>');
      $(event.target).parent().css({
        'position': 'relative',
        'display': 'inline-block',
      });
      let figcaption = $('<figcaption class="fig">');
      let altText = $(event.target).attr('alt');
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
      });
    });
    images.on('mouseout', (event) => {
      $('.fig').remove();
      $(event.target).unwrap();
      $(event.target).css({
        'opacity': '1'
      });
    });
  };
}(jQuery));
