
let flowers = [
    {name: "Dahlia", amount: 18},
    {name: "Poppy", amount: 13},
    {name: "Ranunculus", amount: 5},
    {name: "Anthurium", amount: 2},
    {name: "Snapdragon", amount: 7},
    {name: "Rose", amount: 12},
    {name: "Lilies", amount: 25}
    ];
  
    // Two: Use the amount to indicate how many flowers get written
  
  // First show all the flowers and create divs for each of them
  let container = document.querySelector(".garden");
  // create a counter variable that will give us each flowers number in the array
  let i = 0;
  let b;
  
  function displayFlowers(flower) {
    // create a for loop that will run based on the flower amount
    for (var b = 0; b < flower.amount; b++) {
      // creates a new div; appends that div to the container
    let newItem = document.createElement("div");
    let flowerDiv = container.appendChild(newItem);
    // increase the counter variable by one
    i++;
    // adds a shared class to each new div
    newItem.classList.add("flower");
    // adds a specific class to each new div
      newItem.classList.add(flower.name);
    newItem.classList.add(flower.name + [i]);
    // places the flower name and amount to the div
    flowerDiv.innerHTML = flower.name;
    }
    
  }
  // loops through the flowers and runs the displayFlowers function for each one
  flowers.forEach(displayFlowers);
  