const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/testingthedatabase")

const userschema = mongoose.Schema({
    username: String,
    email: String,
    age: Number,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,  // This reflects that post ek array of type id
            ref: 'post'
        }
    ]
})

module.exports = mongoose.model("user",userschema);