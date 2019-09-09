import { validateLink } from '../src/validate.js';
import { linkArray } from './extrac.test.js';

export const linksStatusArray = [
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Este link es de prueba',
    file:
      `${process.cwd()}//archivos-mdlinks//prueba.md`,
    status: 150,
    statusText: 'OK'
  },
  {
    href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
    text: 'Este es un link de una imagen',
    file:
      `${process.cwd()}//archivos-mdlinks//prueba.md`,
    status: '',
    statusText: 'Not Found'
  },
  {
    href: 'img/diagramaFlujo.png',
    text: 'Esta es una ruta de una igen local',
    file:
      `${process.cwd()}//archivos-mdlinks//prueba.md`,
    status: 200,
    statusText: 'Not Found'
  },
  {
    href: 'https://www.youtube.com/watch?v=QgaTQ5-XfM',
    text: 'Este es un link roto',
    file:
      `${process.cwd()}archivos-mdlinks//prueba.md`,
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://jestjs.io/docs/en/expect#tothrowerror',
    text: 'documentos de testing con jest ',
    file:
      `${process.cwd()}//archivos-mdlinks//general.doc`,
    status: 404,
    statusText: 'Fail'
  }];

describe('validateLink', () => {
  it('Retorna el arreglo de links ingresado con las nuevas propiedades status y statusText', () => {
    return validateLink(linkArray).then(linkArray => {
      expect(linkArray).toEqual(linksStatusArray);
    });
  });
});