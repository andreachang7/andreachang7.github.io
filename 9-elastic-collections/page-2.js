let wrapper = document.querySelector(".wrapper");

let Airtable = require("airtable");

let base = new Airtable({ apiKey: "key936TACOIOQmwHd" }).base(
  "appKVn1znX1pUNSst"
);

base("musicians").select({}).eachPage(gotPageOfMusicians, gotAllMusicians);

var musicians = [];

function gotPageOfMusicians(records, fetchNextPage) {
  console.log("gotPageOfMusicians()");
  musicians.push(...records);
  fetchNextPage();
}

function gotAllMusicians(err) {
  console.log("gotAllMusicians()");

  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }

  consoleLogMusicians();
  showMusicians();
}

function consoleLogMusicians() {
  console.log("consoleLogMusicians()");
  musicians.forEach((musician) => {
    console.log("Musician:", musician);
  });
}

function showMusicians() {
  console.log("showMusicians()");
  musicians.forEach((musician) => {

  var musicContainer = document.createElement("div");
  musicContainer.classList.add("music-container");
  document.querySelector(".wrapper").append(musicContainer);

      var imageHolder = document.createElement("img");
      imageHolder.classList.add("images");
      imageHolder.src = musician.fields.photographs[0].url;
      musicContainer.append(imageHolder);

      var musicianName = document.createElement("h1");
      musicianName.classList.add("musician-name");
      musicianName.innerText = musician.fields.name;
      musicContainer.append(musicianName);

      var musicianGenre = document.createElement("h1");
      musicianGenre.classList.add("musician-genre");
      musicianGenre.innerText = musician.fields.genre;
      musicContainer.append(musicianGenre);

      var musicianStreet = document.createElement("p");
      musicianStreet.classList.add("musician-street");
      musicianStreet.innerText = musician.fields.streetave;
      musicContainer.append(musicianStreet);

      var musicianNeighborhood = document.createElement("p");
      musicianNeighborhood = classList.add("musician-neighborhood");
      musicianNeighborhood.innerText = musician.fields.neighborhood;
      musicContainer.append(musicianNeighborhood);
  

// filter buttons //
      musicContainer.addEventListener("click", function(){
          musicianName.classList.toggle("active");
      })

      var musicianLocation = musician.fields.locations;
      musicianLocation.forEach(function(location){
          musicContainer.classList.add(location)
      })

      var filterBronx = document.querySelector(".bronx");
      filterBronx.addEventListener("click", function(){

        if (musicContainer.classList.contains("bronx")){
          musicContainer.style.background = "#AC2B2F";
          musicContainer.style.border = "none";
          musicContainer.style.display = "block";
          filterBronx.classList.add("active");
        } else {
          musicContainer.style.background = "white";
          musicContainer.style.display = "none";
        }
      })

      var filterBrooklyn = document.querySelector(".brooklyn");
      filterBrooklyn.addEventListener("click", function(){

        if (musicContainer.classList.contains("brooklyn")) {
          musicContainer.style.background = "#569D3B";
          musicContainer.style.border = "none";
          musicContainer.style.display = "block";
          filterBrooklyn.classList.add("active");
        } else {
          musicContainer.style.background = "white";
          musicContainer.style.display = "none";
        }
      })

      var filterQueens = document.querySelector(".queens");
      filterQueens.addEventListener("click", function(){

        if (musicContainer.classList.contains("queens")) {
          musicContainer.style.background = "#96C4EB";
          musicContainer.style.border = "none";
          musicContainer.style.display = "block";
          filterQueens.classList.add("active");
        } else {
          musicContainer.style.background = "white";
          musicContainer.style.display = "none";
        }
      })

      var filterManhattan = document.querySelector(".manhattan");
      filterManhattan.addEventListener("click", function(){

        if (musicContainer.classList.contains("manhattan")) {
          musicContainer.style.background = "orange";
          musicContainer.style.border = "none";
          musicContainer.style.display = "block";
          filterManhattan.classList.add("active");
        } else {
          musicContainer.style.background = "white";
          musicContainer.style.display = "none";
        }
      })

      var filterStaten = document.querySelector(".staten");
      filterStaten.addEventListener("click", function(){

        if (musicContainer.classList.contains("staten")) {
          musicContainer.style.background = "#C89FF3";
          musicContainer.style.border = "none";
          musicContainer.style.display = "block";
          filterStaten.classList.add("active");
        } else {
          musicContainer.style.background = "white";
          musicContainer.style.display = "none";
        }
      })

      var filterReset = document.querySelector(".js-reset");
      filterReset.addEventListener("click", function(){
        if (musicContainer.classList.contains("bronx", "brooklyn", "manhattan", "queens", "staten")) {
          musicContainer.style.background = "white";
          musicContainer.style.display = "block";
        }
      })

  });
}
