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
	
	//$("#table_body").append("<tr><td contenteditable='true'>" + id + "</td><td contenteditable='true'>" + name + "</td><td contenteditable='true'>" + number + "</td><td contenteditable='true'>" + code + "</td><td contenteditable='true'>" + token + "</td><td><button onclick='deleteRow(this)'>Remove</button></td></tr>")
	$('#table_body').append('<tr><td contenteditable="true">' + id + '</td><td contenteditable="true">' + name + '</td><td contenteditable="true">' + number + '</td><td contenteditable="true">' + code + '</td><td contenteditable="true">' + token + '</td><td><button onclick=deletebuyer("' + snap.key + '") class="btn btn-outline-danger" ><b>Remove</b></button></td></tr>')
});

/*$(document).ready(function(){

 $("#tbUser").on('click','.btnDelete',function(){
       $(this).closest('tr').remove();
     });

});*/

function deletebuyer(key) {
var deleteRef = firebase.database().ref().child("users").child(key);
firebase.database().ref('users/' + key).on('value', snapshot => {
	name = snapshot.val().name;
	id = snapshot.val().id;
token = snapshot.val().token;
	data = {
		name,
	id,
		token
	};
	
});

return deleteRef.remove()
	.then(function() {
		window.alert("Deleted successfully\n Refresh The Page to see the changes");
		window.location.reload();
	})
	.catch(function() {
		console.log("error occured");
	});

}
function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("dataTable").deleteRow(i);
}

