var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var  ejs = require('ejs');
var  ejsMate = require('ejs-mate');
var index = require('./routes/index');


var app = express();
app.set('views', './views');
// 设置默认的模板引擎
app.set('view engine', 'ejs');
app.engine('ejs', ejsMate);
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', index);
require('./routes/index')(app)



module.exports = app;
