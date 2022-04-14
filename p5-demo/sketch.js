function setup() {
    createCanvas(1000, 1000);
    noStroke();
    // noLoop();
    frameRate(2);
  }
  
  function draw() {
    background("black");
    for (let i = 10; i < width; i += 20) {
    for (let y = 10; y < height; y += 20) {
      let r = random(0, 256);
      let g = random(0, 256);
      let b = random(0, 256);
      fill(r, g, b)
      ellipse(i, y, 15, 15)  
  }
    } 
  }