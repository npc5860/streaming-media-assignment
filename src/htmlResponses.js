const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const page2 = fs.readFileSync(`${__dirname}/../client/client2.html`);
const page3 = fs.readFileSync(`${__dirname}/../client/client3.html`);

const pagemap = {
  '/page2': page2,
  '/page3': page3,
};

const getPage = (request, response) => {
  let page = pagemap[request.url];
  if (!page) {
    page = index;
  }

  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(page);
  response.end();
};

module.exports = {
  getPage,
};
