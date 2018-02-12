var link = document.querySelector(".btn-serch");
var form = document.querySelector(".popup-form");
var dateArr = form.querySelector("[name=arrival]");
var datDep = form.querySelector("[name=depart]");

form.classList.add("form-none");

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	if (form.classList.contains("form-none")) {
		form.classList.remove("modal-error");
		form.classList.remove("form-none");
		form.classList.add("modal-show");
		dateArr.focus();
	} else {
		form.classList.add("form-none");
	}
});

form.addEventListener("submit", function(evt) {
	if (!dateArr.value || !datDep.value) {
			evt.preventDefault();
			form.classList.add("modal-error");
			// console.log("error");
		}
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27 ) {
		if(!form.classList.contains("form-none")) {
			form.classList.add("form-none");
		}
	}
});

