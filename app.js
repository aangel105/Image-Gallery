function day() {
  $("body").addClass("day");
  $("#btn-night").css("color", "black");
  $("#btn-day").css("color", "black");
  $("h1").addClass("regular");
  $("span").addClass("regular");
  $("p").css("color", "black");
  $(".footer").css("backgroundColor", "white");
}

function night() {
  $("body").removeClass("day");
  $("#btn-day").css("color", "white");
  $("#btn-night").css("color", "white");
  $("h1").removeClass("regular");
  $("span").removeClass("regular");
  $("p").css("color", "white");
  $(".footer").css("backgroundColor", "black");
}

$(function() {
  $("#btn-night").click(function() {
    night();
  });

  $("#btn-day").click(function() {
    day();
  });
});
