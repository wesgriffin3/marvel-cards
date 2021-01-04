const heroButton = $("#heroButton");
const villainButton = $("#villainButton");

const flipButtonBack = $(".flip-button-back");
const flipButtonFront = $("#flip-button-back-to-front");
const cardWhole = $(".card-whole");

const btnGroup = $(".btn-group");

$(".card-whole").hover(
  function () {
    $(this).addClass("flipped");
  },
  function () {
    $(this).removeClass("flipped");
  }
);

heroButton.click(function () {
  $(".card-whole").removeClass("flipped");
});

villainButton.click(function () {
  $(".card-whole").addClass("flipped");
});

// search bar

const form = $("form");

form.submit(function () {
  const hero = $("#searchbar").val();

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

  const par = document.createElement("p");

  const backSide = document.createElement("div");
  backSide.className = "card-face card-back";

  const cardBack = document.createElement("div");
  cardBack.className = "card-body";

  const backTitle = document.createElement("h3");

  const imgBack = document.createElement("img");
  imgBack.className = "card-img-back";

  const backPar = document.createElement("p");

  // MARVEL API
  // KEYS:

  // const publickey = "b138b6385cae17bddf0a3657ecf6e166";
  // const privatekey = "c5ad0dcf59ecae1297f416ef21d841ee973b88df";

  const userGivenHero = $("#searchbar").val();

  const heroRequest = $.get(
    "https://gateway.marvel.com/v1/public/characters?ts=1609011803321&apikey=b138b6385cae17bddf0a3657ecf6e166&hash=1e3919c6ee1bde443c8ca31977cdf615&name=" +
      userGivenHero
  );

  const comicRequest = $.get(
    "https://gateway.marvel.com:443/v1/public/comics?title=" +
      userGivenHero +
      "&ts=1609011803321&apikey=b138b6385cae17bddf0a3657ecf6e166&hash=1e3919c6ee1bde443c8ca31977cdf615"
  );

  // FRONT SIDE OF CARD
  heroRequest.done(function (data) {
    heroName.append(data.data.results[0].name);
    par.append(data.data.results[0].description);
    img.src =
      data.data.results[0].thumbnail.path +
      "." +
      data.data.results[0].thumbnail.extension;
    console.log("character data ->", data);
    // END FRONT SIDE OF CARD

    // BACK SIDE OF CARD

    comicRequest.done(function (data) {
      var randomComic =
        data.data.results[Math.floor(Math.random() * data.data.results.length)];
      imgBack.src =
        randomComic.images[0].path + "." + randomComic.images[0].extension;
      backTitle.append(randomComic.title);
      backPar.append(randomComic.description);
    });

    // END BACK SIDE OF CARD

    heroRequest.fail(function () {
      alert("failed attempt");
    });

    // END MARVEL API

    // add content to card
    newDiv.appendChild(scene);
    scene.appendChild(cardWhole);
    cardWhole.appendChild(cardFace);
    cardFace.appendChild(cardBody);
    cardBody.appendChild(heroName);
    cardBody.appendChild(img);
    cardBody.appendChild(par);
    cardWhole.appendChild(backSide);
    backSide.appendChild(cardBack);
    cardBack.appendChild(backTitle);
    cardBack.appendChild(imgBack);
    cardBack.appendChild(backPar);

    //   // add card to row
    $(".row").append(newDiv);

    $(".card-whole").hover(
      function () {
        $(this).addClass("flipped");
      },
      function () {
        $(this).removeClass("flipped");
      }
    );
  });
  this.reset();

  $(".row").removeClass("fill-space");
});
