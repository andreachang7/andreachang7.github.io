var points = []
var mult = 0.001
// var randomForm;
function setup() {
  createCanvas(windowWidth, windowHeight)
  background('black')
  angleMode(DEGREES)
  noiseDetail(1)
  // blendMode(SCREEN)
  
  var density = 400
  var space = width / density
  
  for (var x = 0; x < width; x += space) {
    for (var y = 0; y < height; y += space) {
      var p = createVector(x + random(-10, 10),y + random(-10, 10))
      points.push(p)
    }
//   }
// randomForm = random(200,9000)
// console.log(randomForm)
}

var time = 0
function draw() {
time+=1
console.log(time)

if(time < 250){
  stroke('white')
  strokeWeight(0.5)
}
// if(time < 250){
//   stroke('blue')
//   strokeWeight(0.5)
// }
else if (time < 300){
  strokeWeight(0.75)
  stroke('#9C9B97')
}
else if (time < 500){
  strokeWeight(1)
  stroke('black')
}
else if (time < 800){
  strokeWeight(2)
  stroke('black')
}
// var randomForm = random(200,10000)

  for (var i = 0; i < points.length; i++) {
    var angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 8020)
    points[i].add(createVector(tan(angle), sin(angle)))
    ellipse(points[i].x, points[i].y, 1)
  }
}
}