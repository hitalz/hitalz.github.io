// Dark mode
$(document).ready(function() {
  $("#background-control").change(function() {
    if ($(this).prop('checked')) {
      $('body').addClass('dark-mode');
    } else {
      $('body').removeClass('dark-mode');
    }
  });
});

//Make objects resizable
$(document).ready(function() {
  $(function() {
    $("#actual-draggable-object-one").resizable({
      containment: "document",
      aspectRatio: true,
      autoHide: true,
      ghost: true
    });
    $("#actual-draggable-object-two").resizable({
      containment: "document",
      aspectRatio: true,
      autoHide: true,
      ghost: true
    });
    $("#actual-draggable-object-three").resizable({
      containment: "document",
      aspectRatio: true,
      autoHide: true,
      ghost: true
    });
    $("#actual-draggable-object-four").resizable({
      containment: "document",
      aspectRatio: true,
      autoHide: true,
      ghost: true
    });
    $("#actual-draggable-object-five").resizable({
      containment: "document",
      aspectRatio: true,
      autoHide: true,
      ghost: true
    });
    $("#actual-draggable-object-six").resizable({
      containment: "document",
      aspectRatio: true,
      autoHide: true,
      ghost: true
    });
    $('#actual-draggable-object-seven').resizable({
      containment: "document",
      aspectRatio: true,
      autoHide: true,
      ghost: true
    });
  });
});

// Make objects draggable
$(document).ready(function () {
  $(function() {
    $("#draggable-object-one").draggable({
      scroll: false
    });
    $("#draggable-object-two").draggable({
      scroll: false
    });
    $("#draggable-object-three").draggable({
      scroll: false
    });
    $("#draggable-object-four").draggable({
      scroll: false
    });
    $("#draggable-object-five").draggable({
      scroll: false
    });
    $("#draggable-object-six").draggable({
      scroll: false
    });
    $('#draggable-object-seven').draggable({
      scroll: false
    });
  });
});

//play video when mouse is over
$(document).ready(function() {
  $(".video").mouseover(function() {
    $(this).trigger('play');
  });
  $(".video").mouseleave(function() {
    $(this).trigger('pause');
  });
});