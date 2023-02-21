function setup() {
    createCanvas(windowWidth, windowHeight);
    
    angleMode(DEGREES)
    rectMode(CENTER)
  }
  
  function draw() {
    background(0);
    noFill();
    stroke(255)
    
    translate(width / 2, height / 2)
    
    for (var i = 0; i < 200; i++) {
      push()
      
      rotate(sin(frameCount + i) * 200)
      
      var r = map(sin(frameCount), -1, 1, 100, 255)
      var g = map(cos(frameCount / 2), -1, 1, 10, 255)
      var b = map(sin(frameCount / 4), -1, 1, 50, 255)
      
    //   stroke(random(5, 255), random(5, 255), random(5, 255))
      stroke(r,g,b)

      
      rect(0, 0, 100 - i * 3, 100)
      
      pop()
    }
  }