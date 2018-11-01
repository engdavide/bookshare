const   express     = require("express"),
        router      = express.Router(),
        passport    = require("passport");
        
const   User    = require("../models/user");

//ROUTE DECORATION :app.use("/", indexRoutes);


//AUTH
//USER new
router.get("/register", function(req,res){
    res.render("register");
})

//USER create
router.post("/register", function(req,res){
    var newUser = new User({username: req.body.username})
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(req,res,function(){
            res.redirect("/books");
        });
    });
});

//Login form
router.get("/login", function(req,res){
    res.render("login");
});

//Login POST
router.post("/login", passport.authenticate("local",
    {
        successRedirect: "/books",
        failureRedirect: "/login"
    }), function(req,res){
});

//Logout
router.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/books");
});


//HOME
router.get("/", function(req, res){
    res.render("landing");
});




function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}


module.exports = router;
