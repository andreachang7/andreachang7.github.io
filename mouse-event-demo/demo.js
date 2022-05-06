
// EXAMPLE 1 Create a 16 by 16 grid
// let wrapper = document.querySelector(".wrapper");

// for (let i = 0; i < 16 * 16; i++) {
//   let newDiv = document.createElement("div");
//   newDiv.classList.add("pixel");
//   wrapper.appendChild(newDiv);
// }

// // EXAMPLE 2 Translate Input to Output
// let wrapper = document.querySelector(".wrapper");

// for (let i = 0; i < 16 * 16; i++) {
//   let newDiv = document.createElement("div");
//   newDiv.classList.add("pixel");

//   newDiv.addEventListener("click", function(){
//     newDiv.style.backgroundColor = "blue";
//   });

//   wrapper.appendChild(newDiv);
// }

// EXAMPLE 3 Change fill to random color

// let wrapper = document.querySelector(".wrapper");

// for (let i = 0; i < 16 * 16; i++) {
//   let newDiv = document.createElement("div");
//   let valueR = Math.floor(Math.random() * 255);
//   let valueG = Math.floor(Math.random() * 255);
//   let valueB = Math.floor(Math.random() * 255);
//   console.log(valueR , valueG , valueB);


//   newDiv.classList.add("pixel");

//   newDiv.addEventListener("click", function(){
//     newDiv.style.backgroundColor = "rgb(" + valueR + "," + valueG + "," + valueB + ")";
//   });

//   wrapper.appendChild(newDiv);
// }

// EXAMPLE 4 Add in drawing option

// let wrapper = document.querySelector(".wrapper");

// for (let i = 0; i < 16 * 16; i++) {
//   let newDiv = document.createElement("div");
//   let valueR = Math.floor(Math.random() * 255);
//   let valueG = Math.floor(Math.random() * 255);
//   let valueB = Math.floor(Math.random() * 255);

// // create a boolean to check if we are drawing the mouse down
//   let isPainting = false;

//   console.log(valueR , valueG , valueB);


//   newDiv.classList.add("pixel");

// // change event to mousedown
//   newDiv.addEventListener("mousedown", function(){
//     //change ispainting value to true
//     isPainting = true;
//     newDiv.style.backgroundColor = "rgb(" + valueR + "," + valueG + "," + valueB + ")";
//   });

// //new event listener to view if mouse is entering an element
//   newDiv.addEventListener("mouseenter", function(){
//       newDiv.style.backgroundColor = "rgb(" + valueR + "," + valueG + "," + valueB + ")";

//   });

//   wrapper.appendChild(newDiv);
// }

// EXAMPLE 5 Add in drawing functionality only when holding down mouse


let wrapper = document.querySelector(".wrapper");

// create a boolean to check if we are drawing the mouse down
  let isPainting = false;

for (let i = 0; i < 16 * 16; i++) {
  let newDiv = document.createElement("div");
  let valueR = Math.floor(Math.random() * 255);
  let valueG = Math.floor(Math.random() * 255);
  let valueB = Math.floor(Math.random() * 255);


  console.log(valueR , valueG , valueB);


  newDiv.classList.add("pixel");

// change event to mousedown
  newDiv.addEventListener("mousedown", function(){
    //change ispainting value to true
    isPainting = true;
    newDiv.style.backgroundColor = "rgb(" + valueR + "," + valueG + "," + valueB + ")";
  });

//new event listener to view if mouse is entering an element
  newDiv.addEventListener("mouseenter", function(){
      if (isPainting) {
        newDiv.style.backgroundColor = "rgb(" + valueR + "," + valueG + "," + valueB + ")";
      }

  });

  //final eventlistener
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  wrapper.appendChild(newDiv);
}

// EXAMPLE 6 Clear Drawing

// let wrapper = document.querySelector(".wrapper");
// let clearDrawing = document.querySelector(".clearDrawing");

// // create a boolean to check if we are drawing the mouse down
//   let isPainting = false;

// for (let i = 0; i < 16 * 16; i++) {
//   let newDiv = document.createElement("div");
//   let valueR = Math.floor(Math.random() * 255);
//   let valueG = Math.floor(Math.random() * 255);
//   let valueB = Math.floor(Math.random() * 255);


//   console.log(valueR , valueG , valueB);


//   newDiv.classList.add("pixel");

// // change event to mousedown
//   newDiv.addEventListener("mousedown", function(){
//     //change ispainting value to true
//     isPainting = true;
//     newDiv.style.backgroundColor = "rgb(" + valueR + "," + valueG + "," + valueB + ")";
//   });

// //new event listener to view if mouse is entering an element
//   newDiv.addEventListener("mouseenter", function(){
//       if (isPainting) {
//         newDiv.style.backgroundColor = "rgb(" + valueR + "," + valueG + "," + valueB + ")";
//       }

//   });

//   //final eventlistener
//   newDiv.addEventListener("mouseup", function(){
//     isPainting = false;
//   });

// clearDrawing.addEventListener("click", function(){
//   newDiv.style.backgroundColor = "white";
// });

//   wrapper.appendChild(newDiv);
// }
