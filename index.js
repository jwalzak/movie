const dotenv = require('dotenv')
const _ = require('lodash')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const pug = require('pug')
const firebase = require('firebase')

// Calls dotenv to keep api keys secret
dotenv.load()

// Tells pug where to find the template file
const compiledFile = pug.compileFile('./pug/template.pug')

// Firebase api information
const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: "",
  messagingSenderId: process.env.MESSAGING_SENDER_ID
}

firebase.initializeApp(config)

// For parsing input data through post
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(bodyParser.json())

// When the page loads this is the get
app.get('/', function(req, res) {
  res.send(compiledFile({
    name: 'Jason'
  }))
})

// When the user hits submit this is the function that makes it work
app.post('/', function(req, res){
  res.send(req.body)
})


// Starts the server
app.listen(3000, function() {
  console.log('Listening on port 3000')
})

