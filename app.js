const hideWelcome = document.getElementById("header")
// const header = document.getElementById("header");
const key = document.getElementById("keyDisplay");
const code = document.getElementById("codeDisplay");
const which = document.getElementById("whichDisplay");
const pressedBtn =document.getElementById("number");
const bigNum = document.getElementById("whichDisplayBig");

pressedBtn.style.display="none";

document.addEventListener("keydown" ,(e) => {
	hideWelcome.style.display = "none";
	pressedBtn.style.display="block";
	key.textContent = e.key;
	code.textContent= e.code;
    which.textContent= e.which;
	bigNum.textContent= e.which;

});