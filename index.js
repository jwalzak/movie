const dotenv = require('dotenv')
const _ = require('lodash')
const express = require('express')
const app = express()
const pug = require('pug')
const firebase = require('firebase')

dotenv.load()

const compiledFile = pug.compileFile('./pug/template.pug')

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: "",
  messagingSenderId: process.env.MESSAGING_SENDER_ID
}

firebase.initializeApp(config)

app.get('/', function(req, res) {
  res.send(compiledFile({
    name: 'Jason'
  }))
})

app.listen(3000, function() {
  console.log('Listening on port 3000')
})

