import {mdLinks} from '../src/md-links.js';

describe('mdLinks Verificación de Links', () => {
  test('Retorna una promesa que resulva un Arreglo de Objetos que represneta un link, que tine las propiedades href,text y file', () => {
     return mdLinks(absolutePath, {validate: true})
     .then ((res) => {
       expect(res).toEqual(validate);
     })
  });

});