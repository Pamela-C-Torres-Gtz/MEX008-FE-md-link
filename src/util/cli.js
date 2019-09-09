#!/usr/bin/env node

const mdLinks = require('./md-links.js');
import {totalLinks, uniqueLinks, brokenLinks} from '..status.js';
import {mdLinks} from './md-links.js';

const path = process.argv[2];
const options = process.argv[3];
const status = process.argv[4];

if (options === '--validate' && status === '--stats' || status === '--stats' && options === '--validate') {
  mdLinks(path, { validate: true })
    .then(result => {
      console.log(`Total: ${totalLinks(result)}`);
      console.log(`Unique: ${uniqueLinks(result)}`);
      console.log(`Broken: ${brokenLinks(result)}`);
    })
    .catch(error => console.log(error));
 //A recomewndacion de Lizie coloco las validaciones en un mismo condicional
} else if (options === '--validate' || options === '--v') {
  mdLinks(path, { validate: true })
    .then(result => {
      console.log(result);
    })
    .catch(error => console.log(error));
} else if (options === '--stats' || options === '--s') {
  mdLinks(path, { validate: true })
    .then(result => {
      console.log(`Total: ${totalLinks(result)}`);
      console.log(`Unique: ${uniqueLinks(result)}`);
    })
    .catch(error => console.log(error));
} else {
  mdLinks(path, { validate: false })
  .then(result => {
    console.log(result);
  })
    .catch(err => console.log(err));
}