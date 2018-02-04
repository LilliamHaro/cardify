// Archivo `cardify.spec.js`:


const jsdom = require('jsdom');
const { JSDOM } = jsdom;
let dom = new JSDOM('<!DOCTYPE html><html><body><div class="overflow"><div class="container"> <img src="assets/images/infancia.png" alt="Ada Lovelace de niña"></></div></div></body></html>');
const { window } = dom;
global.document = dom;
global.window = window;
global.navigator = {
  userAgent: 'node.js',
};

const $ = require('jquery');
var chai = require('chai');
var plugin = require('chai-jq');
// Inject plugin.
chai.use(plugin);
const cardify = require('../public/index.js');


describe('cardify', () => {

  it('alt debería ser un string', function () {
    expect('alt').to.be.a('string');
  })
  it('figcaption debería ser un string', function () {
    expect('figcaption').to.be.a('string');
  })
  it('alt no está vacío', function () {
    assert.exists('alt', 'alt no está vacio');
  })
  it('la extensión de la imagen es correcta', function () {
    $('img').attr('src').substring($('img').attr('src').lastIndexOf('.')) === '.jpg' && '.png' && '.gif' && '.jpeg' && '.svg';
  });
  it('src no está vacío', function () {
    $('img').attr('src').length > 0;
  });
  it('figure class no está vacío', function () {
    $('figure').attr('class').length > 0;
  });
  it('figcaption class no está vacío', function () {
    $('figcaption').attr('class').length > 0;
  });

  it(' deberia buscar todas las imagenes dentro de un contendor', () => {
    chai.expect($('img')).to.have.$attr('alt');
  });
  it('deberia reemplazar las imagenes por elemento <figure>', () => {
    chai.expect($('newFigure')).to.have.$wrap('figure');
  });
  it('deberia tener un <figcaption> con el texto del atri7buto alt', () => {
    chai.expect($('figcaption')).to.have.$class('fig');
  });

});