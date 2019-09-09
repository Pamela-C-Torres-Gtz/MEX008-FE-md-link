"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.mdLinks = void 0;

let _path = require("../path.js");
let _extractMd = require("../extrac.js");
let _extractLinks = require("../extrac.js");
let _validate = require("../validate.js");

let mdLinks = function mdLinks(path, options) {
  let pathAbsolute;

  if (!(0, _path.comparePath)(path)) {
    pathAbsolute = (0, _path.convertFromPathRelativeToAbsolute)(path);
  } else {
    pathAbsolute = path;
  };
  return new Promise(function (resolve) {
  
    if (!options.validate) {
      resolve((0, _extractLinks.extractLinks)((0, _extractMd.filterMdFiles)((0, _path.readFile)(pathAbsolute))));
    }
    if (options.validate) {
      resolve((0, _validate.validateLink)((0, _extractLinks.extractLinks)((0, _extractMd.filterMdFiles)((0, _path.readFile)(pathAbsolute)))));
    }
  });
};
exports.mdLinks = mdLinks;