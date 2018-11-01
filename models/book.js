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
    ]
});

module.exports = mongoose.model("Book", bookSchema);

