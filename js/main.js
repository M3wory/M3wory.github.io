if (localStorage.getItem('thema') == 'dark') {
 themeTheme.href = "css/dark-theme.css";
} else{
 themeTheme.href = "css/light-theme.css";
}
function checkbo() {
var switchMode;
switchMode=document.getElementById("modeCheck");
var themeTheme = document.getElementById("theme");
	if (switchMode.checked) {
		themeTheme.href = "css/dark-theme.css";
		localStorage.setItem('thema', 'dark');
	}
	else {
		themeTheme.href = "css/light-theme.css";
		localStorage.setItem('thema', 'light');
	}
}
alert(localStorage.getItem('thema'));
