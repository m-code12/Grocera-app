const preObject = document.getElementById('object');

var rootRef = firebase.database().ref().child("users");
console.log("Buyers Details :");
rootRef.on("child_added", snap => {

	var name = snap.child("name").val();
	console.log(snap.val());
	var id = snap.child("id").val();
	var token = snap.child("messagingToken").val();
	var phone = snap.child("phone").val();
	var code = snap.child("pinCode").val();
	
	//$("#table_body").append("<tr><td contenteditable='true'>" + id + "</td><td contenteditable='true'>" + name + "</td><td contenteditable='true'>" + phone + "</td><td contenteditable='true'>" + code + "</td><td contenteditable='true'>" + token + "</td><td><button onclick='deleteRow(this)'>Remove</button></td></tr>")
	$('#table_body').append('<tr><td contenteditable="true" >' + id + '</td><td contenteditable="true" id="name">' + name + '</td><td contenteditable="true" id="phone">' + phone + '</td><td contenteditable="true">' + code + '</td><td contenteditable="true" id="token">' + token + '</td><td><button onclick=deletebuyer("' + snap.key + '") class="btn btn-outline-danger" ><b>Remove</b></button></td><td><button onclick=editbuyer("' + snap.key + '") class="btn btn-outline-success" ><b>edit</b></button></td></tr>')
});



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

function editbuyer(key) {
	$('#tryModal').modal('show');
	$("#save-btn").click(function() {
        var name1 = document.getElementById("name1").value;
        
	
		var phone1 = document.getElementById("phone1").value;

     firebase.database().ref('users/' + key).update({
           name: name1,
           
		
		   phone:phone1
		});
	
        window.alert("Your Changes have been done! \n Refresh the page to see the changes");
        window.location.reload();

	});
}



