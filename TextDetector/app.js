var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var home = require('./routes/home');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
//app.use(function(req, res, next) {
 // var err = new Error('Not Found');
//  err.status = 404;
//  next(err);
//});

app.get('/', home.index);

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


var	parser = require('multer')({dest: 'uploads/'});
var fs = require('fs');
var path = require('path');


/*
router.post('/profilepicture', parser.single('profile-picture'), function (req,res) {
    var destination = path.join(process.cwd(), "public", "images", req.session.username + ".jpg");
    fs.createReadStream(req.file.path).pipe(fs.createWriteStream(destination));
    fs.unlink(req.file.path, function(err) {
        if(err) {
            res.status("500");
            return res.send("An error occured");
        }
        res.send("Ohk");
    })
});
*/

/*
//vision = require('@google-cloud/vision');

// new vision();
console.log(vision.v1);
/!*


/!*var vision = Vision({
    keyFileName: '/Users/shripalmodani/Downloads/272/My_Project25018-3b8c1f85e018.json',
    projectId: 'optimum-task-18500'
});*!/
// var vision Vision();


// Creates a client
//const vision = new Vision.ImageAnnotatorClient();

/!**
 * TODO(developer): Uncomment the following line before running the sample.
 *!/
// const fileName = 'Local image file, e.g. /path/to/image.png';

// Performs text detection on the local file



//app.post('/readimage', parser.single('profile-picture'), function (req, res) {

   /!* var destination = path.join(process.cwd(), "public", "images", req.body.filename + ".jpg");
    fs.createReadStream(req.file.path).pipe(fs.createWriteStream(destination));
    fs.unlink(req.file.path, function (err) {
        if (err) {
            res.status("500");
            return res.send("An error occured");
        }
   *!/
  // vision
        //var filename =

    app.post('/xyz',function (req, res) {



        vision.textDetection({source: {filename: 'download-a.png'}})
            .then(function (req, res) {
                const detections = results[0].textAnnotations;
                console.log('Text:');
                detections.forEach(function (text) {
                    console.log(text)
                });
                res.json(detections);
            }).catch(function () {
            // console.log();
            res.send("error");
        });


      //  var gcloud = require('gcloud');

// Authorizing on a per-API-basis. You don't need to do this if you auth on a
// global basis (see Authorization section above).
/!*
        var vision = gcloud.vision({
            keyFilename: '/Users/shripalmodani/Downloads/272/My_Project25018-3b8c1f85e018.json',
            projectId: 'optimum-task-185003'
        });

// Read the text from an image.
        vision.detectText('./image.jpg', function(err, text) {
            // text = [
            //   'This was text found in the image',
            //   'This was more text found in the image'
            // ]*!/
        });*/


var gcloud = require("gcloud")

// Authorizing on a per-API-basis. You don't need to do this if you auth on a
// global basis (see Authorization section above).

var vision = gcloud.vision({
    keyFileName: '/Users/shripalmodani/Downloads/272/My_Project25018-3b8c1f85e018.json',
    projectId: 'optimum-task-18500'

});

// Read the text from an image.
vision.detectText('./image.jpg', function(err, text) {
    // text = [
    //   'This was text found in the image',
    //   'This was more text found in the image'
    // ]
});


module.exports = app;
