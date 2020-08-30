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

	
	//$("#table_body").append("<tr><td contenteditable='true'>" + name + "</td><td contenteditable='true'>" + email + "</td><td contenteditable='true'>" + number + "</td><td contenteditable='true'>" + address + "</td><td contenteditable='true'>" + code +
	//	"</td><td contenteditable='true'>" + fee + "</td><td contenteditable='true'>" + dis + "</td><td contenteditable='true'>" + rating + "</td><td contenteditable='true'>" + status + "</td><td><button>Remove</td></tr>")
	
	$('#table_body').append('<tr><td contenteditable="true">' + name + '</td><td contenteditable="true">' + email + '</td><td contenteditable="true">' + number + '</td><td contenteditable="true">' + address + '</td><td contenteditable="true">' + code + '</td><td contenteditable="true">' + fee + '</td><td contenteditable="true">' + dis + '</td><td contenteditable="true">' + rating + '</td><td contenteditable="true">' + status + '</td><td><button class="btn btn-outline-danger" onclick=products("' + snap.key + '")><b>products</b></button></td></tr>')
	
});
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