  
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();

/* Empty JS object to act as endpoint for all routes */
const geoProjectData = {};
const weaProjectData = {};
const pixProjectData = {};








/* Initialize the main project folder*/
app.use(express.static('dist'));
//Decided to use an uncommon port for expiremental purposes
const port = 7100;
/* Spin up the server*/
app.listen(port, listening);
 function listening(){
    // console.log(server);
    console.log(`running on localhost: ${port}`);
  };

  /* Geonames API*/
// GET route
app.get('/geoall', sendData);

function sendData (request, response) {
  response.send(geoProjectData);
};

// POST route
//Combine the two POSTS Functions into one
app.post('/geoadd', geoCallBack);
function geoCallBack (req,res){
  Object.assign(geoProjectData,req.body);
  res.send(true);
};

  /* Weatherbit API*/
// GET route
app.get('/weaall', weaSendData);

function weaSendData (request, response) {
  response.send(weaProjectData);
};

// POST route
//Combine the two POSTS Functions into one
app.post('/weaadd', weaCallBack);
function weaCallBack (req,res){
  Object.assign(weaProjectData,req.body);
  res.send(true);
};
  /* Pixaby API*/
// GET route

app.get('/pixall', pixSendData);

function pixSendData (request, response) {
  response.send(pixProjectData);
};

// POST route
//Combine the two POSTS Functions into one
app.post('/pixadd', pixCallBack);
function pixCallBack (req,res){
  Object.assign(pixProjectData,req.body);
  res.send(true);
};

module.exports = app;