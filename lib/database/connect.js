var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/chiba_project');

module.exports = mongoose;
