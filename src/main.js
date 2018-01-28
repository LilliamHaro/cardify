let cardify = (containerID) => {
  let container = document.getElementById(containerID);
  let images = container.querySelectorAll('img');
  images.forEach((img) => {
    let figure = document.createElement('figure');
    let figCaption = document.createElement('figcaption');
    let altText = img.getAttribute('alt');
    var imgCopy = img;
    figCaption.innerText = altText;
    img.replaceWith(figure);
    figure.appendChild(imgCopy);
    figure.append(figCaption);
  });
};
