var express = require("express"),
	mongoose = require("mongoose"),
	bodyParser = require("body-parser"),
	morgan = require("morgan"),
	app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.static("./public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended : true
}));

mongoose.connect("mongodb://localhost/bookstore");


var Book = require("./models/book.js");

//routes for homepage
// this will get home page and render create book page
app.get("/",function(req,res){
	res.render("index");
});
// this is will post data of create page into database
app.post("/",function(req,res){
	var book = new Book(req.body);
	book.save(function(err,data){
		if(err)
			throw err;
		console.log(data);
		res.redirect("/");
	});
});
app.get("/findbooks/:name",function(req,res){
	res.render("pages/searchedBook");
	Book.findOne({name: req.params.name},function(err,data){
		if(err)
			throw err;
		console.log(data)
	});
});


//routes for books page
//this will find all data from database and render it on books page
app.get("/books",function(req,res){
	Book.find({},function(err,data){
		res.render("pages/books",{
			books : data
		});
	});
	
});

app.get("/books/:name",function(req,res){
	

	Book.remove({name:req.params.name},function(err){
		if (err)
			throw err;
	});




	//console.log(req.params.name);
	//res.send(req.params.name);
	res.redirect("/books");

});


app.listen(3000,function(){
	console.log("server running on port 3000");
});