const htmlElement = document.documentElement;
const themeSwitch = document.getElementById("theme-switch");
const themeName = document.getElementById("theme-name");

themeSwitch.addEventListener("change", function () {
	if (this.checked) {
		htmlElement.setAttribute("data-theme", "light");
		themeName.innerText = "Light";
	} else {
		htmlElement.setAttribute("data-theme", "dark");
		themeName.innerText = "Dark";
	}
});
