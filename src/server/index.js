const dotenv = require('dotenv');
dotenv.config();
//Code Academy in the Back - End section helped tons after looking at other people's code to get an idea
//Some help gotten from Eyong Kevin
//place these dependencies from npm
var path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

var aylien = require("aylien_textapi");
// set aylien API credentials
var textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

//some middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('dist'));
//URL needs to be encoded
app.use(bodyParser.urlencoded({ extended: true }));
//Partly utilized from my Weather Journal
//Help from the Node.js website

//To display the webpage, use the index file in the dist folder, instead of the one in the view folder
app.get('/', function (req, res) {
  res.sendFile('dist/index.html');
})
//Help from the Node.js website

//From Weather Journal App
// Listen for port 2111
const port = 2111;

app.listen(port, function () {
  console.log(`Listen for port number: ${port}!`)
})



//Help from the Node.js website
app.post('/article', function (req, res) {
  const APIurl = req.body.text;
  //help from Aylien Documentation https://docs.aylien.com/textapi/sdks/#node-js-sdk
  textapi.sentiment({
    url: APIurl,
    mode: 'document'
  },

    function (error, response) {

      res.send(response)

    })
});

module.exports = app;