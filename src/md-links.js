import {comparePath, convertPathFromRelativeToAbsolute, readFile} from './path.js';
import {extractLinks, filterMdFiles} from './extrac.js';
import {validateLink} from './validate.js';

export const mdLinks = (path, options) => {
  let pathAbsolute;
  if (!comparePath(path)) {
    pathAbsolute = convertPathFromRelativeToAbsolute(path);
  } else {
    pathAbsolute = path;
  };
  return new Promise((resolve) => {
    if (!options.validate) {
      resolve(extractLinks(filterMdFiles(readFile(pathAbsolute))));
    } if (options.validate) {
      resolve(validateLink(extractLinks(filterMdFiles(readFile(pathAbsolute)))));
    } 
  });
};