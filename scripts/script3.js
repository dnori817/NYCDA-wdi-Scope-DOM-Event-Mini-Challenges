// Challenge 3

var key = document.getElementById("key");

addEventListener("keypress", function(event) {
	key.innerHTML = String.fromCharCode(event.keyCode);
});
