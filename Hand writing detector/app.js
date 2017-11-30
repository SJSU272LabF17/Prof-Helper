var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var home = require('./routes/home');
var session = require('client-sessions');

//var fs = require('fs');
//   path = require('path');
//
// function crawl(dir){
//   console.log('[+]',dir);
//   var files = fs.readdirSync(dir);
//   for(var x in files){
//     var next = path.join(dir,files[x]);
//     //console.log(next);
//     if(fs.lstatSync(next).isDirectory()==true){
//       crawl(next);
//     }
//     else {
//       console.log('\t',next);
//     }
//   }
// }
//
// crawl(__dirname);


// upload
var app = express();
app.use( express.static( "public" ) );

var upload = require('express-fileupload');
var http = require('http');
server= http.Server(app).listen(3002);

app.use(upload());

console.log("Server Started at port 3002 ");

app.use(express.static(__dirname+'/uploads'))

// Routes

// app.get('/',function(req,res){
//   res.sendFile(__dirname+'/views/index.html');
// });
//
// app.get('/getfiles',function(req,res){ // when user hits localhost/getfiles it send a json data back
//   list_files(function(list){
//     res.send(list);
//   });
// });
//
// // function that searches for the files
//
// function list_files(cb){
//   var dir = './uploads'
//   fs.readdir(dir,function(err,list){
//     cb(list)
//   })
// }


// all environments
app.use(session({
	cookieName: 'session',
	secret: 'cmpe273_test_string',
	duration: 30 * 60 * 1000,    //setting the time for active session
	activeDuration: 5 * 60 * 1000,  }));


app.set('port', process.env.PORT || 5000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
//app.use('/profile', profile);
app.use(express.bodyParser());
app.use(express.cookieParser());

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/signup', home.signup);
app.post('/afterSignUp', home.afterSignUp);
app.get('/', home.signin);
app.get('/signin', home.signin);
app.post('/afterSignIn', home.afterSignIn);
app.get('/afterSignIn', home.afterSignIn);
app.get('/getAllUsers', home.getAllUsers);
app.get('/signout', home.signout);
app.post('/sharing',home.sharing);

// upload
 app.get('/',function(req,res){
  res.sendFile(__dirname+'/successLogin.ejs');
});
app.post("/upload",home.uploadFile);
//upload finish

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
