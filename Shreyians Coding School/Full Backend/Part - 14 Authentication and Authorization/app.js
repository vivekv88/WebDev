const cookieparser = require('cookie-parser')
const express = require('express');
const app = express();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

app.use(cookieparser())

// app.get('/',function(req,res){
//     res.cookie("name","Vivek");
//     res.send("Done mere laal");
// })


app.get('/',function(req,res){
    const token = jwt.sign({email: "vivekraj2955@example.com"}, "secret")
    res.cookie("token", token);
    res.send('done');
    //yeh email hi hai jo encrypt hoke as a string jati hai and system recognise it on the basis of the secret so secret cannot be written in plaintext it will very confidential
})

app.get('/read',function(req,res){
    let data = jwt.verify(req.cookies.token, "secret" );
    console.log(data)
})


// app.get('/',function(req,res){
//     bcrypt.compare("VivekJi", "$2b$10$qJD97zpAbEwqswz7jdbBFeCxENTrSQ/zzpK2ZwOP0ihIe9vDz0qJi", function(err, result) {
//         console.log(result);
//     });
// })


// app.get('/',function(req,res){

//     // getSalt -> means generate Salt and Salt is a random string of any character 
//     //this is part of encryption
//     bcrypt.genSalt(10, function(err, salt) {
//         bcrypt.hash("VivekJi", salt, function(err, hash) {
//             console.log(salt);
//         });
//     });
//     res.send('done')
// })





app.get('/read',function(req,res){
    console.log(req.cookies);
    res.send("read here");
})



app.listen(3000);