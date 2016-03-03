var mongoose = require("mongoose");

var bookSchema = mongoose.Schema;

bookSchema = mongoose.Schema({
	name : String,
	author: String,
	edition: String,
	publisher : String,
	published : String
});

module.exports = mongoose.model("Book",bookSchema);