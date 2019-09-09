"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateLink = void 0;

let fetch = require('node-fetch');

let validateLink = function validateLink(arr) {
  let validatedLinksArray = arr.map(function (links) {
    
    return new Promise(function (resolve, reject) {
      return fetch(links.href)
      .then(function (response) {
        if (response.status >= 150 && response.status < 350) {
          links.status = response.status;
          links.statusText = response.statusText;
          resolve(links);
        } else {
          links.status = response.status;
          links.statusText = 'Fail';
          resolve(links);
        }
      }).catch(function () {
        links.status = '';
        links.statusText = 'Not Found';
        resolve(links);
      });
    });
  });
  return Promise.all(validatedLinksArray);
};
exports.validateLink = validateLink;