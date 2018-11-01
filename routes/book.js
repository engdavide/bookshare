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
    res.render("books/new.ejs")
})

//Books CREATE
router.post("/", isLoggedIn, function(req, res){
    var name = req.body.name;
    var description = req.body.description;
    var img = req.body.img;
    // var newBook = {name: name, description: description, img: img};
    Book.create(req.body.book, function(err, newBook){
        if(err){
            console.log(err);
        } else {
            newBook.owner.id = req.user._id;
            newBook.owner.username = req.user.username;
            newBook.save();
            res.redirect("/books")
        }
    })
    
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

//middleware
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = router;