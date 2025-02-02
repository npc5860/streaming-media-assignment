const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const mediaHander = require('./mediaResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  console.log(request.url);

  switch (request.url) {
    case '/party.mp4':
      mediaHander.getParty(request, response);
      break;

    case '/bird.mp4':
      mediaHander.getBird(request, response);
      break;

    case '/bling.mp3':
      mediaHander.getBling(request, response);
      break;

    case '/':
    case '/page2':
    case '/page3':
    default:
      htmlHandler.getPage(request, response);
      break;
  }
};

http.createServer(onRequest).listen(port, () => {
  console.log(`Listening on 127.0.0.1:${port}`);
});
