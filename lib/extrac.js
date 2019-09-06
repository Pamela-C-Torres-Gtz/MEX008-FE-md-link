//extraer links

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractLinks = void 0;

let fs = require('fs');

let marked = require('marked');

let extractLinks = function extractLinks(array) {
  let linkArray = [];
  array.forEach(function (file) {
    let readFiles = fs.readFileSync(file, 'utf-8');
    let renderer = new marked.Renderer();

    renderer.link = function (href, __, text) {
      linkArray.push({
        href: href,
        text: text.substring(0, 50),
        file: file
      });
    };

    marked(readFiles, {
      renderer: renderer
    });
  });
  return linkArray;
}; 

exports.extractLinks = extractLinks;

//extraer archivos md

exports.filterMdFiles = void 0;

let path = require('path');

let filterMdFiles = function filterMdFiles(array) {
  let mdFilePathsArray = array.filter(function (elem) {
    return path.extname(elem) === '.md';
  });
  return mdFilePathsArray;
};

exports.filterMdFiles = filterMdFiles;