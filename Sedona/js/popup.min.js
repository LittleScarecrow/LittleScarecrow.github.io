var linkSearchHotel = document.querySelector(".button-hotel-search");
var popup = document.querySelector(".form-search");
var arrival = document.querySelector(".arrival");
var departure = document.querySelector(".departure");
var children = document.querySelector(".children");
var adults = document.querySelector(".adults");

linkSearchHotel.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("form-on");
});

popup.addEventListener("submit", function(evt) {
	if (!arrival.value || !departure.value || !children.value || !adults.value) {
	  evt.preventDefault();
	  console.log("Необходимо ввести дату заезда, дату выезда, кол-во детей и взрослых");
	}
});