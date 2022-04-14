
let music = [
    {name: "AceFrehley", amount: 18},
    {name: "AsapRocky", amount: 13},
    {name: "LadyGaga", amount: 5},
    {name: "JoeyBadass", amount: 2},
    {name: "FoxyBrown", amount: 7},
    {name: "Jay-Z", amount: 12},
    {name: "MaryJBlige", amount: 25}
    ];
  
    // Two: Use the amount to indicate how many flowers get written
  
  // First show all the flowers and create divs for each of them
  let container = document.querySelector(".objects");
  // create a counter variable that will give us each flowers number in the array
  let i = 0;
  let b;
  
  function displayMusic(music) {
    // create a for loop that will run based on the flower amount
    for (var b = 0; b < music.amount; b++) {
      // creates a new div; appends that div to the container
    let newItem = document.createElement("div");
    let musicDiv = container.appendChild(newItem);
    // increase the counter variable by one
    i++;
    // adds a shared class to each new div
    newItem.classList.add("music");
    // adds a specific class to each new div
      newItem.classList.add(music.name);
    newItem.classList.add(music.name + [i]);
    // places the flower name and amount to the div
    musicDiv.innerHTML = music.name;
    }
    
  }
  // loops through the flowers and runs the displayFlowers function for each one
  music.forEach(displayMusic);
  