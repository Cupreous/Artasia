window.onload = function(){
	byU = document.getElementById("ByU")
	byU.onclick = function(event) { toggleDropdown("dropdownByU");};
	console.log("loaded");
}

function toggleDropdown(query){
	target = document.getElementById(query)
	var display = (target.style.display);
	console.log(display);
	if (display == "none") {
		target.style.display = "block";
	}else {
		target.style.display = 'none'
	}
}
