"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.brokenLinks = exports.uniqueLinks = exports.totalLinks = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }
function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

let totalLinks = function totalLinks(array) {
  let total = array.length;
  return total;
};

exports.totalLinks = totalLinks;

let uniqueLinks = function uniqueLinks(array) {
  let unique = _toConsumableArray(new Set(array.map(function (link) {
    return link.href;
  })));

  return unique.length;
};

exports.uniqueLinks = uniqueLinks;

let brokenLinks = function brokenLinks(array) {
  let broken = array.filter(function (link) {
    return link.status === '' || link.statusText === 'Fail';
  });
  return broken.length;
};

exports.brokenLinks = brokenLinks;