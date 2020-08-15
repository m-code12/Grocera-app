const preObject = document.getElementById('object');

var rootRef = firebase.database().ref().child("shopDetails");
console.log("Shop Users Details :");
rootRef.on("child_added", snap => {

	var name = snap.child("name").val();
	console.log(snap.val());
	var email = snap.child("email").val();
	var address = snap.child("address").val();
	var number = snap.child("phoneNumber").val();
	var dis = snap.child("discount").val();
	var fee = snap.child("deliveryFee").val();
	var code = snap.child("pinCode").val();
	var rating = snap.child("rating").val();
	var status = snap.child("status").val();

	
	$("#table_body").append("<tr><td>" + name + "</td><td>" + email + "</td><td>" + number + "</td><td>" + address + "</td><td>" + code +
		"</td><td>" + fee + "</td><td>" + dis + "</td><td>" + rating + "</td><td>" + status + "</td></tr>")
	
});
