// Path Relativo a Absoluto 'probando-mdlinks';

const path = require('path');
const fs = require('fs');

export const comparePath = (route) => {
  const isAbsolute = path.isAbsolute(route);
  return isAbsolute;
};
//console.log(comparePath(relativePath));

export const convertPathFromRelativeToAbsolute = (ruta) => {
  return path.resolve(ruta);
}
//console.log(convertPathFromRelativeToAbsolute(relativePath));

export const readFile = ruta => {
  let filePathArray = [];
  const fileNameArray = fs.readdirSync(ruta);

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
