const preObject = document.getElementById('object');

var rootRef = firebase.database().ref().child("shopDetails");
console.log("Shop Users Details :");
rootRef.on("child_added", snap => {

	var name = snap.child("name").val();
	console.log(snap.val());
	var email = snap.child("email").val();
	var address = snap.child("address").val();
	var phone = snap.child("phoneNumber").val();
	var dis = snap.child("discount").val();
	var fee = snap.child("deliveryFee").val();
	var code = snap.child("pinCode").val();
	var rating = snap.child("rating").val();
	var status = snap.child("status").val();

	
	//$("#table_body").append("<tr><td contenteditable='true'>" + name + "</td><td contenteditable='true'>" + email + "</td><td contenteditable='true'>" + number + "</td><td contenteditable='true'>" + address + "</td><td contenteditable='true'>" + code +
	//	"</td><td contenteditable='true'>" + fee + "</td><td contenteditable='true'>" + dis + "</td><td contenteditable='true'>" + rating + "</td><td contenteditable='true'>" + status + "</td><td><button>Remove</td></tr>")
	
	$('#table_body').append('<tr><td contenteditable="true" id="name">' + name + '</td><td contenteditable="true">' + email + '</td><td contenteditable="true" id="phone">' + phone + '</td><td contenteditable="true">' + address + '</td><td contenteditable="true">' + code + '</td><td contenteditable="true">' + fee + '</td><td contenteditable="true">' + dis + '</td><td contenteditable="true">' + rating + '</td><td contenteditable="true">' + status + '</td><td><button class="btn btn-outline-warning" onclick=products("' + snap.key + '")><b>See Details</b></button></td><td><button onclick=deletebuyer("' + snap.key + '") class="btn btn-outline-danger" ><b>Remove</b></button></td><td><button onclick=editbuyer("' + snap.key + '") class="btn btn-outline-success" ><b>edit</b></button></td></tr>')
	
});


function deletebuyer(key) {
var deleteRef = firebase.database().ref().child("shopDetails").child(key);
firebase.database().ref('shopDetails/' + key).on('value', snapshot => {
	name = snapshot.val().name;
	email = snapshot.val().email;
phone = snapshot.val().phone;
	data = {
		name,
	email,
		phone
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
        
		var email1 = document.getElementById("email1").value;
		var phone1 = document.getElementById("phone1").value;

     firebase.database().ref('shopDetails/' + key).update({
           name: name1,
           email:email1,
		
		   phoneNumber:phone1
		});
	
        window.alert("Your Changes have been done! \n Refresh the page to see the changes");
        window.location.reload();

	});
}

function close(){
	$('#dataTable tbody').empty();
}
$(".modal").on("hidden.bs.modal", function(){
    $('#dataTable1 tbody').empty();
});
function products(key){
	var rootRef = firebase.database().ref().child("productDetails");

	rootRef.on("child_added", snap => {
		var shopId = snap.child("shopId").val();
		var name = snap.child("name").val();
	
		var Stock = snap.child("Stock").val();
		var category = snap.child("category").val();
		var stock = snap.child("stock").val();
		var dis = snap.child("discount").val();
		var id = snap.child("id").val();
		var price = snap.child("price").val();
		
		$('#myModal').modal('show');
	if(shopId==key){
	
    
		$('#table_body2').append('<tr><td contenteditable="true">' + name + '</td><td contenteditable="true">' + shopId + '</td><td contenteditable="true">' + Stock + '</td><td contenteditable="true">' + dis + '</td><td contenteditable="true">' + category + '</td><td contenteditable="true">' + stock + '</td><td contenteditable="true">' + price + '</td></tr>')
	}

	});
}
