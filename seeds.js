var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
	{
		name: "Cloud's Rest", 
		image: "http://3.bp.blogspot.com/-2jBEgLOPTh4/U7Vw8CCZIZI/AAAAAAAAAnU/P-x2_XmrvCk/s1600/391163_640127392670577_1800293785_n.jpg",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vehicula, sodales metus id, suscipit augue. Praesent fringilla nulla quis fringilla tempor. Curabitur nulla leo, mattis vel lacus ac, ultricies laoreet magna. Ut varius vitae tellus eget convallis. Maecenas mollis commodo orci, quis pellentesque arcu tempus vel. Etiam feugiat justo lorem, vitae porta massa consectetur nec. Curabitur eget mollis mi, vel ullamcorper lacus. Suspendisse posuere leo magna, ut porta massa finibus vitae. Nam fringilla non nisl rhoncus tincidunt." 
	},
	{
		name: "Desert's Mesa", 
		image: "http://blog.lojadecamping.com.br/wp-content/uploads/caaaam.jpg",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vehicula, sodales metus id, suscipit augue. Praesent fringilla nulla quis fringilla tempor. Curabitur nulla leo, mattis vel lacus ac, ultricies laoreet magna. Ut varius vitae tellus eget convallis. Maecenas mollis commodo orci, quis pellentesque arcu tempus vel. Etiam feugiat justo lorem, vitae porta massa consectetur nec. Curabitur eget mollis mi, vel ullamcorper lacus. Suspendisse posuere leo magna, ut porta massa finibus vitae. Nam fringilla non nisl rhoncus tincidunt." 
	},
	{
		name: "Canyon floor ", 
		image: "https://www.visitnc.com/resimg.php/imgcrop/2/52908/image/800/448/KerrCamping.jpg",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vehicula, sodales metus id, suscipit augue. Praesent fringilla nulla quis fringilla tempor. Curabitur nulla leo, mattis vel lacus ac, ultricies laoreet magna. Ut varius vitae tellus eget convallis. Maecenas mollis commodo orci, quis pellentesque arcu tempus vel. Etiam feugiat justo lorem, vitae porta massa consectetur nec. Curabitur eget mollis mi, vel ullamcorper lacus. Suspendisse posuere leo magna, ut porta massa finibus vitae. Nam fringilla non nisl rhoncus tincidunt." 
	}
]

function seedDB(){
	//Remove all campgrounds
	Campground.remove({}, function(err){
		// if(err) {
		// 	console.log(err);
		// }
		// console.log("removed campgrounds!");
		// //add a few campgrounds
		// data.forEach(function(seed){
		// 	Campground.create(seed, function(err, campground){
		// 		if(err){
		// 			console.log(err)
		// 		} else {
		// 			console.log("added a campground");
		// 			//create a comment
		// 			Comment.create(
		// 				{
		// 					text: "This place is great, but I wish there was internet",
		// 					author: "Homer"
		// 			}, function(err, comment){
		// 				if(err){
		// 					console.log(err); 
		// 				} else {
		// 					campground.comments.push(comment);
		// 					campground.save();
		// 					console.log("Created new comment");
		// 				}
		// 			});
		// 		}
		// 	});
		// });
	});
}

module.exports = seedDB;
