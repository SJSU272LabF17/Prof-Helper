var ejs = require("ejs");
var mysql = require('./mysql');
var bcrypt = require('bcrypt');
const saltRounds = 10;
const nodemailer= require('nodemailer');

function signin(req,res) {
if (!req.session.username){
	ejs.renderFile('./views/signin.ejs',function(err, result) {
	   // render on success
	   if (!err) {
	            res.end(result);
	   }
	   // render or error
	   else {
	            res.end('An error occurred');
	            console.log(err);
	   }
   });
 }
 else{
exports.redirectToHomepage(req,res);
 }
}




	exports.signout = function(req,res)
	{
		req.session.destroy();
		console.log('Session destroyed');
		res.redirect('/');
	};

	exports.uploadFile = function(req,res)
	{
		console.log(req.files);
	   if(req.files.upfile){
	      var file = req.files.upfile,
	      original_name = file.name,
	      file_type = file.mimetype;
	      psuedo_name = (new Date).getTime();
	      var uploadpath = __dirname + '/../uploads/' + psuedo_name;
	     file.mv(uploadpath,function(err){
	      if(err){
	        console.log("File Upload Failed",original_name,err);
	        res.send("Error Occured!")
	      }
	      else {
	        console.log("File Uploaded",original_name);
	        var sql = "INSERT INTO files (fname, psuedo_name, user_id, starred) VALUES ("+"'"+original_name+"',"+"'"+psuedo_name+"',"+req.session.user_id+","+0+")";
	        console.log(sql);
	        mysql.fetchData(function (err, results) {
	          if(err){
	            res.send("error occurred");
	          }
	          else{
	            res.send("file uploaded");
	          }
	        },sql);
	      }
	    });
	  }
	  else {
	    res.send("No File selected !");
	    res.end();
	  }
	};



function signup(req,res) {

	ejs.renderFile('./views/signup.ejs',function(err, result) {
	   // render on success
	   if (!err) {
	            res.end(result);
	   }
	   // render or error
	   else {
	            res.end('An error occurred');
	            console.log(err);
	   }
   });
}

function afterSignUp(req,res)
{
      var password1;
			var name1 =req.param('inputUsername');
			var email1 = req.param('emailaddress');
			bcrypt.hash(req.param("inputPassword"), saltRounds, function(err, hash) {
				console.log("inside bcrypthash");
 			password1=hash;
 			console.log("password after hash"+password1);


			var sql = "INSERT INTO users1 (name, username, password) VALUES ("+"'"+name1+"',"+"'"+email1+"',"+"'"+password1 +"')";
		    mysql.fetchData(function (err, results) {
		    if (err){
				console.log("Invalid signup");
				ejs.renderFile('./views/failSignUp.ejs',function(err, result) {
			        // render on success
			        if (!err) {
			            res.end(result);
			        }
			        // render or error
			        else {
			            res.end('An error occurred');
			            console.log(err);
			        }
			    });
			}
		    else{
		    	console.log("Record inserted");
				console.log("valid Signup");
				console.log("Results "+JSON.stringify(results));
				//pull data again from server to show values inserted.
               // mysql.fetchData(function (err, results) {
               // var results="select * from users1 where 'username='"+req.param("inputUsername")

				ejs.renderFile('./views/successSignUp.ejs', { data: req } , function(err, result) {
			        // render on success
			        if (!err) {
			            res.end(result);
			        }
			        // render or error
			        else {
			            res.end('An error occurred');
			            console.log(err);
			        }
			    });
		 }},sql);
		 		});

		}

function sharing(req, res){
	var receiver=req.body.sharemail;
	var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
        user: 'anshit@address.com',
        pass: 'anshit123'
    }
});

const mailOptions = {
  from: 'anshit@gmail.com',
  to: receiver,
  subject: 'Dropbox file ready to be downloaded',
  html: '<p>A file is sahred with you</p>'
};
transporter.sendMail(mailOptions, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log(info);
});

}




function afterSignIn(req,res)
{
	// check user already exists
	var json_responses;
  var password1;
 if (!req.session.username)
   {
	var getUser="select * from users1 where username='"+req.param("inputUsername")+"'";
	console.log("Query is:"+getUser);
	mysql.fetchData(function(err,results){
		if(err){
			throw err;
		}
		else
		{
			if(results.length > 0){
				bcrypt.compare(req.param("inputPassword"), results[0].password, function(err, bcryptRes) {
    			if (bcryptRes) {
    				req.session.username = results[0].username;
						req.session.user_id = results[0].id;
						exports.redirectToHomepage(req,res);
    			}
				});
				// console.log("Result afterSignIn "+results[0].username);
				// req.session.username = results[0].username;
				// 			console.log("Session initialized");
				// 			json_responses = {"statusCode" : 200};
				// 			//res.send(json_responses);
				// 			exports.redirectToHomepage(req,res);
						}
						else
						{
							// json_responses = {"statusCode" : 401};
							// res.send(json_responses);
							res.redirect('/');
						}
			}
},getUser);
}
else {
	exports.redirectToHomepage(req,res);
}
}



exports.redirectToHomepage = function(req,res)
{
	//Checks before redirecting whether the session is valid
	if(req.session.username)
	{
		//Set these headers to notify the browser not to maintain any cache for the page being loaded
		res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
		var userid = req.session.user_id;
		var getfiles_q = 'select * from files where user_id="'+userid+'"';
		var toview= {} // send to view
		toview.username = req.session.username
		mysql.fetchData(function(err,rows){
			toview.files = rows // set the rows
			res.render("successLogin.ejs",toview);
		},getfiles_q);
	}
	else
	{
		res.redirect('/');
	}
};




function getAllUsers(req,res)
{
	var getAllUsers = "select * from users";
	console.log("Query is:"+getAllUsers);

	mysql.fetchData(function(err,results){
		if(err){
			throw err;
		}
		else
		{
			if(results.length > 0){

				var rows = results;
				var jsonString = JSON.stringify(results);
				var jsonParse = JSON.parse(jsonString);

				console.log("Results Type: "+(typeof results));
				console.log("Result Element Type:"+(typeof rows[0].emailid));
				console.log("Results Stringify Type:"+(typeof jsonString));
				console.log("Results Parse Type:"+(typeof jsString));

				console.log("Results: "+(results));
				console.log("Result Element:"+(rows[0].emailid));
				console.log("Results Stringify:"+(jsonString));
				console.log("Results Parse:"+(jsonParse));

				ejs.renderFile('./views/successLogin.ejs',{data:jsonParse},function(err, result) {
			        // render on success
			        if (!err) {
			            res.end(result);
			        }
			        // render or error
			        else {
			            res.end('An error occurred');
			            console.log(err);
			        }
			    });
			}
			else {

				console.log("No users found in database");
				ejs.renderFile('./views/failLogin.ejs',function(err, result) {
			        // render on success
			        if (!err) {
			            res.end(result);
			        }
			        // render or error
			        else {
			            res.end('An error occurred');
			            console.log(err);
			        }
			    });
			}
		}
	},getAllUsers);
}

exports.signin=signin;
//exports.signout=signout;
exports.signup=signup;
exports.afterSignIn=afterSignIn;
exports.afterSignUp=afterSignUp;
exports.getAllUsers=getAllUsers;
exports.sharing=sharing;
