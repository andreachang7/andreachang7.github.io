var points = []
var mult = 0.001

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
}

var time = 0
function draw() {
time+=1
console.log(time)

// BLACK AND WHITE
if(time < 100){
  stroke('black')
  strokeWeight(0.005)
}
if(time < 150){
  stroke('#57544E')
  strokeWeight(0.0005)
}
if(time < 200){
  stroke('#7B7871')
  strokeWeight(0.0005)
}
else if (time < 250){
  strokeWeight(0.0005)
  stroke('#66635D')
}
else if (time < 300){
  strokeWeight(0.0005)
  stroke('#C4BEB3')
}
else if (time < 350){
  noLoop()
}

  for (var i = 0; i < points.length; i++) {
    var angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 8020)
    points[i].add(createVector(tan(angle), sin(angle)))
    ellipse(points[i].x, points[i].y, 1)
  }
}