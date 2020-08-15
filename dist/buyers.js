const preObject = document.getElementById('object');

var rootRef = firebase.database().ref().child("users");
console.log("Buyers Details :");
rootRef.on("child_added", snap => {

	var name = snap.child("name").val();
	console.log(snap.val());
	var id = snap.child("id").val();
	var token = snap.child("messagingToken").val();
	var number = snap.child("phone").val();
	var code = snap.child("pinCode").val();
	
	$("#table_body").append("<tr><td>" + id + "</td><td>" + name + "</td><td>" + number + "</td><td>" + code + "</td><td>" + token + "</td></tr>")
	
});
