const Project = require('../database/model.js');

module.exports = {
  get: function(req, res) {
    console.log('In GET...');
    
    const query = "Unstable Unicorns: Control & Chaos (The Backercorn Project)";

    Project.find({
      name: query
    })
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      console.log('Error', err);
    })
  },

  post: function(req, res) {
    console.log('In POST...');
  },

  delete: function(req, res) {
    console.log('In DELETE...');
  }
}