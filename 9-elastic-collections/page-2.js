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
      musicContainer.appendChild(imageHolder);

      var musicianName = document.createElement("div");
      musicianName.classList.add("musician-name");
      musicianName.innerText = musician.fields.name;
      musicContainer.appendChild(musicianName);

      var musicianGenre = document.createElement("h1");
      musicianGenre.classList.add("genre");
      musicianGenre.innerText = musician.fields.genre;
      musicContainer.append(musicianGenre);

      var musicianDescription = document.createElement("p");
      musicianDescription.classList.add("description");
      musicianDescription.innerText = musician.fields.description;
      musicContainer.append(musicianDescription);

      // var audioHolder = document.createElement("audio");
      // audioHolder.src = musician.fields.attachments[0].url;
      // audioHolder.classList.add("song-audio");
      // audioHolder.autoplay = false;
      // audioHolder.controls = true;
      // audioHolder.muted = false;
      // musicContainer.appendChild(audioHolder);

      // var musicianStreet = document.createElement("p");
      // musicianStreet.classList.add("musician-street");
      // musicianStreet.innerText = musician.fields.streetave;
      // musicContainer.append(musicianStreet);
  

// filter buttons //
      musicContainer.addEventListener("click", function(){
          musicianName.classList.toggle("active");
          musicianGenre.classList.toggle("active");
          musicianDescription.classList.toggle("active");
          musicianStreet.classList.toggle("active");
          audioHolder.classList.toggle("active");
      })

      var musicianFilters = musician.fields.filters;
      musicianFilters.forEach(function(filter){
          musicContainer.classList.add(filter)
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

      var filterPop = document.querySelector(".pop");
      filterPop.addEventListener("click", function(){

        if (musicContainer.classList.contains("pop")) {
          musicContainer.style.background = "#FEB1A2";
          musicContainer.style.border = "none";
          musicContainer.style.display = "block";
          filterPop.classList.add("active");
        } else {
          musicContainer.style.background = "white";
          musicContainer.style.display = "none";
        }
      })

      var filterRock = document.querySelector(".rock");
      filterRock.addEventListener("click", function(){

        if (musicContainer.classList.contains("rock")) {
          musicContainer.style.background = "#6700E7";
          musicContainer.style.border = "none";
          musicContainer.style.display = "block";
          filterRock.classList.add("active");
        } else {
          musicContainer.style.background = "white";
          musicContainer.style.display = "none";
        }
      })

      var filterRnb = document.querySelector(".rnb");
      filterRnb.addEventListener("click", function(){

        if (musicContainer.classList.contains("rnb")) {
          musicContainer.style.background = "#A0C7AB";
          musicContainer.style.border = "none";
          musicContainer.style.display = "block";
          filterRnb.classList.add("active");
        } else {
          musicContainer.style.background = "white";
          musicContainer.style.display = "none";
        }
      })

      var filterTheatre = document.querySelector(".theatre");
      filterTheatre.addEventListener("click", function(){

        if (musicContainer.classList.contains("theatre")) {
          musicContainer.style.background = "#C2BDF6";
          musicContainer.style.border = "none";
          musicContainer.style.display = "block";
          filterTheatre.classList.add("active");
        } else {
          musicContainer.style.background = "white";
          musicContainer.style.display = "none";
        }
      })

      var filterRap = document.querySelector(".rap");
      filterRap.addEventListener("click", function(){

        if (musicContainer.classList.contains("rap")) {
          musicContainer.style.background = "#2143E1";
          musicContainer.style.border = "none";
          musicContainer.style.display = "block";
          filterRap.classList.add("active");
        } else {
          musicContainer.style.background = "white";
          musicContainer.style.display = "none";
        }
      })

      var filterIndie = document.querySelector(".indie");
      filterIndie.addEventListener("click", function(){

        if (musicContainer.classList.contains("indie")) {
          musicContainer.style.background = "#F2EA77";
          musicContainer.style.border = "none";
          musicContainer.style.display = "block";
          filterIndie.classList.add("active");
        } else {
          musicContainer.style.background = "white";
          musicContainer.style.display = "none";
        }
      })

      var filterFolk = document.querySelector(".folk");
      filterFolk.addEventListener("click", function(){

        if (musicContainer.classList.contains("folk")) {
          musicContainer.style.background = "#F25F4E";
          musicContainer.style.border = "none";
          musicContainer.style.display = "block";
          filterFolk.classList.add("active");
        } else {
          musicContainer.style.background = "white";
          musicContainer.style.display = "none";
        }
      })

      var filterReset = document.querySelector(".js-reset");
      filterReset.addEventListener("click", function(){
        if (musicContainer.classList.contains("bronx", "brooklyn", "manhattan", "queens", "staten", "pop", "rock", "rnb", "theatre", "rap", "indie", "folk")) {
          musicContainer.style.background = "white";
          musicContainer.style.display = "block";
          filterReset.classList.add("active");
        }
      })

  });
}
