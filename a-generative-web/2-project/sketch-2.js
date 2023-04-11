function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);

  canvas.class("container");

  horizonSlider = createSlider(60, 350, 150, 2);
  horizonSlider.position(10, 10);
}
function draw() {
  horizon = horizonSlider.value();

  c1 = color("darkblue");
  c2 = color("orange");
  c3 = color("brown");

  for(y = horizon; y < height; y++) {
    yMap = map(y, 0, height, 0, 1);
    newColor = lerpColor(c1, c2, yMap);
    stroke(newColor);
    line(0, y, width, y);
  }
  stroke(0);
  textSize(20);
  text("Horizon Height: " + horizon, 10, 50);
}