const   mongoose    = require("mongoose");

const   Book        = require("./models/book"),
        Comment     = require("./models/comment");
    
function clearAll(){
    Book.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed all books");
        clearComments();
    });
};

function clearComments(){
    
    Comment.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed all comments");
        genBooks();
    });
};

function genBooks(){
    var data = [

        {
            name: "A Nuclear Family Vacation", 
            description: "words about book1", 
            img: "https://images-na.ssl-images-amazon.com/images/I/51kgqzZFzYL._SX330_BO1,204,203,200_.jpg"
            
        },
        {
            name: "Python Crash Course", 
            description: "words about book 2", 
            img: "https://images-na.ssl-images-amazon.com/images/I/51A4cWQgMtL._SX376_BO1,204,203,200_.jpg"
            
        },
        {
            name: "Culturally Proficient Inquiry", 
            description: "words about book3", 
            img: "https://images-na.ssl-images-amazon.com/images/I/511e5nl6G-L._SX351_BO1,204,203,200_.jpg"
            
        },
    
    ];
    
    data.forEach(function(seed){
                Book.create(seed, function(err, book){
                    if(err){
                        console.log(err)
                    } else{
                        console.log ("added a book");
                    
                        Comment.create(
                            {
                                text: "test comment",
                                author: "me"
                            }, function(err, comment){
                                if(err){
                                    console.log(err)
                                } else {
                                    book.comments.push(comment);
                                    book.save();
                                    console.log("created test comment");
                                }
                            }
                        );
                    };
                });
    });              
    
}

function seedDB(){
clearAll();

console.log("seed complete");
}

module.exports = seedDB;
