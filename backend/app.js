var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')
var cors = require("cors");
require('dotenv').config();

var app = express();
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));


app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//importing route
var indexRouter = require('./routes/index');
var salesRouter = require('./routes/sales');
var warrantyRouter = require('./routes/warranty');
var pdfRouter = require('./routes/pdf'); // invoice viewer for pdf
var printPdfRouter = require('./routes/printEntry'); // print entry for each warranty


app.use('/', indexRouter);
app.use('/sales', salesRouter);
app.use('/warranty', warrantyRouter);
app.use('/pdf', pdfRouter);
app.use('/create-pdf', printPdfRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;