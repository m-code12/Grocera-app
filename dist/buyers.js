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
	
	$("#table_body").append("<tr><td contenteditable='true'>" + id + "</td><td contenteditable='true'>" + name + "</td><td contenteditable='true'>" + number + "</td><td contenteditable='true'>" + code + "</td><td contenteditable='true'>" + token + "</td><td><button>Remove</td></tr>")
	
});

function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("dataTable").deleteRow(i);
}
