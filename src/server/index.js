const dotenv = require('dotenv');
dotenv.config();
//Some help gotten from Eyong Kevin
var path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

var aylien = require("aylien_textapi");
// set aylien API credentials
// NOTICE that textapi is the name I used, but it is arbitrary.
// You could call it aylienapi, nlp, or anything else, 
//   just make sure to make that change universally!
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

//some middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('dist'));
//URL needs to be encoded
app.use(bodyParser.urlencoded({extended: true}));



app.get('/', function(req, res) {
    res.sendFile('dist/index.html');
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function() {
    console.log('Example app listening on port 8081!')
})


app.post('/end', function (req, res) {
    const APIurl = req.body.text;

    //help from Aylien Documentation
    textapi.sentiment({
      url: APIurl,
      mode: 'document'
    }, function (error, response) {
      res.send(response)
      if (error === null) {
        console.log('error');
      }
    })
  });
  



  
  module.exports = app;