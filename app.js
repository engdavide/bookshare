var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/books", function(req,res){
    var books = [
        {name: "book1", description: "words about book1"},
        {name: "book2", description: "words about book3"},
        {name: "book2", description: "words about bookk3"},
    ]
    res.render("books", {books:books});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("bookshare is up!!")
})