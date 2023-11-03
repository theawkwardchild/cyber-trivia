var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));

app.post('/submit', function(req, res, next) {
  const ukrain = req.body.ukrain
  const pipedream = req.body.pipedream
  const injection = req.body.injection
  const powershell = req.body.powershell
  const ttp = req.body.ttp
  const insurance = req.body.insurance
  const records = req.body.records
  const btc = req.body.btc

  var correct = 0
  if(ukrain == "KillDisk") correct++;
  if(pipedream == "Python") correct++;
  if(injection == "VirtualAllocEx") correct++;
  if(powershell == "System.Management.Automation.dll") correct++;
  
  if(ttp == "Ransomware") correct++;
  if(insurance == "CNA-Insurance") correct++;
  if(records == "1b") correct++;
  if(btc == "11m") correct++;

  if(correct == 8){
    return res.send({status:"correct", message: "FLAG-CYBERTRIVIA-FLAG"})
  } else {
    return res.send({status:"wrong", message: "You got " + correct + "/8 answers right"})
  }

});

/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('index', { title: 'Cyber Trivia' });
});

app.use( ( req, res, next ) => {
  res.status( 404 ).sendFile( __dirname + '/public/404.html' );
});

module.exports = app;
