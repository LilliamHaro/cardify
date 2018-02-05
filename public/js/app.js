$(document).ready(() => {
  $('#withCardify').on('click', function(event) {
    $('.overflow').cardify();
  });
  $('#withoutCardify').on('click', function(event) {
    window.location.href = '../public/index.html';
  });
});
