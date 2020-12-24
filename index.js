var heroButton = $("#heroButton");
var villainButton = $("#villainButton");

var flipButtonBack = $(".flip-button-back");
var flipButtonFront = $("#flip-button-back-to-front");
var cardWhole = $(".card-whole");

var btnGroup = $(".btn-group");

heroButton.click(function () {
  cardWhole.removeClass("flipped");
  btnGroup.style.visibility = "visible";
});

$(".card-whole").hover(
  function () {
    $(this).addClass("flipped");
  },
  function () {
    $(this).removeClass("flipped");
  }
);

flipButtonBack.click(function () {
  $(this).parents($(".col-sm-4")).addClass("flipped");
  btnGroup.style.visibility = "hidden";
});

flipButtonFront.click(function () {
  $(this).removeClass("flipped");
  btnGroup.style.visibility = "visible";
});

villainButton.click(function () {
  cardWhole.addClass("flipped");
});

// search bar

const form = $("form");

form.submit(function () {
  // creates new card container
  const newDiv = document.createElement("div");
  newDiv.className = "col-sm-4 entire-card";

  // give new card content
  const scene = document.createElement("div");
  scene.className = "scene";

  const cardWhole = document.createElement("div");
  cardWhole.className = "card-whole";

  const cardFace = document.createElement("div");
  cardFace.className = "card-face card-front";

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const heroName = document.createElement("h3");

  const img = document.createElement("img");
  img.className = "card-img";

  // add content to card
  newDiv.appendChild(scene);
  scene.appendChild(cardWhole);
  cardWhole.appendChild(cardFace);
  cardFace.appendChild(cardBody);
  cardBody.appendChild(heroName);
  cardBody.appendChild(img);

  //   // add card to row
  $(".third-row").append(newDiv);
});

// MARVEL API
// KEYS

// var publickey = "b138b6385cae17bddf0a3657ecf6e166";
// var privatekey = "c5ad0dcf59ecae1297f416ef21d841ee973b88df";
// var ts = new Date().getTime();
// var stringToHash = ts + privatekey + publickey;
// var hash = md5(stringToHash);
// var baseUrl = "https://gateway.marvel.com:443/v1/public/characters";
// var limit = 20;
// var url =
//   baseUrl +
//   "?limit=" +
//   limit +
//   "&ts=" +
//   ts +
//   "&apikey=" +
//   publickey +
//   "&hash=" +
//   hash;

// // END MARVEL API
