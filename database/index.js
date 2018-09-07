const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/description');

const db = mongoose.connection;

db.on('error', console.log.bind(console, 'Error connecting to database...'));
db.once('open', () => {
  console.log('Connected to the database!')
})

module.exports = db;