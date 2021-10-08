const express = require('express');
const http = require('http');
const path = require('path'); 

let app = express(); 
app.use(express.static(path.join(__dirname, 'build'))); 
const port = process.env.PORT || '8080';
app.set('port', port); 
const server = http.createServer(app);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

const prefix = process.env.NODE_ENV === 'production' ? "http://heroku_app_address" : "http://localhost:5000"
function getUrl(relativeUrl) {
   return prefix + "/" + relativeUrl;
}

fetch(getUrl('api/all-reviews'));

server.listen(port, () => console.log(`Running on localhost:${port}`));