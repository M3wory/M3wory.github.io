var themeTheme = document.getElementById("theme");
if (localStorage.getItem('thema') == 'dark') {
 themeTheme.href = "css/dark-theme.css";
} else{
 themeTheme.href = "css/light-theme.css";
}
function checkbo() {
var switchMode;
switchMode=document.getElementById("modeCheck");
	if (switchMode.checked) {
		themeTheme.href = "css/dark-theme.css";
		localStorage.setItem('thema', 'dark');
	}
	else {
		themeTheme.href = "css/light-theme.css";
		localStorage.setItem('thema', 'light');
	}
}
