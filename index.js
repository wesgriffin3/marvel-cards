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
  $(this).parents($(".col-md-4")).addClass("flipped");
  btnGroup.style.visibility = "hidden";
});

flipButtonFront.click(function () {
  $(this).removeClass("flipped");
  btnGroup.style.visibility = "visible";
});

villainButton.click(function () {
  cardWhole.addClass("flipped");
});

// SCRATCH
