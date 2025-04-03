const fs = require('fs');

/* this was the node code for creating and writing a file
fs.writeFile("hey.txt","Hey hello beta kaise ho",function(err){
    if(err) console.error(err);
    else console.log("Done");
})


// fs.appendFile("hey.txt"," mai to acha hu bhaiya",function(err){
//     if(err) console.error(err);
//     else console.log("Done");
// })

fs.rename("D:\\Web Development\\Shreyians Coding School\\Full Backend\\Part-2  Node.js and npm Modules\\hey.txt","D:\\Web Development\\Shreyians Coding School\\Full Backend\\Part-2  Node.js and npm Modules\\hello.txt",function(err){
    if(err) console.error(err);
    else console.log("Done");
})


fs.copyFile("D:\\Web Development\\Shreyians Coding School\\Full Backend\\Part-2  Node.js and npm Modules\\hello.txt","D:\\Web Development\\Shreyians Coding School\\Full Backend\\Part-2  Node.js and npm Modules\\copy\\chcha.txt",function(err){
    if(err) console.error(err);
    else console.log("Done");
})



fs.unlink("hello.txt",function(err){
    if(err) console.error(err);
    else console.log("removed");
})

*/

fs.rmdir("./copy", {recursive: true} ,function(err){
    if(err) console.error(err);
    else console.log("Removed");
})


fs.rm("./copy", {recursive: true} ,function(err){
    if(err) console.error(err);
    else console.log("Removed");
})