var express = require("express");
var app = express();
var bodyParser = require("body-parser");

    var books = [
        {name: "A Nuclear Family Vacation", description: "words about book1", img: "https://images-na.ssl-images-amazon.com/images/I/51kgqzZFzYL._SX330_BO1,204,203,200_.jpg"},
        {name: "Python Crash Course", description: "words about book 2", img: "https://images-na.ssl-images-amazon.com/images/I/51A4cWQgMtL._SX376_BO1,204,203,200_.jpg"},
        {name: "Culturally Proficient Inquiry", description: "words about book3", img: "https://images-na.ssl-images-amazon.com/images/I/511e5nl6G-L._SX351_BO1,204,203,200_.jpg"},
        {name: "A Nuclear Family Vacation", description: "words about book1", img: "https://images-na.ssl-images-amazon.com/images/I/51kgqzZFzYL._SX330_BO1,204,203,200_.jpg"},
        {name: "Python Crash Course", description: "words about book 2", img: "https://images-na.ssl-images-amazon.com/images/I/51A4cWQgMtL._SX376_BO1,204,203,200_.jpg"},
        {name: "Culturally Proficient Inquiry", description: "words about book3", img: "https://images-na.ssl-images-amazon.com/images/I/511e5nl6G-L._SX351_BO1,204,203,200_.jpg"},
        {name: "A Nuclear Family Vacation", description: "words about book1", img: "https://images-na.ssl-images-amazon.com/images/I/51kgqzZFzYL._SX330_BO1,204,203,200_.jpg"},
        {name: "Python Crash Course", description: "words about book 2", img: "https://images-na.ssl-images-amazon.com/images/I/51A4cWQgMtL._SX376_BO1,204,203,200_.jpg"},
        {name: "Culturally Proficient Inquiry", description: "words about book3", img: "https://images-na.ssl-images-amazon.com/images/I/511e5nl6G-L._SX351_BO1,204,203,200_.jpg"},
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