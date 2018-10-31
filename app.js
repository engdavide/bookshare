const   express     = require("express"),
        mongoose    = require("mongoose"),
        bodyParser  = require("body-parser");

const   Book        = require("./models/book"),
        Comment     = require("./models/comment"),
        seedDB      = require("./seeds");



const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost/bookshare");

seedDB();

//HOME
app.get("/", function(req, res){
    res.render("landing");
});

//Books INDEX
app.get("/books", function(req,res){
    Book.find({}, function(err, allBooks){
        if(err){
            console.log(err);
        } else {
            res.render("books/index", {books:allBooks});
        }
    });
});

//Books NEW
app.get("/books/new", function(req,res){
    res.render("books/new.ejs")
})

//Books CREATE
app.post("/books", function(req, res){
    var name = req.body.name;
    var description = req.body.description;
    var img = req.body.img;
    var newBook = {name: name, description: description, img: img};
    Book.create(newBook, function(err, newBook){
        if(err){
            console.log(err);
        } else {
            res.redirect("/books")
        }
    })
    
});

//BooksSHOW
app.get("/books/:id", function(req,res){
    Book.findById(req.params.id).populate("comments").exec(function(err, foundBook){
        if(err){
            console.log(err);
        } else {
            res.render("books/show", {book: foundBook});
            console.log(foundBook);
        }
    });
});

//Books Comments NEW
app.get("/books/:id/comments/new", function(req,res){
    Book.findById(req.params.id, function(err, foundBook){
        if(err){
            console.log(err);
        } else {
            res.render("comments/new", {book: foundBook});
        }
    });
});

//Books comments CREATE
app.post("/books/:id/comments", function(req, res){
    Book.findById(req.params.id, function(err, foundBook){
        if(err){
            console.log(err);
            res.redirect("/books");
        } else {
            Comment.create(req.body.comment, function(err, newComment){
                if(err){
                    console.log(err);
                } else {
                    foundBook.comments.push(newComment);
                    foundBook.save();
                    res.redirect("/books/" + foundBook._id);
                }
            });
        }
    });
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("bookshare is up!!");
})