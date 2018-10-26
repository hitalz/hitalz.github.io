// Variables
var open = "img/icns/ht-burger-icon.svg";
var close = "img/icns/ht-close-icon.svg";

// Closes sidebar menu
$(".menu-toggle").click(function(e) {
  e.preventDefault();
  $("#sidebar-wrapper").toggleClass("active");

  //Toggles sidebar open-close icon
  if ($(".open-icon").attr("src") === open) {
    $(".open-icon").attr("src", close);
  } else {
    $(".open-icon").attr("src", open)
  }

  $(this).toggleClass("active");
});
