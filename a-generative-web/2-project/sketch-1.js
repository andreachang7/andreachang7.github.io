let slider;
let slider2;
let slider3;
let sliderBackground;

function setup() {
  //create a variable for canvas so that we can reference it for positioning later
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  //you can add a CSS class to something by putting .class after it
  canvas.class("container");

  slider = createSlider(50, 2000, 0);
  slider.class("slider");

  slider2 = createSlider(40, 1000, 0);
  slider2.class("slider2");

  slider3 = createSlider(10, 3000, 30);
  slider3.class("slider3");

  sliderBackground = createSlider(0, 255, 0);
  sliderBackground.class("sliderBackground");
}
function draw() {
  background(0, sliderBackground.value(), 255 - sliderBackground.value());

  fill("Gold");
  //set the width and height of the ellipse using slider.value
  ellipse(windowWidth/2, windowHeight/2, slider.value(), slider.value());

  fill("#FF2880");
  ellipse(windowWidth/2, windowHeight/2, slider.value(), slider2.value());

  fill("#CCA8EF");
  ellipse(windowWidth/2, windowHeight/2, slider2.value(), slider3.value());
}