const   express     = require("express"),
        router      = express.Router({mergeParams: true});
        // need merge params to pass :id from route decoration
        
const   Book    = require("../models/book"),
        Comment = require("../models/comment");
        
//ROUTE DECORATION : app.use("/books/:id/comments", commentRoutes);

//Books Comments NEW
router.get("/new", isLoggedIn, function(req,res){
    Book.findById(req.params.id, function(err, foundBook){
        if(err){
            console.log(err);
        } else {
            res.render("comments/new", {book: foundBook});
        }
    });
});

//Books comments CREATE
router.post("/", isLoggedIn, function(req, res){
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






function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}


module.exports = router;