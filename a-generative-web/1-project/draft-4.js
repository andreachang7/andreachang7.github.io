var points = []
var mult = 0.001
var randomForm 

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
}

var time = 0
function draw() {
time+=1
console.log(time)

if(time < 250){
  stroke('black')
  strokeWeight(0.5)
}

// if (time < 250){
//   stroke('#FDFAF3')
//   strokeWeight(0.0015)
// }
// else if (time < 200){
//   strokeWeight(0.75)
//   stroke('#484540')
// }
// else if (time < 250){
//   strokeWeight(0.05)
//   stroke('#57544E')
// }
// else if (time < 275){
//   strokeWeight(0.05)
//   stroke('#66635D')
// }
else if (time < 350){
  noLoop()
}

  for (var i = 0; i < points.length; i++) {
    var angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, randomForm)
    points[i].add(createVector(tan(angle), sin(angle)))
    ellipse(points[i].x, points[i].y, 1)
  }
}