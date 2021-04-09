function card_number(){
	document.getElementById("card_number").value = document.getElementById("number").value;
	let k = String(document.getElementById("number").value);
	if (k.includes("5168")){
		let e = document.getElementById("discover");
		e.innerHTML = "MASTERCARD";
	}
	else if(k.includes("4149")){
		let e = document.getElementById("discover");
		e.innerHTML = "VISA";
	}
	else{
		let e = document.getElementById("discover");
		e.innerHTML = "DISCOVER";
	}
}
function user_name(){
	document.getElementById("card_holder").value = document.getElementById("name").value;
}
function year(){
	document.getElementById("year").value = document.getElementById("select_year").value;
}
function month(){
	let month = document.getElementById("select_month").value;
	let  k = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	for(i of k){
		if (i == month){
			document.getElementById("month").value = (k.indexOf(i)+1) + " /";
			break;
		}
	}
}

