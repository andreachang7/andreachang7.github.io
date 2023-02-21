var points = []
var mult = 0.001

// var points2 = []
// var mult2 = 0.001

function setup() {
  createCanvas(windowWidth, windowHeight)
//   background(random(5, 255), random(5, 255), random(5, 255))
  background('#F8F4D6')
  angleMode(DEGREES)
  noiseDetail(1)
  
  var density = 30
  var space = width / density
  
  for (var x = 0; x < width; x += space) {
    for (var y = 0; y < height; y += space) {
      var p = createVector(x + random(-10, 10),y + random(-10, 10))
      points.push(p)
    }
  }

//   for (var a = 0; a < width; a += space) {
//     for (var c = 0; c < height; c += space) {
//         var d = createVector(a + random(-20,20), c + random(-20, 20))
//         points.push(d)
//     }
//   }
}

function draw() {

//   stroke(random(5, 255), random(5, 255), random(5, 255))
  stroke('#44A58C')
  strokeWeight(0.5)
  
  for (var i = 0; i < points.length; i++) {
    var angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 720)
    points[i].add(createVector(cos(angle), sin(angle)))
    ellipse(points[i].x, points[i].y, 1)
    // i.strokeStyle('blue')
  }

//   for (var f = 0; f < points2.length; f++) {
//     var angle = map(noise(points2[f].a * mult2, points2[f].c * mult2), 0, 1, 0, 720)
//     points2[f].add(createVector(cos(angle), sin(angle)))
//     ellipse(points2[f].a, points2[f].c, 1)
//     // points2.stroke('red')
//   }

}


