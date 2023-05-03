const fontSizeSlider = document.getElementById("fontSize");
const letterSpacingSlider = document.getElementById("letterSpacing");
const lineHeightSlider = document.getElementById("lineHeight");
const textInput = document.getElementById("textInput");
const textToStylize = document.getElementById("textToStylize");


fontSizeSlider.addEventListener("input", () => {
  textToStylize.style.fontSize = fontSizeSlider.value + "px";
});

letterSpacingSlider.addEventListener("input", () => {
  textToStylize.style.letterSpacing = letterSpacingSlider.value + "px";
});

lineHeightSlider.addEventListener("input", () => {
  textToStylize.style.lineHeight = lineHeightSlider.value;
});

textInput.addEventListener("input", () => {
  textToStylize.textContent = textInput.value;
});