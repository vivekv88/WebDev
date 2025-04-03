const express = require('express')
const app = express()

//Middleware 
/*
app.use(function(req, res, next){
  console.log("MiddleWare Working")
  next();
});
*/

app.set("view engine","ejs");
app.use(express.static('./public'))

app.get('/', function (req, res) {
  res.render("index")
})

app.get('/contact', function (req, res) {
  res.render("contact",{name: "Vivek"})
})

app.get('/error', function (req, res, next) {
 throw Error("Something went wrong");
})

/*
route parameters
app.get('/profile/:username', function (req, res) {
  res.send(`Hello from ${req.params.username}`)
})
*/

app.use(function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
})

app.listen(3000)