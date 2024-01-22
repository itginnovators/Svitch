$(".switcher-btn").on("click", function () {
	$(".switcher-wrapper").toggleClass("switcher-toggled")
});

$(".close-switcher").on("click", function () {
	$(".switcher-wrapper").removeClass("switcher-toggled")
});

document.getElementById('themecolor1').addEventListener('click', () => {
	document.documentElement.style.setProperty('--main-bg-color', '#0727D7');
	document.documentElement.style.setProperty('--main-hover-color', '#213edb');
	Cookies.set('theme', 'blue');
});
document.getElementById('themecolor2').addEventListener('click', () => {
	document.documentElement.style.setProperty('--main-bg-color', '#23282c');
	document.documentElement.style.setProperty('--main-hover-color', '#404142');
	Cookies.set('theme', 'dark');
});
document.getElementById('themecolor3').addEventListener('click', () => {
	document.documentElement.style.setProperty('--main-bg-color', '#e10a1f');
	document.documentElement.style.setProperty('--main-hover-color', '#e62e40');
	Cookies.set('theme', 'red');
});
document.getElementById('themecolor4').addEventListener('click', () => {
	document.documentElement.style.setProperty('--main-bg-color', '#157d4c');
	document.documentElement.style.setProperty('--main-hover-color', '#1ea666');
	Cookies.set('theme', 'green');
});
document.getElementById('themecolor5').addEventListener('click', () => {
	document.documentElement.style.setProperty('--main-bg-color', '#673ab7');
	document.documentElement.style.setProperty('--main-hover-color', '#7d54c4');
	Cookies.set('theme', 'purple');
});
document.getElementById('themecolor6').addEventListener('click', () => {
	document.documentElement.style.setProperty('--main-bg-color', '#795548');
	document.documentElement.style.setProperty('--main-hover-color', '#967366');
	Cookies.set('theme', 'brown');
});
document.getElementById('themecolor7').addEventListener('click', () => {
	document.documentElement.style.setProperty('--main-bg-color', '#D3094E');
	document.documentElement.style.setProperty('--main-hover-color', '#d62460');
	Cookies.set('theme', 'pink');
});
document.getElementById('themecolor8').addEventListener('click', () => {
	document.documentElement.style.setProperty('--main-bg-color', '#ff9800');
	document.documentElement.style.setProperty('--main-hover-color', '#f7a225');
	Cookies.set('theme', 'orange');
});
document.getElementById('themecolor9').addEventListener('click', () => {
	document.documentElement.style.setProperty('--main-bg-color', '#2196f3');
	document.documentElement.style.setProperty('--main-hover-color', '#48abfa');
	Cookies.set('theme', 'skyblue');
});
document.getElementById('themecolor10').addEventListener('click', () => {
	document.documentElement.style.setProperty('--main-bg-color', '#ffd60a');
	document.documentElement.style.setProperty('--main-hover-color', '#fad72a');
	Cookies.set('theme', 'yellow');
});
document.getElementById('themecolor11').addEventListener('click', () => {
	document.documentElement.style.setProperty('--main-bg-color', '#868b20');
	document.documentElement.style.setProperty('--main-hover-color', '#a8ad34');
	Cookies.set('theme', 'masturd');
});
document.getElementById('themecolor12').addEventListener('click', () => {
	document.documentElement.style.setProperty('--main-bg-color', '#283c71');
	document.documentElement.style.setProperty('--main-hover-color', '#3855a2');
	Cookies.set('theme', 'default');
});


// Load theme on all pages

window.addEventListener('load', () => {
	const storedTheme = Cookies.get('theme');
	if (storedTheme) {
		if (storedTheme === 'blue') {
			document.documentElement.style.setProperty('--main-bg-color', '#0727D7');
			document.documentElement.style.setProperty('--main-hover-color', '#213edb');
		} else if (storedTheme === 'dark') {
			document.documentElement.style.setProperty('--main-bg-color', '#23282c');
			document.documentElement.style.setProperty('--main-hover-color', '#404142');
		} else if (storedTheme === 'red') {
			document.documentElement.style.setProperty('--main-bg-color', '#e10a1f');
			document.documentElement.style.setProperty('--main-hover-color', '#e62e40');
		} else if (storedTheme === 'green') {
			document.documentElement.style.setProperty('--main-bg-color', '#157d4c');
			document.documentElement.style.setProperty('--main-hover-color', '#1ea666');
		} else if (storedTheme === 'purple') {
			document.documentElement.style.setProperty('--main-bg-color', '#673ab7');
			document.documentElement.style.setProperty('--main-hover-color', '#7d54c4');
		} else if (storedTheme === 'brown') {
			document.documentElement.style.setProperty('--main-bg-color', '#795548');
			document.documentElement.style.setProperty('--main-hover-color', '#967366');
		} else if (storedTheme === 'pink') {
			document.documentElement.style.setProperty('--main-bg-color', '#D3094E');
			document.documentElement.style.setProperty('--main-hover-color', '#d62460');
		} else if (storedTheme === 'orange') {
			document.documentElement.style.setProperty('--main-bg-color', '#ff9800');
			document.documentElement.style.setProperty('--main-hover-color', '#f7a225');
		} else if (storedTheme === 'skyblue') {
			document.documentElement.style.setProperty('--main-bg-color', '#2196f3');
			document.documentElement.style.setProperty('--main-hover-color', '#48abfa');
		} else if (storedTheme === 'yellow') {
			document.documentElement.style.setProperty('--main-bg-color', '#ffd60a');
			document.documentElement.style.setProperty('--main-hover-color', '#fad72a');
		} else if (storedTheme === 'masturd') {
			document.documentElement.style.setProperty('--main-bg-color', '#868b20');
			document.documentElement.style.setProperty('--main-hover-color', '#a8ad34');
		} else if (storedTheme === 'default') {
			document.documentElement.style.setProperty('--main-bg-color', '#283c71');
			document.documentElement.style.setProperty('--main-hover-color', '#3855a2');
		}

	}
});


// Theme toggle

// $(".theme-toggle").click(function () {
// 	if ($(".theme-toggle").is(":checked")) {
// 		$("body").css("background-color", "#1E1E1E");
// 		$(".toggle-switch").css({
// 			"background-position": "5% 100%",
// 			"box-shadow": "0 0 15px 10px hsl(0,0,0,0.1) inset"
// 		});
// 		document.documentElement.style.setProperty('--main-black-color', '#fff');
// 		document.documentElement.style.setProperty('--main-input-color', '#383838');
// 	} else {
// 		$("body").css("background-color", "#fff");
// 		$(".toggle-switch").css({
// 			"background-position": "100% 100%",
// 			"box-shadow": "0 0 15px 10px hsl(0,0,0,0.1) inset"
// 		});
// 		document.documentElement.style.setProperty('--main-black-color', '#000');
// 		document.documentElement.style.setProperty('--main-input-color', '#f0f1f7');
// 	}
// });

