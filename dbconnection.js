var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/pets', { useMongoClient: true });

module.exports = mongoose;