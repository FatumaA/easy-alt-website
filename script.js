const htmlElement = document.documentElement;
const themeSwitch = document.getElementById("theme-switch");
const themeSwitchMobile = document.getElementById("theme-switch-mobile");
const themeName = document.getElementById("theme-name");
const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");

themeSwitch.addEventListener("change", function () {
	if (this.checked) {
		htmlElement.setAttribute("data-theme", "light");
		themeName.innerText = "Light";
	} else {
		htmlElement.setAttribute("data-theme", "dark");
		themeName.innerText = "Dark";
	}
});

themeSwitchMobile.addEventListener("change", function () {
	if (this.checked) {
		htmlElement.setAttribute("data-theme", "light");
		themeName.innerText = "Light";
	} else {
		htmlElement.setAttribute("data-theme", "dark");
		themeName.innerText = "Dark";
	}
});

menuIcon.addEventListener("click", function () {
	this.classList.toggle("active");
	navLinks.classList.toggle("show");
});
