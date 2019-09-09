import {mdLinks} from '../src/util/md-links.js';
//import { validateLink } from '../src/validate.js';
import {linkArray} from './extrac.test.js';

const relativePath = '..//MEX008-FE-MD-LINK//__test__//archivos-mdlinks';
const absolutePath = `${process.cwd()}//__test__//archivos-mdlinks`;

const validate = [{
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Inforfmación Markdown',
    file: `${process.cwd()}//__test__//archivos-mdlinks//prueba.md`,
    status: '150',
    statusText: 'OK'
  },
  {
    href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
    text: 'imagen de md',
    file: `${process.cwd()}//__test__//archivos-mdlinks//prueba.md`,
    status: '',
    statusText: 'Not Found'
  },
  {
    href: 'https://www.youtube.com/watch?v=QgaTQ5-XfM',
    text: 'liga de video',
    file: `${process.cwd()}//__test__//archivos-mdlinks//prueba.md`,
    status: '',
    statusText: 'Not Found'
  }
];


const option = {
  validate: false,
  stats: false
};

describe('mdLinks', () => {
  test('Retorna una promesa que resuelva a un array de links donde tiene las propiedades href,text, file', () => {
    return mdLinks(absolutePath, {
        validate: true
      })
      .then(result => {
        expect(result).toBe(validate);
      })
  });

  test('Retorna una promesa que resuelva a un array de links, donde tiene las propiedades href,text y file', () => {
    return mdLinks(absolutePath, {
        validate: false
      })
      .then((result) => {
        expect(result).toEqual(linkArray);
      });
  });

  test('Retornar una promesa que resuelva a un array de links donde cada link tiene las propiedades href,text, file, status y statusText', () => {
    return mdLinks(relativePath, {
        validate: true
      })
      .then((result) => {
        expect(result).toEqual(validate);
      });
  });
  test('Retorna una promesa que resuelva a un array de links, donde cada link tiene las propiedades href,text y file', () => {
    return mdLinks(relativePath, {
        validate: false
      })
      .then((result) => {
        expect(result).toEqual(linkArray);
      });
  });
});