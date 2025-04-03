const express = require('express')
const app = express();
const userModel = require('./models/user')
const postModel = require('./models/post')

app.get('/',function(req,res){
    res.send('hey');
})

app.get('/create',async function(req,res){
    let user = await userModel.create({
        username: "Vivek",
        email: "vivek@gmail.com",
        age: 23
    })
    res.send(user);
})

app.get('/post/create',async function(req,res){

    let post = await postModel.create({
        postdata: "We all are free here to enjoy",
        user: "677691893fcea1f926165164"
    })

    let user = await userModel.findOne({_id: "677691893fcea1f926165164"});
    user.posts.push(post._id);
    await user.save();

    res.send({post,user})
})

app.listen(5500);