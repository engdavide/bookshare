var express = require("express");
var app = express();
var bodyParser = require("body-parser");

    var books = [
        {name: "book1", description: "words about book1"},
        {name: "book2", description: "words about book3"},
        {name: "book2", description: "words about bookk3"},
    ];




app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/books", function(req,res){

    res.render("books", {books:books});
});

app.get("/books/new", function(req,res){
    res.render("new.ejs")
})

app.post("/books", function(req, res){
    var name = req.body.name;
    var description = req.body.description;
    var newBook = {name: name, description: description};
    books.push(newBook)
    res.redirect("books")
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("bookshare is up!!");
})