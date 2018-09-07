var db = require('./database/index.js');
var json = require('./data/projects.json');

var insertData = function() {
  db.saveData(json);
}

insertData();