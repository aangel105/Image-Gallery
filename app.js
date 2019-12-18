function day() {
  $("body").addClass("day");
  $("h1").addClass("regular");
  $("span").addClass("regular");
  $("#btn-night").css("color", "black");
  $("#btn-day").css("color", "black");
  $("p").css("color", "black");
  $(".footer").css("backgroundColor", "white");
}

function night() {
  $("#btn-day").css("color", "white");
  $("#btn-night").css("color", "white");
  $("p").css("color", "white");
  $(".footer").css("backgroundColor", "black");
  $("h1").removeClass("regular");
  $("body").removeClass("day");
  $("span").removeClass("regular");
}

$(document).ready(function() {
  $(function() {
    $("#btn-night").click(function() {
      night();
    });

    $("#btn-day").click(function() {
      day();
    });
  });
});
