var data = require("../data.json");

exports.addFriend = function(req, res) {    
	var name = req.query.name;
	var description = req.query.description;
	var imgURL = "http://lorempixel.com/400/400/people";
	var newFriend = {"name":name, "description":description, "imageURL":imgURL};
	data.friends.push(newFriend);
//	console.log(name, description);
	res.render('index', data);
 };