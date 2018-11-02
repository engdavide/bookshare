const   express     = require("express"),
        router      = express.Router();
        
const   Book        = require("../models/book");

//ROUTE DECORATION: app.use("/books", bookRoutes);


//Books INDEX
router.get("/", function(req,res){
    Book.find({}, function(err, allBooks){
        if(err){
            console.log(err);
        } else {
            res.render("books/index", {books:allBooks});
        }
    });
});

//Books NEW
router.get("/new", isLoggedIn, function(req,res){
    res.render("books/new.ejs");
});

//Books CREATE
router.post("/", isLoggedIn, function(req, res){
    Book.create(req.body.book, function(err, newBook){
        if(err){
            console.log(err);
        } else {
            newBook.owner.id = req.user._id;
            newBook.owner.username = req.user.username;
            newBook.save();
            res.redirect("/books");
        }
    });
});

//Books SHOW
router.get("/:id", function(req,res){
    Book.findById(req.params.id).populate("comments").exec(function(err, foundBook){
        if(err){
            console.log(err);
        } else {
            res.render("books/show", {book: foundBook});
            // console.log(foundBook);
        }
    });
});

//Books EDIT
router.get("/:id/edit", function(req, res) {
    Book.findById(req.params.id, function(err, foundBook){
        if(err){
            console.log(err);
            res.redirect("/books");
        } else {
            res.render("books/edit", {book: foundBook});
        }
    });
    
});

//Books UPDATE
router.put("/:id", function(req, res){
    Book.findByIdAndUpdate(req.params.id, req.body.book, function(err, updatedBook){
        if(err){
            console.log(err);
            res.redirect("/books/" + req.params.id);
        } else {
            res.redirect("/books/" + req.params.id);
            
        }
    });
});

//Books DESTROY
router.delete("/:id", function(req, res){
    Book.findByIdAndDelete(req.params.id, function(err){
        if(err){
            console.log(err);
            res.redirect("/books");
        } else {
            res.redirect("/books");
        }
    });
});

//middleware
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = router;