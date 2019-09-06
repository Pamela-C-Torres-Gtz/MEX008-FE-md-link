//Checarlo
import { mdLinks } from '../src/md-links.js';
//import { validateLink } from '../src/validate.js';
import { linkArray } from '../src/extrac.js';

const relativePath = '..//MEX008-FE-MD-LINK//archivos-mdlinks';
const absolutePath = `${process.cwd()}test//probando-mdlinks`;

const validate = [
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Este link es de prueba',
    file:  `${process.cwd()}//archivos-mdlinks//prueba.md`,
    status: '',
    statusText: 'OK'
  },
  {
    href:'https://www.youtube.com/watch?v=QgaTQ5-XfM',
    text: 'Este es un link roto',
    file:  `${process.cwd()}//archivos-mdlinks//prueba.md`,
    status: '',
    statusText: 'Not Found'
  }];


const option = {
  validate: false,
  stats: false
};

describe('mdLinks', () => {
  test('Retorna una promesa que resuelva a un array de links donde tiene las propiedades href,text, file', () => {
    return mdLinks(absolutePath, { validate: true })
      .then(res => {
        expect(res).toBe(validate);
      })
  });

  test('Retorna una promesa que resuelva a un array de links, donde tiene las propiedades href,text y file', () => {
    return mdLinks(absolutePath, { validate: false })
      .then((res) => {
        expect(res).toEqual(linkArray);
      });
  });

  test('Retornar una promesa que resuelva a un array de links donde cada link tiene las propiedades href,text, file, status y statusText', () => {
    return mdLinks(relativePath, { validate: true })
      .then((res) => {
        expect(res).toEqual(validate);
      });
  });
  test('Retorna una promesa que resuelva a un array de links, donde cada link tiene las propiedades href,text y file', () => {
    return mdLinks(relativePath, { validate: false })
      .then((res) => {
        expect(res).toEqual(linkArray);
      });
  });
});