var points = []
var mult = 0.001

function setup() {
  createCanvas(windowWidth, windowHeight)
  background('#ede0bd')
  angleMode(DEGREES)
  noiseDetail(1)
  
  var density = 500
  var space = width / density
  
  for (var x = 0; x < width; x += space) {
    for (var y = 0; y < height; y += space) {
      var p = createVector(x + random(-10, 10),y + random(-10, 10))
      points.push(p)
    }
  }
}

var time = 0
function draw() {
time+=1
console.log(time)

if(time < 250){
  stroke('#4e5b41')
  strokeWeight(0.5)
}
else if (time < 600){
  strokeWeight(0.75)
  stroke('#3f451f')
}
else if (time < 700){
  strokeWeight(1)
  stroke('black')
}
else if (time < 800){
  strokeWeight(2)
  stroke('black')
}

  for (var i = 0; i < points.length; i++) {
    var angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 8020)
    points[i].add(createVector(tan(angle), sin(angle)))
    ellipse(points[i].x, points[i].y, 1)
  }
}