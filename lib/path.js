"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readFile = exports.convertPathFromRelativeToAbsolute = exports.comparePath = void 0;

let path = require('path');
let fs = require('fs');

let comparePath = function comparePath(route) {
  let isAbsolute = path.isAbsolute(route);
  return isAbsolute;
}; 
console.log(comparePath(relativePath));

exports.comparePath = comparePath;

let convertPathFromRelativeToAbsolute = function convertPathFromRelativeToAbsolute(ruta) {
  return path.resolve(ruta);
}; 
console.log(convertPathFromRelativeToAbsolute(relativePath));

exports.convertPathFromRelativeToAbsolute = convertPathFromRelativeToAbsolute;

let readFile = function readFile(ruta) {
  let filePathsArray = [];
  let fileNamesArray = fs.readdirSync(ruta); //devuelve el arreglo de nombres

  fileNamesArray.forEach(function (fileName) {
    let absoluteFilePath = path.join(ruta, fileName);
    let stat = fs.statSync(absoluteFilePath); //devuelve propiedades de cada archivo

    if (stat.isFile()) { //si el elemento es un directorio
      filePathsArray = filePathsArray.concat(readFile(absoluteFilePath));
    } else {
      filePathsArray.push(absoluteFilePath);
    }
  });
  return filePathsArray;
}; 
// console.log(readFile(convertPathFromRelativeToAbsolute(relativePath)));

exports.readFile = readFile;