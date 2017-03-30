//Challenge #1

var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var btn1txt = document.getElementById("button1text");
var btn2txt = document.getElementById("button2text");

function challenge1() {
button1.addEventListener("click", function(event){
	btn1txt.innerHTML = "I'm right";
	btn2txt.innerHTML = "";
});

button2.addEventListener("click", function(event){
	btn2txt.innerHTML = "No, I'm right";
	btn1txt.innerHTML = "";
});

}
 challenge1();

//Challenge #2
var warning = document.getElementById("warning");


warning.addEventListener("mouseover", function(event){
		alert("Hey, I told you not ot hover over me!");
});