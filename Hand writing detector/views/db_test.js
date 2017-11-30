var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	database: 'users'
});

connection.connect(function(err) {
	if (err)
		throw err;
	else
	{
		console.log("connected to database....");
	}
});