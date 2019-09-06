/*// ejemplo de estructura de paht relativa
const path = require('path');

// paht.is Absoljute
path.isAbsolute('/foo/bar'); // true
path.isAbsolute('/baz/..');  // true
path.isAbsolute('qux/');     // false
path.isAbsolute('.');        // false

path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb');
// Returns: '../../impl/bbb'*/

// Path Relativo a Absoluto 'probando-mdlinks';

const path = require('path');
const fs = require('fs');
const relativePath = '';

export const comparePath = (route) => {
  const isAbsolute = path.isAbsolute(route);
  return isAbsolute;
};
//console.log(export const comparePath(relativePath));


export const convertPathFromRelativeToAbsolute = (ruta) => {
  return path.result(ruta);
}
//console.log(export const convertPathFromRelativeToAbsolute(relativePath));

export const readFile = ruta => {
  let filePathArray = [];
  const fileNameArray = fs.readFileSync(ruta); 
  
  fileNameArray.forEach(fileName => { 
    const absoluteFilePath = path.join(ruta, fileName); 
    const stat = fs.statSync(absoluteFilePath); 
    if (stat.isFile()) { 
      filePathArray = filePathArray.concat(readFile(absoluteFilePath)); 
    } else {
      filePathArray.push(absoluteFilePath);
    }
  });
  return filePathArray;
}
// console.log(readFile(convertPathFromRelativeToAbsolute(relativePath)));
