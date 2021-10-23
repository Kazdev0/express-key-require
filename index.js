const express = require('express');
const api = require("./api.js")
const app = express();

app.get('/', (req, res) => {
  res.redirect('/key?key=')
})
app.get('/key', (req, res) => {
api.example(req, res)
});

app.listen(3000, () => {
  console.log('server started');
});