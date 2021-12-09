const Path = require("path");
const glob = require("glob");
const apiFiles = glob.sync(
  Path.resolve(__dirname, './') + '/**/[!_]*.js',
  {
    nodir: true,
  },
);

let data = {};

apiFiles.forEach(filePath => {
  const api = require(filePath);
  let [, url] = filePath.split('api/');
  url = url.slice(0, url.length - 3);
  data[url.replace(/\//g, '-')] = api;
});

// data will be something like:
// { 'blog-comments': [ { id: 1, body: 'some comment', postId: 1 } ],
//   'blog-posts': [ { id: 1, title: 'json-server', author: 'tydpicode' } ],
//   'blog-profile': { name: 'typicode' },
//   'documents-query': { data: 123 } }

module.exports = () => {
  return data;
};