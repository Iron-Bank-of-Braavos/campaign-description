const express = require('express');
const parser = require('body-parser');
const path = require('path');
// const routes = require('./routes.js');
const PORT = 1337;

var app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

// app.use('/api', routes);

app.use(express.static(path.resolve(__dirname, '../static')));

app.listen(PORT, function(){
  console.log('Listening on port', PORT);
});
