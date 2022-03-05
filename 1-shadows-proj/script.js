
let body = document.body;
let characters = document.querySelectorAll(".heading-1 a");
let circles = document.querySelectorAll(".circle")
let texts = document.querySelectorAll(".text")

function turnOnLight() {
  body.classList.toggle("night");
  button.classList.toggle("buttonOn");
}

let button = document.querySelector("#button-1");
button.addEventListener("click", turnOnLight);

characters.forEach(function(character) {
  button.addEventListener("click", function(event) {
    character.classList.toggle("white");
  });
});

circles.forEach(function(circle) {
  button.addEventListener("click", function(event) {
    circle.classList.toggle("white-1");
  });
});

texts.forEach(function(text) {
  button.addEventListener("click", function(event) {
    text.classList.toggle("black");
  });
});
