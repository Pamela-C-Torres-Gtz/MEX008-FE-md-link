//test de links y de archivos md

import { extractLinks, filterMdFiles } from "../src/extrac.js";
import { filePathsArray } from './path.test';

const mdFilePathsArray =
[`$process.cwd()}//__test__//archivos-mdlinks//prueba.md`];

describe('filterMdFiles', () => {
    test('Esto es una Función', () => {
        expect(typeof filterMdFiles).toBe('function');
    });
    test('Retorna un Arreglo de rutas de archivos Markdown al ingresar un arreglo de rutas de archivos', () => {
        expect(filterMdFiles(filePathsArray)).toEqual(mdFilePathsArray);
    });
});

export const linkArray =
 [{
     href:'https://es.wikipedia.org/wiki/Markdown',
     text: 'Inforfmación Markdown',
     file: `${process.cwd()}//__test__//archivos-mdlinks//prueba.md`
 },
{
    href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
    text: 'imagen de md',
    file:`${process.cwd()}//__test__//archivos-mdlinks//prueba.md`
},
{
    href: 'https://www.youtube.com/watch?v=QgaTQ5-XfM',
    text: 'liga de video',
    file:`${process.cwd()}//__test__//archivos-mdlinks//prueba.md`
}]

describe('extractLinks', () => {
    test('Esto es una función', () => {
        expect(typeof extractLinks).toBe('function')
    });
    test('Retorna un arreglo de archivos markdown y de links con las propiedades de href, text, file', () => {
        expect(extractLinks(mdFilePathsArray)).toEqual(linkArray)
    });
});