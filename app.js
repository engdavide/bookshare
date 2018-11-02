/* TODO !!!
CRUD for comments
flesh out book model (tags/topics, current location, etc)
Stars!
init borrow process
Tie comment update/delete to author
Tie book update/delete to owner

-Book add process
--Leverage Amazon lookup
--Make add new form with single enter 

Style everything
Tweak responsiveness

DEPLOY (heroku?)

*/





const   express         = require("express"), //Packages
        mongoose        = require("mongoose"),
        passport        = require("passport"),
        LocalStrategy   = require("passport-local"),
        methodOverride  = require("method-override"),
        bodyParser      = require("body-parser");

const   Book        = require("./models/book"), //Models
        Comment     = require("./models/comment"),
        User        = require("./models/user");
        
const   seedDB      = require("./seeds"); //Internal functions
        
const   commentRoutes   = require("./routes/comment"), //Routes
        bookRoutes      = require("./routes/book"),
        indexRoutes     = require("./routes/index");

// init express, set EJs engine, use bodyparser, 
// add public dir, use method overrides, etc...
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

mongoose.connect("mongodb://localhost/bookshare");

//seedDB(); //Seed the database

// PASSPORT config
app.use(require("express-session")({
    secret: "secret",
    resave: false,
    saveUnitialied: false
}))
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//pass user on all routes
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
})


//ROUTES
app.use("/", indexRoutes);
app.use("/books", bookRoutes);
app.use("/books/:id/comments", commentRoutes);


//middleware...
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("bookshare is up!!");
})