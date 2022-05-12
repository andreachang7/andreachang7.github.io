$('.round').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $('.arrow').toggleClass('bounceAlpha');
});

// passage1

var i = 0;
var txt = 'I possess no specialized knowledge of architecture, but I understand that in the Gothic cathedral of the West, the roof is thrust up and up so as to place its pinnacle as high in the heavens as possible-and that herein is thought to lie its special beauty. In the temples of Japan, on the other hand, a roof of heavy tiles is first laid out, and in the deep, spacious shadows created by the eaves the rest of the structure is built. Nor is this true only of temples; in the palaces of the nobility and the houses of the common people, what first strikes the eye is the massive roof of tile or thatch and the heavy darkness that hangs beneath the eaves. Even at midday cavernous darkness spreads over all beneath the roof. of tile or thatch and the heavy darkness that hangs beneath the eaves. Even at midday cavernous darkness spreads over all beneath the roofs edge, making entryway, doors, walls, and pillars all but invisible. The grand temples of Kyoto-Chionin, Honganji-and the farmhouses of the remote countryside are alike in this respect: like most buildings of the past their roofs give the impression of possessing far greater weight, height, and surface than all that stands beneath the eaves.';
var speed = 100; 

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("passage-1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// passage2

var t = 0;
var txt2 = 'In making for ourselves a place to live, we first spread a parasol to throw a shadow on the earth, and in the pale light of the shadow we put together a house. There are of course roofs on Western houses too, but they are less to keep off the sun than to keep off the wind and the dew; even from without it is apparent that they are built to create as few shadows as possible and to expose the interior to as much light as possible. If the roof of a Japanese house is a parasol, the roof of a Western house is no more than a cap, with as small a visor as possible so as to allow the sunlight to penetrate directly beneath the eaves. There are no doubt all sorts of reasons-climate, building materials-for the deep Japanese eaves. The fact that we did not use glass, concrete, and bricks, for instance, made a low roof necessary to keep off the driving wind and rain. A light room would no doubt have been more convenient for us, too, than a dark room. The quality that we call beauty, however, must always grow from the realities of life, and our ancestors, forced to live in dark rooms, presently came to discover beauty in shadows, ultimately to guide shadows towards beautys ends.';
var speed = 100; 

function typeWriter2() {
    if (t < txt2.length) {
      document.getElementById("passage-2").innerHTML += txt2.charAt(t);
      t++;
      setTimeout(typeWriter2, speed);
    }
  }

// passage3

var e = 0;
var txt3 = 'And so it has come to be that the beauty of a Japanese room depends on a variation of shadows, heavy shadows against light shadows-it has nothing else. Westerners are amazed at the simplicity of Japanese rooms, perceiving in them no more than ashen walls bereft of ornament. Their reaction is understandable, but it betrays a failure to comprehend the mystery of shadows. Out beyond the sitting room, which the rays of the sun can at best but barely reach, we extend the eaves or build on a veranda, putting the sunlight at still greater a remove. The light from the garden steals in but dimly through paper-paneled doors, and it is precisely this indirect light that makes for us the charm of a room. We do our walls in neutral colors so that the sad, fragile, dying rays can sink into absolute repose. The storehouse, kitchen, hallways, and such may have a glossy finish, but the walls of the sitting room will almost always be of day textured with fine sand. A luster here would destroy the soft fragile beauty of the feeble light. We delight in the mere sight of the delicate glow of fading rays clinging to the surface of a dusky wall, there to live out what little life remains to them. We never tire of the sight, for to us this pale glow and these dim shadows far surpass any ornament. And so, as we must if we are not to disturb the glow, we finish the walls with sand in a single neutral color. The hue may differ from room to room, but the degree of difference will be ever so slight; not so much a difference in color as in shade, a difference that will seem to exist only in the mood of the viewer. And from these delicate differences in the hue of the walls, the shadows in each room take on a tinge peculiarly their own.';
var speed = 100; 

function typeWriter3() {
    if (e < txt2.length) {
      document.getElementById("passage-3").innerHTML += txt3.charAt(e);
      e++;
      setTimeout(typeWriter3, speed);
    }
  }

let body = document.body;
let heading = document.querySelectorAll(".menu");

function turnOffLight() {
    body.classList.toggle("night");
    button.classList.toggle("buttonOff");
}

let button = document.querySelector("#light");
button.addEventListener("click", turnOffLight);

heading.forEach(function(heading) {
    button.addEventListener("click", function(event) {
      heading.classList.toggle("white");
    });
  });

//   light switch

//   let body = document.body;
//   let circles = document.querySelectorAll(".circle")
  
//   function turnOnLight() {
//     body.classList.toggle("night");
//     button.classList.toggle("buttonOn");
//   }
  
//   let button = document.querySelector("#light-switch");
//   button.addEventListener("click", turnOnLight);
  
//   circles.forEach(function(circle) {
//     button.addEventListener("click", function(event) {
//       circle.classList.toggle("white1");
//     });
//   });
  

  