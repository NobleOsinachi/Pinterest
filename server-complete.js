'use strict';
/**
 * import React from 'react';
 * var react = require('react-app');
 */

//const bodyParser = require('body-parser');
//const morgan = require('morgan');
//const ejs = require('ejs');
//const engine = require('ejs-mate');
//const fileUpload = require('express-fileupload');
//const mongoose = require('mongoose');

const express = require('express');
const port = process.env.PORT || 1337;

/**To install the packages above, run
 * #### `npm install express body-parser morgan mongoose ejs ejs-mate express-fileupload --save  `
 * in the terminal
 */



const http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);

var app = express();

//const connectionString = 'mongodb://root:123456@ds263988.mlab.com:63988/pinterest';
//mongoose.connect(connectionString, function (err) {
//    if (err) {
//        console.log(err);
//    } else {
//        console.log('Connected to db');

//    };
//});

//request, response, next
app.get('/', function (req, res, next) {
    res.json('Hello');
});

app.listen(port, function (err) {
    (err == true) ? console.log(err) : console.log(`Connected to port ${port}\nOpen https://localhost:${port}/ on your browser`);
});