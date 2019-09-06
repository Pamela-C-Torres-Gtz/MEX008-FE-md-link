//extarer los links
const fs = require('fs');
const marked = require('marked');

exports.extractLinks = (array) => {
	let linkArray = [];
	array.forEach((file) => {
		const readFiles = fs.readFileSync(file,);
		const renderer = new marked.Renderer();
		renderer.link = (href, __, text) => {
			linkArray.push({ href, text: text.substring(0, 40), file });
		};
		marked(readFiles, {renderer});
	});
	return linkArray;
};

//Extraer información de archivo md
export const filterMdFiles = array => {
  const mdFilePathArray = array.filter(elem => path.extname(elem) === '.md');
  return mdFilePathArray;
};