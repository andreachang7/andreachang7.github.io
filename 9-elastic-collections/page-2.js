// console.log("Hello, Airtable");

let wrapper = document.querySelector(".wrapper");

let Airtable = require("airtable");
// console.log(Airtable);

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

// loop through the books, create an h2 for each one, and add it to the page
function showMusicians() {
  console.log("showMusicians()");
  musicians.forEach((musician) => {

      // let musicianName = document.createElement("div");
      // musicianName.classList.add("item");
      // musicianName.innerText = musician.fields.name;
      // wrapper.append(musicianName);

      let imageHolder = document.createElement("img");
      imageHolder.classList.add("images");
      imageHolder.src = musician.fields.photographs[0].url;
      // musicianName.appendChild(imageHolder);
      wrapper.append(imageHolder);




    //   var nameofMusician = document.createElement("h1");
    //   nameofMusician.innerText = song.fields.borough;
    //   document.body.append(nameofMusician);

    // let musiciansTextHolder = document.createElement("div");
    // musiciansTextHolder.classList.add("entry");
    // musiciansTextHolder.innerText = musician.fields.text;
    //  wrapper.appendChild(musiciansTextHolder);

    //  let imageHolder = document.createElement("image");
    //  imageHolder.src = tiktok.fields.video[0].url;
    //  imageHolder.classList.add("musicianImage");
    //  imageHolder.muted = true;
    //  imageHolder.autoplay = true;
    //  imageHolder.loop = true;
    //  musiciansTextHolder.appendChild(imageHolder);
  });
}














// var div = document.querySelector("div");
// var ul = document.querySelector("ul");
// var ol = document.querySelector("ol");

// async function getPeople() {
//   let response = await fetch(
//     "https://api.airtable.com/v0/appKVn1znX1pUNSst/Table%201?api_key=keyNGA0AZ4vxvlL4x");
//   let data = response.json();
//   return data;
// }

// getPeople().then((data) => {
//     console.log(data.records)
//     makeList(data.records) 
// });

// function makeList(records) {
//   for (let i = 0; i < records.length; i++) {
//     let name = records[i].fields.name;
//     let listItem = document.createElement("div");
//     listItem.appendChild(document.createTextNode(name));
//     div.appendChild(listItem);
//   }
//   for (let i = 0; i < records.length; i++) {
//     let borough = records[i].fields.borough;
//     let listItem = document.createElement("ol");
//     listItem.appendChild(document.createTextNode(borough));
//     div.appendChild(listItem);
//   }
//   for (let i = 0; i < records.length; i++) {
//     let neighborhood = records[i].fields.neighborhood;
//     let listItem = document.createElement("ol");
//     listItem.appendChild(document.createTextNode(neighborhood));
//     div.appendChild(listItem);
//   }
// }

