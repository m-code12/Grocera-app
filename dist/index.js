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

	
	$("#table_body").append("<tr><td contenteditable='true'>" + name + "</td><td contenteditable='true'>" + email + "</td><td contenteditable='true'>" + number + "</td><td contenteditable='true'>" + address + "</td><td contenteditable='true'>" + code +
		"</td><td contenteditable='true'>" + fee + "</td><td contenteditable='true'>" + dis + "</td><td contenteditable='true'>" + rating + "</td><td contenteditable='true'>" + status + "</td><td><button>Remove</td></tr>")
	
});

function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("dataTable").deleteRow(i);
}
