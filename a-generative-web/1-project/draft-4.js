var points = []
var mult 
var randomForm 
var zoom

function setup() {
  createCanvas(windowWidth, windowHeight)
  background('black')
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
  randomForm = random(8000,20000)
  console.log(randomForm)

  zoom = random(1,5)

  mult = random(0.001, 0.0025)
}

var time = 0
function draw() {
time+=1
console.log(time)

if(time < 250){
  stroke('black')
  strokeWeight(0.5)
}
else if (time < 350){
  noLoop()
}
  for (var i = 0; i < points.length; i++) {
    var angle = map(noise(points[i].x * mult, points[i].y * mult), 0, zoom, 0, randomForm)
    points[i].add(createVector(tan(angle), sin(angle)))
    ellipse(points[i].x, points[i].y, 1)
  }
}