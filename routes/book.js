const   express     = require("express"),
        router      = express.Router();
        
const   Book        = require("../models/book");

//Books INDEX
router.get("/books", function(req,res){
    Book.find({}, function(err, allBooks){
        if(err){
            console.log(err);
        } else {
            res.render("books/index", {books:allBooks});
        }
    });
});

//Books NEW
router.get("/books/new", isLoggedIn, function(req,res){
    res.render("books/new.ejs")
})

//Books CREATE
router.post("/books", isLoggedIn, function(req, res){
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
router.get("/books/:id", function(req,res){
    Book.findById(req.params.id).populate("comments").exec(function(err, foundBook){
        if(err){
            console.log(err);
        } else {
            res.render("books/show", {book: foundBook});
            // console.log(foundBook);
        }
    });
});


function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = router;