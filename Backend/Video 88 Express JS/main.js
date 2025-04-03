const express = require('express')
const app = express()
const port = 3000

// Syntax : app.get ot app.put or app.post or app.delete(path,handler)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('About us')
})

app.get('/contact', (req, res) => {
  res.send('contact me')
})

app.get('/vlog', (req, res) => {
  res.send('vivek ke vlogs')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})