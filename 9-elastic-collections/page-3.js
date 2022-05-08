function randomColor() {
  var color = '#';
  var colorCode = ['88FDFC','3BF2BC','FB80B4','EF5E13','C4DF20', 'E13127', 'FFE6A3', '#1D3FDA', 'red']; 
  var className = document.getElementsByClassName("change"); 
  var i;
  color += colorCode[Math.floor(Math.random() * colorCode.length)];
for (var i = 0; i < className.length; i ++) {
    className[i].style.backgroundColor = color; }
}