var express = require('express');
var request = require("request");
var session = require('express-session');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(session({
    secret: 'someRandomValue',
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 30},
    resave: true,
    saveUninitialized: true
}));

app.get('/', function(req, res) {
	res.send('Hello World - Rehana');
});

app.get('/authors', function(req, res) {
	var user_id = [];
	var user_name = new Array();
	var posts = new Array();
	request({
		url: "https://jsonplaceholder.typicode.com/users",
		json: true
	}, function (error, response, body) {

		if (!error && response.statusCode === 200){
			for(var i=0; i<body.length; i++){
                      var id=body[i].id;
                      var name=body[i].name;
				user_id.push(id);
				user_name.push(name);
			}
		}
	})
	request({
		url: "https://jsonplaceholder.typicode.com/posts",
		json: true
	}, function (error, response, body) {

		if (!error && response.statusCode === 200){
			for(var i=0; i<user_id.length; i++){
				posts.push(body.filter(value => value.userId === user_id[i]).length);
			}
		var result = [];
		for(var i=0; i<user_id.length; i++){
			result.push({id: user_id[i], name: user_name[i], posts: posts[i]});
		}
		res.send(result);
	}
	})
});

app.get('/setcookie', function(req, res) {
	if (req.session && req.session.auth && req.session.auth.name && req.session.auth.age) {
		//already set 
		console.log("already set");      
   	} else {
		//not set
		console.log("not set");
		//set the session
		req.session.auth = {name: "Rehana", age: "22"};
   	}
	res.send('Cookie Set');
});

app.get('/getcookies', function(req, res) {
	if (req.session && req.session.auth && req.session.auth.name && req.session.auth.age) {
		res.send("Name: " + req.session.auth.name + " Age: "+ req.session.auth.age);      
   	} else {
		//not set
		res.send("Not Set");
   	}
});

app.get('/robots.txt', function(req, res) {
	res.send("Acess Denied");
});

app.get('/html', function (req, res) {
  res.sendFile(path.join(__dirname, 'html.html'));
});

app.get('/input', function (req, res) {
  res.sendFile(path.join(__dirname, 'input.html'));
});

app.post('/end_point', function (req, res) {
	res.send("ok");
	console.log("Input Recieved: " + JSON.stringify(req.body));
});

app.listen(8080, function() {
  console.log('Listening on port 8080!');
});