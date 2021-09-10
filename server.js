// server.js
// where your node app starts
//const http = require('http');
// init project
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()); 
// Express modules / packages

app.use(bodyParser.urlencoded({ extended: true })); 
// Express modules / packages

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
const cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

/*app.param('/api/:dateId', (req, res, next) =>{
  console.log('------------------------------------------------------------------');
  console.log('Request URL: ', req.query.dateId);
  next();
}, (req, res, next)=>{
  console.log('Request Type: ', req.method);
  next();
})*/

// your first API endpoint... 
app.get("/api/:date?", (req, res) => {
  //console.log(err);
  //if(req.query.date)res.sendStatus(404);
  if(req.query.date);
  //console.log(req.query.format)
  //console.log(dateChosen);
  res.json({'firstLine': dateChosen});
});

app.get("/api/1451001600000", (req, res) => {
  res.json({greeting: 'hello API'});
});
app.get("/api/2015-12-25", (req, res) => {
  res.json({greeting: 'hello API'});
});


// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
