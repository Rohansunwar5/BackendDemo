require('dotenv').config()
const express = require('express')
// import express from "express" same as the above
const app = express();
const port = 3000

app.get('/', (req, res) => {
  res.send("hello World")
})

app.get('/twitter', (req, res) => {
  res.send("https://twitter.com/fg_rohnn")
})

app.get('/login', (req, res) => {
  res.send ('<h1> please login at chai aur code </h1>')
})

app.get('/youtube', (req, res) => {
  res.send("<h2>Chai Aur code</h2>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
})