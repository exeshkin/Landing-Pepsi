function imgSlider(anything) {
	document.querySelector('.pepsi').src = anything;
}

function changeBgColor(color) {
	const sec = document.querySelector('.sec');
	sec.style.background = color;
}

function menuToggle() {
	const toggleMenu = document.querySelector('.toggle-menu');
	const navigation = document.querySelector('.nav');
	toggleMenu.classList.toggle('active');
	navigation.classList.toggle('active');
}