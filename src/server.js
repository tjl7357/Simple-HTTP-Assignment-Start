// Imports
const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const textHandler = require('./textResponses.js');
const jsonHandler = require('./jsonResponses.js');

// Establishes the Server Port
const port = process.env.PORT || process.env.NODE_PORT || 3000;

// Processes the incoming request
const onRequest = (request, response) => {
    console.log(request.url);

    switch (request.url) {
        case '/':
            htmlHandler.getIndex(request, response);
            break;
        case '/page2':
            htmlHandler.getPage2(request, response);
            break;
        default:
            htmlHandler.getIndex(request, response);
            break;
    }
};

// Creates the server
http.createServer(onRequest).listen(port, () => {
  console.log(`Listening on 127.0.0.1:${port}`);
});
