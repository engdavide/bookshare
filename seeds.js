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
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a cursus tellus. Sed id molestie arcu. Nam finibus, quam ut euismod finibus, ante arcu egestas ipsum, non faucibus ante purus ut sapien. Ut sed consequat eros, a posuere massa. Phasellus vel erat sed est rhoncus eleifend. Donec a mauris feugiat, hendrerit turpis eget, mattis lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra semper leo, ac tincidunt tellus volutpat vel. Vestibulum mollis commodo nisl eu interdum. Pellentesque eget posuere felis, ac porta ante. Aenean feugiat sem vitae nulla sodales tempus. Maecenas commodo tortor vitae ligula hendrerit, eu pretium augue tristique. Nam eget volutpat ante, vitae porta nibh. Nulla tristique eros quis metus accumsan bibendum. Ut at lectus nec nunc pellentesque feugiat lacinia vitae mi.", 
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
                                text: "Mauris cursus, urna ac consectetur facilisis, purus dolor posuere erat, vitae auctor libero quam et nisi. Nulla molestie libero et magna finibus, vitae molestie odio mollis. Sed pulvinar augue felis, vel scelerisque velit vehicula accumsan. Suspendisse auctor lectus eget consequat consequat. Pellentesque ut viverra dui, eget semper lorem. Donec eget nisi dui. Vivamus ornare placerat semper.",
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
