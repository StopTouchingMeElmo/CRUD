const http = require('http');

const express = require('express');

const app = express();

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

Task = require('./api/models/goodsModel');

//Загрузка файла
/* var multer = require('multer');
var DIR = './uploads/';
var upload = multer({dest: DIR}); */

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser', true);
mongoose.connect('mongodb://localhost:27017/mydb');

/* app.use(function (req, res) {
  res.status(404).send({
    url: req.originalUrl + ' not found'
  });
}); */

/* app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}); */

/* app.use(multer({
  dest: DIR,
  rename: function (fieldname, filename) {
    return filename + Date.now();
  },
  onFileUploadStart: function (file) {
    console.log(file.originalname + ' is starting ...');
  },
  onFileUploadComplete: function (file) {
    console.log(file.fieldname + ' uploaded to  ' + file.path);
  }
})); */

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

let routes = require('./api/routes/goodsRoutes'); //importing route
routes(app); //register the route

app.use(express.static('tradebox/dist/tradebox/'));
/* G:\ITMO\Node_course\Trade_Box_ang\tradebox\dist\tradebox */

app.all('/*', function (req, res) {
  console.log('All');
  res
    .status(200)
    .set({
      'content-type': 'text/html; charset=utf-8; image/x-icon'
    })
    .sendfile('tradebox/dist/tradebox/index.html');
});

const server = http.Server(app);
/* server.listen(4200); */
app.listen(4200);

console.log('RESTful API server started on: ' + 4200);