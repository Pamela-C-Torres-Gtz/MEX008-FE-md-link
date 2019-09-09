"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readFile = exports.convertPathFromRelativeToAbsolute = void 0;

let path = require('path');
let fs = require('fs');

let convertPathFromRelativeToAbsolute = function convertPathFromRelativeToAbsolute(ruta) {
  return path.resolve(ruta);
};

exports.convertPathFromRelativeToAbsolute = convertPathFromRelativeToAbsolute;

let readFile = function readFile(ruta) {
  return fs.readdirSync(ruta);
}; 

exports.readFile = readFile;
console.log(convertPathFromRelativeToAbsolute('C:/Users/Cinthya/Desktop/LABORATORIA/TrackFrontEnd/Proyecto2-NodeJS/MEX008-FE-md-link'));
console.log(readFile('C:/Users/Cinthya/Desktop/LABORATORIA/TrackFrontEnd/Proyecto2-NodeJS/MEX008-FE-md-link'));
