//Validación para comprobar si el link funciona o no

const fetch = require('node-fetch');

export const validateLink = (arr) => {
  const validatedLinksArray = arr.map(links => new Promise((resolve, reject) => {
    return fetch(links.href)
      .then(response => {
        if (response.status >= 150 && response.status < 350) {
          links.status = response.status;
          links.statusText = response.statusText;
          resolve(links);
        } else {
          links.status = response.status;
          links.statusText = 'Fail';
          resolve(links);
        }
      }).catch(() => {
        links.status = '';
        links.statusText = 'Not Found';
        resolve(links);
      });
  }));
  return Promise.all(validatedLinksArray);
};
