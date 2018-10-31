const mongoose    = require("mongoose");

const Comment     = require("./comment");



const bookSchema =  new mongoose.Schema({
    name: String,
    description: String,
    img: String,
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});

module.exports = mongoose.model("Book", bookSchema);
