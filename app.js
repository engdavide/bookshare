const   express         = require("express"),
        mongoose        = require("mongoose"),
        passport        = require("passport"),
        LocalStrategy   = require("passport-local"),
        bodyParser      = require("body-parser");

const   Book        = require("./models/book"),
        Comment     = require("./models/comment"),
        seedDB      = require("./seeds"),
        User        = require("./models/user");
        
const   commentRoutes   = require("./routes/comment"),
        bookRoutes      = require("./routes/book"),
        indexRoutes     = require("./routes/index");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

mongoose.connect("mongodb://localhost/bookshare");

seedDB();

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
app.use(indexRoutes);
app.use(bookRoutes);
app.use(commentRoutes);







function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("bookshare is up!!");
})