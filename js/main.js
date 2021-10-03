var themeTheme = document.getElementById("theme");
if (localStorage.getItem('thema') == 'dark') {
 themeTheme.href = "css/dark-theme.css";
} else{
 themeTheme.href = "css/light-theme.css";
}
var themeModeInteger = Number(localStorage.getItem('themeMode'));
if (themeModeInteger == 0){
    themeModeInteger = 1
}
function themechange() {
	if (themeModeInteger == 1) {
		themeTheme.href = "css/dark-theme.css";
		localStorage.setItem('thema', 'dark');
		themeModeInteger *= -1;
		localStorage.setItem('themeMode', themeModeInteger);
	}
	else {
		themeTheme.href = "css/light-theme.css";
		localStorage.setItem('thema', 'light');
		themeModeInteger *= -1;
		localStorage.setItem('themeMode', themeModeInteger);
	}
}
