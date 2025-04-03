const express = require('express');
const app = express();

const userModel = require('./usermodel');       

app.get('/',(req,res) => {
    res.send('hey');
});

app.get('/create',async (req,res) => {
    let createduser = await userModel.create({name: "Anand",
        username: "Anand9889",
        email: "anandraj2955@gmail.com"
    })
    res.send(createduser);
});

app.get('/read',async (req,res) => {
    let users = await userModel.find();  //read all the users
    res.send(users);
 })
 
 app.get('/read',async (req,res) => {
    let users = await userModel.find({name:"Anand"});  //read only user Anand
    res.send(users);
 })

app.get('/update',async (req,res) => {
    let updateduser = await userModel.findOneAndUpdate({name: "Vivek Vishwakarma"},
        {username: "vivekv88"},
        {email: "vivekraj2955@gmail.com"}
)
    res.send(updateduser);
});


app.get('/delete',async (req,res) => {
   let users = await userModel.findOneAndDelete({username:"vivekv88"});  //read only user Anand
   res.send(users);
})

app.listen(3000);