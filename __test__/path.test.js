import { comparePath, convertPathFromRelativeToAbsolute, readFile } from "../src/path.js";

const relativePath = '..//MEX008-FE-md-link//__test__//archivos-mdlinks';
const absolutePath = `${process.cwd()}//__test__//archivos-mdlinks`;
export const filePathsArray = [`${process.cwd()}//archivos-mdlinks//general.doc`,
  `${process.cwd()}//archivos-mdlinks//prueba.md`
];

describe('comparePath', () => {
  test('Esto es una funcion', () => {
    expect(typeof comparePath).toBe('function');
  });
  test('Retorna true si la ruta es absoluta', () => {
    return expect(comparePath(absolutePath)).toBe(true);
  });
  test('Retorna false si la ruta no es absoluta', () => {
    return expect(comparePath(relativePath)).toBe(false);
  });
});

describe('convertPathFromRelativeToAbsolute', () => {
  test('Esto es una función', () => {
    expect(typeof convertPathFromRelativeToAbsolute).toBe('function');
  })
  test('Retorna una ruta absoluta a partir de una ruta relativa', () => {
    expect(convertPathFromRelativeToAbsolute(relativePath)).toBe(absolutePath);
  });
});

describe('readFile', () => {
  test('Esto es una función', () => {
    expect(typeof readFile).toBe('function');
  })
  test('Retornar un arreglo de las rutas de todos los archivos al ingresar la ruta del directorio', () => {
    expect(readFile(absolutePath)).toEqual(filePathsArray);
  });
});