let colorPicker;
let backgroundPicker;
let strokePicker;

let textSpaceSlider;
let fontSizeSlider;

let on = false;
let eiko;
let contents = "";

var w = window.innerWidth,
h = window.innerHeight,
resolution = 8.5,
resolutionH = 11,
dimDif = resolution / resolutionH,
sizeH = h,
sizeW = h * dimDif;


function preload() {
  eiko = loadFont('eiko.otf');
}

function setup() {
  createCanvas(sizeW, sizeH);
  textFont(eiko);
  strokeWeight(2);
  fill(255);
  textSize(150);
  textWidth(100);
  
  colorPicker = createColorPicker('black');
  colorPicker.position(0, 5);
  colorPicker.class('colorPicker');
  
  strokePicker = createColorPicker('black');
  strokePicker.position(100, 5);
  strokePicker.addClass('strokePicker')
  
  backgroundPicker = createColorPicker('white');
  backgroundPicker.position(200, 5);
  backgroundPicker.addClass('backgroundPicker');
  
  textSpaceSlider = createSlider(50, 300, 150);
  textSpaceSlider.position(0, 50)
  textSpaceSlider.addClass('slider');

  fontSizeSlider = createSlider(50, 300, 150);
  fontSizeSlider.position(0, 100);
  fontSizeSlider.addClass('slider');
  
  // fontSizeSlider = createSlider(50, 300, 150)
  // textSizeSlider.oninput = changeFontSize; 
  
}

function backgroundColor() {
  background(backgroundPicker.color());
}

function changeFontSize() {
  // text.style.textSize = this.value + "px";
}

