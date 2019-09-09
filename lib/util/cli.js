#!/usr/bin/env node

//"use strict";

let _stats = require("../status.js");
let _mdLinks = require("../md-links.js");

let path = process.argv[2];
let options = process.argv[3];
let status = process.argv[4];

if (options === '--validate' && status === '--stats' || status === '--stats' && options === '--validate') {
  (0, _mdLinks.mdLinks)(path, {
    validate: true
  }).then(function (result, reject) {
    console.log("Total: ".concat((0, _stats.totalLinks)(result)));
    console.log("Unique: ".concat((0, _stats.uniqueLinks)(result)));
    console.log("Broken: ".concat((0, _stats.brokenLinks)(result)));
  }).catch(function (error) {
    return reject(console.log(error));
  });

} else if (options === '--validate' || options === '--v') {
  (0, _mdLinks.mdLinks)(path, {
    validate: true
  }).then(function (result) {
    console.log(result);
  }).catch(function (error) {
    return console.log(error);
  });

} else if (options === '--stats' || options === '--s') {
  (0, _mdLinks.mdLinks)(path, {
    validate: true
  }).then(function (result) {
    console.log("Total: ".concat((0, _stats.totalLinks)(result)));
    console.log("Unique: ".concat((0, _stats.uniqueLinks)(result)));
  }).catch(function (error) {
    return console.log(error);
  });

} else {
  (0, _mdLinks.mdLinks)(path, {
    validate: false
  }).then(function (result) {
    console.log(result);
  }).catch(function (error) {
    return console.log(error);
  });
}