var link = document.querySelector(".btn-serch");
var form = document.querySelector(".popup-form");
var dateArr = form.querySelector("[name=arrival]");
var dateText = form.querySelector("[name=depart]");

form.classList.add("form-none");


link.addEventListener("click", function (evt) {
	evt.preventDefault();
	console.log("Click to the button");
	form.classList.remove("form-none");
	dateArr.focus();
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27 ) {
		if(!form.classList.contains("form-none")) {
			form.classList.add("form-none");
			console.log("click");
		}
	}
});