function draw() {
   stroke(strokePicker.color());
   fill(colorPicker.color());
   text(contents, 25, 150, window.innerWidth, window.innerHeight);
   noFill();
  
   textLeading(textSpaceSlider.value());
  //  fontSize(fontSizeSlider.value());
  
  
  var p1 = random(50, 200);
  var p2 = random(50, 500);
  var p3 = random(500, 5000);
  var p4 = random(350, 900);
  var pFive = random(100, 3000);
  var p6 = random(50, 500);
  var p7 = random(500, 700);
  var p8 = random(200, 400);
  var p9 = random(100, 2000);
  var p10 = random(20, 500);
  var p11 = random(300, 500);
  var p12 = random(650, 1500);
  var p13 = random(-100, 700);
  var p14 = random(300, 1000);
  var p15 = random(-200, 500);
  var p16 = random(100, 800);
  var p17 = random(750, 2050);
  var p18 = random(200, 2000);
  var p19 = random(100, 300);
  var p20 = random(100, 900);
  
  // line
  var a1 = random(150, 350);
  var a2 = random(15, 25);
  var a3 = random(400, 500);
  var a4 = random(50, 100);
  var a5 = random(700, 800);
  var a6 = random(1500, 1600);
  
  
  if ((keyIsPressed == true) && (key == 'a'))  {
    curve(p1, p2, p3, p4, p13, p16, p7, p8, p9, p10, p11, pFive);
  }
  if ((keyIsPressed == true) && (key == 'A')) {
    curve(p13, p4, p1, p4, p10, p2, p8, p8, p9, pFive, p11,p3);
  }
  
  if ((keyIsPressed == true) && (key == 'b')) {
    // curve(700, 800, 800, 703, 61, 400, 300, 50, 900, 1500, 50, 1000);
    curve(p16, p20, p20, p7, a4, a3, a1, a2, p14, p17, a4,p14);
  }
  if ((keyIsPressed == true) && (key == 'B')) {
    line(a1, a2, a3, height);
  }
  
  if ((keyIsPressed == true) && (key == 'c')) {
    curve(p3, p2, p1, p14, p20, p12, p18, p10, p9, p19, p15);
  }
  if ((keyIsPressed == true) && (key == 'C')) {
    line(300, 20, 450, height);
  }
  
  if ((keyIsPressed == true) && (key == 'd')) {
    curve(9000, 400, 700, 703, 1000, 400, 300, 500, 700, 30, 500, 40);
  }
  if ((keyIsPressed == true) && (key == 'D')) {
    line(300, 20, 450, height);
  }
  
  if ((keyIsPressed == true) && (key == 'e')) {
    curve(100, 300, -100, 500, 500, 400, 200, -100)
  }
  if ((keyIsPressed == true) && (key == 'E')) {
    curve(-100, -300, 100, 500, 500, -400, -200, -100)
  }
  
  if ((keyIsPressed == true) && (key == 'f')) {
    curve(100, 300, -1000, -700, 1000, 400, 200, 700)
  }
  if ((keyIsPressed == true) && (key == 'F')) {
    curve(400, 300, 700, 40, 100, 400, 900, -700)
  }
  
  if ((keyIsPressed == true) && (key == 'g')) {
    ellipse(a1, a2, a3, p9);
  }
  if ((keyIsPressed == true) && (key == 'G')) {
    curve(9000, 400, 700, 703, 1000, -400, 300, -500, 700, 30, 500, 40);
  }
  
  if ((keyIsPressed == true) && (key == 'h')) {
    curve(9000, 400, 700, 703, -1000, 2000, 300, 500, 700, 300, 500, 40);
  }
  if ((keyIsPressed == true) && (key == 'H')) {
    curve(90, 400, 100, 50, 1000, 300, 200, 30, 500, 200, 500, 40);
  }
  
  if ((keyIsPressed == true) && (key == 'i')) {
    curve(100, 300, 1000, 50, 40, 700, 70, 800)
  }
  if ((keyIsPressed == true) && (key == 'I')) {
    curve(300, 700, 900, 500, 40, 400, 100, 300)
  }
  
  if ((keyIsPressed == true) && (key == 'j')) {
    curve(30, 30, 500, -50, -20, 700, 70, -800)
  }
  if ((keyIsPressed == true) && (key == 'J')) {
    curve(30, 100, 500, -50, 200, 700, 700, -80)
  }
  
  if ((keyIsPressed == true) && (key == 'k')) {
    curve(300, 1000, 900, 500, -20, 700, 70, 500)
  }
  if ((keyIsPressed == true) && (key == 'K')) {
    curve(30, 100, 500, -50, 200, 700, 700, -80)
  }
  
  if ((keyIsPressed == true) && (key == 'l')) {
    curve(500, 2000, 900, 500, -20, 70, 700, 200)
  }
  if ((keyIsPressed == true) && (key == 'L')) {
    curve(300, 10000, 500, -50, 200, 700, 700, 300)
  }
  
  if ((keyIsPressed == true) && (key == 'm')) {
    curve(a5, p2, p9, pFive, a5, p7, p7, a2)
  }
  if ((keyIsPressed == true) && (key == 'M')) {
    curve(p3, a5, pFive, p18, p2, p7, a3, p3)
  }
  
  if ((keyIsPressed == true) && (key == 'n')) {
    ellipse(p1, p12, p13, a3);
  }
  if ((keyIsPressed == true) && (key == 'N')) {
    curve(p9, p4, p7, 703, p18, -400, 300, -500, p13, a3, 500, 40);
  }
  
  if ((keyIsPressed == true) && (key == 'o')) {
    curve(p7, p6, pFive, p13, p15, p18, a3, a5)
  }
  if ((keyIsPressed == true) && (key == 'O')) {
    line(a3, a1, a6, height);
  }
  
  if ((keyIsPressed == true) && (key == 'p')) {
    curve(p18, a2, 800, a4, p1, 5000, p8, pFive, p3, pFive, p6, a6);
  }
  if ((keyIsPressed == true) && (key == 'P')) {
    curve(p18, a2, 200, a4, p1, 3000, p8, pFive, p3, pFive, p6, a6);
  }
  
  if ((keyIsPressed == true) && (key == 'q')) {
    curve(a3, p2, 100, p18, p1, 5000, p8, pFive, p3, pFive, p6, a6);
  }
  if ((keyIsPressed == true) && (key == 'Q')) {
    curve(p18, a2, 200, a4, p1, 3000, p8, pFive, p3, pFive, p6, a6);
  }
  
  if ((keyIsPressed == true) && (key == 'r')) {
    line(a2, a3, a5, height);
  }
  if ((keyIsPressed == true) && (key == 'R')) {
    curve(p8, pFive, p7, p12, p13, p17, a3, p18)
  }
  
  if ((keyIsPressed == true) && (key == 's')) {
    line(p15, a3, a5, height);
  }
  if ((keyIsPressed == true) && (key == 'S')) {
    curve(a5, p18, p17, p2, p13, p17, a3, p18)
  }
  
  if ((keyIsPressed == true) && (key == 't')) {
    ellipse(a5, a2, a5, pFive);
  }
  if ((keyIsPressed == true) && (key == 'T')) {
    curve(a6, p8, p1, p2, p13, a3, a4, p18)
  }
  
  if ((keyIsPressed == true) && (key == 'u')) {
    curve(p20, p12, 80, p13, p10, 5000, p18, p4, p18, p4, p15, p16);
  }
  if ((keyIsPressed == true) && (key == 'U')) {
    curve(p6, p8, p11, p10, a3, p3, p4, p8)
  }
  
  if ((keyIsPressed == true) && (key == 'v')) {
    curve(30, 30, 800, -50, -20, pFive, 70, -800)
  }
  if ((keyIsPressed == true) && (key == 'V')) {
    curve(-300, -30, p8, -200, -20, p18, 70, -80)
  }
  
  if ((keyIsPressed == true) && (key == 'w')) {
    ellipse(p3, a3, 800, height)
  }
  if ((keyIsPressed == true) && (key == 'W')) {
    curve(p8, a4, 800, -200, p12, p18, 70, -80)
  }
  
  if ((keyIsPressed == true) && (key == 'x')) {
    ellipse(p3, a3, 800, height)
  }
  if ((keyIsPressed == true) && (key == 'X')) {
    line(800, p1, -50, height);
  }
  
  if ((keyIsPressed == true) && (key == 'y')) {
    curve(p13, p12, 400, p18, p1, 5000, p8, pFive, p13, p1, a2, pFive);
  }
  if ((keyIsPressed == true) && (key == 'Y')) {
    curve(p18, a2, p10, a4, p1, 3000, p18, pFive, p13, pFive, p6, a6);
  }
  
  if ((keyIsPressed == true) && (key == 'z')) {
    curve(a1, a2, 900, pFive, p1, a5, p8, pFive, p13, p1, a2, pFive);
  }
  if ((keyIsPressed == true) && (key == 'Z')) {
    ellipse(p18, p18, p10, height);
  }
  
  if ((keyIsPressed == true) && (key == 'Shift')) {
    curve(1500, 50, 5000, -1500, 200, 500, 50, 3000) 
  }

  if ((keyIsPressed == true) && (key == 'Delete')) {
    contents.slice(0, -1);
  }
}


function keyTyped() {
  contents += key;
}


//if delete pressed
// contents.slice(0, -1)

// function mousePressed() {
//   if (on) {
//     on = false;
//   } else {
//     on = true;
//   }
// }



