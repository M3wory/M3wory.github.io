if (typeof window !== 'undefined') {
  if (LocalStorage.getItem('theme') == 'dark') {
      theme.href = "css/dark-theme.css";
  }
  if (LocalStorage.getItem('theme') == 'light') {
      theme.href = "css/light-theme.css";
  }
}
function checkbo() {
var switchMode;
switchMode=document.getElementById("modeCheck");
var theme = document.getElementById("theme");
	if (switchMode.checked) {
		theme.href = "css/dark-theme.css";
		localStorage.setItem('theme', 'dark');
	}
	else {
		theme.href = "css/light-theme.css";
		localStorage.setItem('theme', 'light');
	}
}