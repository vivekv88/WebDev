const express = require('express')
const app = express() // express ki sari powers app naam ke iss constant variable mei aa gyi hai


//these are middleware which are used for form handling mtlb data ko frontend par readable bnayega after retriving info from server side
app.use(express.json());  // json type ke data ko read karega
app.use(express.urlencoded({extended : true})); // for url encoded type of data 


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