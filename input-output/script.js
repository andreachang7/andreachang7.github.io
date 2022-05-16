let aURL = "images/jan-image-1.jpg"; 

let bURL = "images/jan-image-2.jpg"; 

let cURL = "images/jan-image-3.jpg"; 

let dURL = "images/jan-image-5.jpg"; 

let eURL = "images/jan-image-4.jpg"; 

//feb

let fURL = "images/feb-image-7.jpg"; 

let gURL = "images/feb-image-8.jpg"; 

let hURL = "images/feb-image-9.jpg"; 

let iURL = "images/feb-image-10.jpg"; 

let jURL = "images/feb-image-11.jpg"; 

let kURL = "images/march-image-1.jpg"; 

let lURL = "images/march-image-2.jpg"; 




let inputElement = document.querySelector("#input");

let result= document.querySelector("#result"); 

inputElement.addEventListener("keydown", function(event) {
       
    if (event.key == "Enter"){
            console.log(inputElement.value);

            let name = inputElement.value;

            inputElement.value = "";

            result.innerHTML = "";

            for (let i = 0; i < 1; i++){
                console.log(i);
                let letter = name[i]; 
                console.log(letter);

                let selectedCard = document.createElement("img");
                selectedCard.classList.add("first-image");
                selectedCard.style.right = 400 * Math.random() + "px";
                selectedCard.style.left = 600 * Math.random() + "px";
                selectedCard.style.width = 700 * Math.random() + "px";

                let selectedCardB = document.createElement("img");
                selectedCardB.classList.add("second-image");
                selectedCardB.style.left = 2000 * Math.random() + "px";
                selectedCardB.style.right = 1000 * Math.random() + "px";
                selectedCardB.style.top = 800 * Math.random() + "px";
                selectedCardB.style.width = 800 * Math.random() + "px";

                let selectedCardC = document.createElement("img");
                selectedCardC.classList.add("third-image");
                selectedCardC.style.left = 2000 * Math.random() + "px";
                selectedCardC.style.width = 500 * Math.random() + "px";
                selectedCardC.style.right = 600 * Math.random() + "px";
                selectedCardC.style.top = 800 * Math.random() + "px";

                let selectedCardD = document.createElement("img");
                selectedCardD.classList.add("fourth-image");
                selectedCardD.style.left = 2000 * Math.random() + "px";
                selectedCardD.style.width = 500 * Math.random() + "px";
                selectedCardD.style.right = 600 * Math.random() + "px";
                selectedCardD.style.top = 800 * Math.random() + "px";

                let selectedCardE = document.createElement("img");
                selectedCardE.classList.add("fifth-image");
                selectedCardE.style.left = 2000 * Math.random() + "px";
                selectedCardE.style.width = 500 * Math.random() + "px";
                selectedCardE.style.right = 600 * Math.random() + "px";
                selectedCardE.style.top = 800 * Math.random() + "px";

                let selectedCardF = document.createElement("img");
                selectedCardF.classList.add("feb-image-one");
                selectedCardF.style.left = 2000 * Math.random() + "px";
                selectedCardF.style.width = 500 * Math.random() + "px";
                selectedCardF.style.right = 600 * Math.random() + "px";
                selectedCardF.style.top = 800 * Math.random() + "px";

                let selectedCardG = document.createElement("img");
                selectedCardG.classList.add("feb-image_two");
                selectedCardG.style.right = 400 * Math.random() + "px";
                selectedCardG.style.left = 600 * Math.random() + "px";
                selectedCardG.style.width = 700 * Math.random() + "px";

                let selectedCardH = document.createElement("img");
                selectedCardH.classList.add("feb-image_three");
                selectedCardH.style.right = 400 * Math.random() + "px";
                selectedCardH.style.left = 600 * Math.random() + "px";
                selectedCardH.style.width = 700 * Math.random() + "px";

                result.appendChild(selectedCard);
                result.appendChild(selectedCardB);
                result.appendChild(selectedCardC);
                result.appendChild(selectedCardD);
                result.appendChild(selectedCardE);
                result.appendChild(selectedCardF);
                result.appendChild(selectedCardG);
                result.appendChild(selectedCardH);

                if (["1"].includes(letter)){
                    selectedCard.src = aURL;
                    selectedCardB.src = bURL; 
                    selectedCardC.src = cURL; 
                    selectedCardD.src = dURL; 
                    selectedCardE.src = eURL; 
                    selectedCardF.src = fURL;
                    selectedCardG.src = gURL;
                    selectedCardG.src = hURL;
                }



            }
        }
    })

// DEMO TWO

// let inputElement = document.querySelector("#input");

// let result= document.querySelector("#result");

// inputElement.addEventListener("keydown", function(event) {
//     if (event.key == "Enter"){
//         console.log(inputElement.value);
//         result.innerText = "You typed: " + inputElement.value;

//         inputElement.value = "";
//     }
// });


// DEMO ONE

// let result = document.querySelector("#result");

// document.addEventListener("keydown", function(event) {
//     console.log(event);
//     console.log("what did we just press");
//     console.log(event.key);

//     if (event.key == "Enter"){
//         document.body.classList.toggle("pink");
//     }

//     result.innerText = "You just pressed : " + event.key; 
// })