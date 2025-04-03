const express = require('express')
const app = express() // express ki sari powers app naam ke iss constant variable mei aa gyi hai

//This is middleware app.use() ka mtlb hrr baar chalna hi chahiye and isme req res and next hona hi chahiye agr hum next ko call nhi karenge to req route tak jayegi hi nhi ab hum aise jitne chahe utne middleware bna skte hai
app.use(function(req,res,next){
    console.log("Middleware chala")
    next();
})

app.get('/', function (req, res) {
  res.send("Mai hu the programmer");
})

app.get('/profile', function (req, res, next) {
  return next(new Error("Something went wrong!"))
})

//error handler
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(3000)