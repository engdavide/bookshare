var express     = require("express"),
    mongoose    = require("mongoose"),
    app         = express(),
    bodyParser  = require("body-parser");

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



mongoose.connect("mongodb://localhost/bookshare");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//schemas TODO: refactor later
var bookSchema =  new mongoose.Schema({
    name: String,
    description: String,
    img: String
});

var Book = mongoose.model("Book", bookSchema);

// Book.create(
//     {
//         name: "A Nuclear Family Vacation", 
//         description: "words about book1", 
//         img: "https://images-na.ssl-images-amazon.com/images/I/51kgqzZFzYL._SX330_BO1,204,203,200_.jpg" 
//     }, function(err, book){
//         if(err){
//             console.log(err);
//         } else {
//             console.log("made a thing: ");
//             console.log(book);
//         }
//     }
// )

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/books", function(req,res){
    Book.find({}, function(err, allBooks){
        if(err){
            console.log(err);
        } else {
            res.render("books", {books:allBooks});
        }
    });
});

app.get("/books/new", function(req,res){
    res.render("new.ejs")
})

app.post("/books", function(req, res){
    var name = req.body.name;
    var description = req.body.description;
    var img = req.body.img;
    var newBook = {name: name, description: description, img: img};
    Book.create(newBook, function(err, newBook){
        if(err){
            console.log(err);
        } else {
            res.redirect("books")
        }
    })
    
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("bookshare is up!!");
})