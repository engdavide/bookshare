const mongoose    = require("mongoose");

const   Comment     = require("./comment"),
        User        = require("./user");



const bookSchema =  new mongoose.Schema({
    name: String,
    description: String,
    img: String,
    owner: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ],
    // Think about how to structure this...does location live as an array here or breakout borrow histories into a model?
    // Maybe use a model for requests to track status?
    location: [
        {   borrower: {
                id: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User"
                },
                username: String,
            },
        borrowDate: {type: Date, default: Date.now },
        }
    ],
    requests: [
        {borrower: {
            id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            },
            username: String,
        },
        requestDate: {type: Date, default: Date.now},
        status: {type: String, default: "waiting"}
        }
    ]
});

module.exports = mongoose.model("Book", bookSchema);

