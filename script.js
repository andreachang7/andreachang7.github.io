var anythingIWant = document.body;
var isDark = false;

var darkModeButton = document.getElementById("buttonDarkMode");
darkModeButton.addEventListener("click", changeToDarkMode);

function changeToDarkMode() {  
  if(isDark === true) {
    darkModeButton.textContent = "Dark Mode";
    anythingIWant.style.background = "white";
    anythingIWant.style.color = "black";
    isDark = false;
    console.log("dark mode is off");
    
  } else if(isDark === false) {
    darkModeButton.textContent = "Light Mode";
    anythingIWant.style.background = "black";
    anythingIWant.style.color = "white";
    isDark = true;
    console.log("dark mode is on");
  }
}