var express= require("express");
var reuest= require("request");
var bodyParser=require("body-parser");
var app=express();
app.set("view engine", "ejs");
app.use("/styles", express.static("styles"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get("/", function(req, res){
	res.render("home");
});

app.get("/login", function(req, res){
	res.render("login");
});

app.get("/signup", function(req, res){
	res.render("signup");
});
app.get("/afterlogin", function(req, res){
	res.render("afterlogin");
});

app.post('/afterSignup',function(req,res){

console.log(req.body);

});
app.post('/afterSignin',function(req,res){

console.log(req.body);

});


app.listen(3000, function(req, res){
	console.log("server is running on port 3000");
});