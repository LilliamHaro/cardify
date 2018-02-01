const jsdom = require('jsdom');
const { JSDOM } = jsdom;
let dom = new JSDOM('<!DOCTYPE html><html lang="en">' +
  '<head><meta charset="UTF-8"><title>Cardify</title>' +
  '</head><body><div class="overflow">' + '<div id="container"><img src="assets/images/infancia.png" alt="Ada Lovelace de niña">' + '</script><script src="src/index.js"></script></body></html>');

const { window } = dom;
global.document = dom;
global.window = window;
global.navigator = {
  userAgent: 'node.js',
};

const $ = require('jquery');
const chai = require('chai');
const plugin = require('chai-jq');
chai.use(plugin);

// Archivo `cardify.spec.js`:
const cardify = require('../src/index.js')
describe('cardify', () => {
  if(' deberia buscar todas las imagenes dentro de un contendor', () => {

  });
  if('deberia reemplazar las imagenes por elemento <figure>', () => {

  });
  if('deberia tener un <figcaption> con el texto del atri7buto alt', () => {

  });

});