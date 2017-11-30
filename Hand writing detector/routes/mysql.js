var ejs= require('ejs');
var mysql = require('mysql');

//Put your mysql configuration settings - user, password, database and port

	var pool = mysql.createPool({
	    host     : 'localhost',
	    user     : 'root',
	    database : 'users',
	    port	 : 3306,
			connectionLimit : 100
	});

	// var connection = mysql.createConnection({
	// 		host     : 'localhost',
	// 		user     : 'root',
	// 		database : 'users',
	// 		port	 : 3306,
	// });



function fetchData(callback,sqlQuery){

	console.log("\nSQL Query::"+sqlQuery);

	pool.getConnection(function(err, connection) {
        if (err) {
            connection.release();
            res.json({ "code": 100, "status": "Error in connection database" });
            return;
        }

	connection.query(sqlQuery, function(err, rows, fields) {
		if(err){

			console.log("ERROR: " + err.message);
		}
		else
		{	// return err or result
			console.log("DB Results:"+rows);
			callback(null, rows);
		}
	});
	console.log("\nConnection closed..");
	connection.release();
});
}


function saveData(callback,sqlQuery){

	console.log("\nSQL Query::"+sqlQuery);
	pool.getConnection(function(err, connection) {
				if (err) {
						connection.release();
						res.json({ "code": 100, "status": "Error in connection database" });
						return;
				}


	connection.query(sqlQuery, function(err, rows, fields) {
		if(err){

			console.log("ERROR: " + err.message);
		}
		else
		{	// return err or result
			console.log("DB Results:"+rows);
			callback(null, rows);
		}
	});
	console.log("\nConnection closed..");
	connection.release();
});
}
exports.fetchData=fetchData;
exports.saveData= saveData;
