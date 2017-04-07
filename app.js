var express = require("express");
var mysql = require('mysql');
var connection = mysql.createConnection({
	host : 'localhost',
	user : 'ahn',
	password : 'bible1234',
	database : 'timecapsule'
});
var app = express();

connection.connect(function(err){
	if(!err){
		console.log("Database is connected\n\n");
	}else{
		console.log("Error connecting database\n\n");
	}
});

app.get("/", function(request, response){
	connection.query('SELECT * from user', function(err, rows, fields){
		//connection.end();
		if(!err){
			response.send(rows);
			console.log('The solution is: ', rows);
		}else{
			console.log('Error while performing Query');
		}
	});
});

app.listen(3000);