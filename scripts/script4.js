var form = document.getElementById("form");
var userName = document.getElementById("user");
var email = document.getElementById("email");
var pword = document.getElementById("password");
var welcome = document.getElementById("welcome");
var goodPass = "12345678";


form.addEventListener("submit", function(event) {
  // Given a string, return if the string contains any numbers or not
	function hasNumbers(str) {
		return !!str.match(/\d+/);
	}
	if (pword.value === goodPass && hasNumbers(userName.value) === true) {
		welcome.innerHTML = "WELCOME " + userName.value + "!";
		event.preventDefault();
	 }
	else {
		alert("Incorrect");
	}
});
