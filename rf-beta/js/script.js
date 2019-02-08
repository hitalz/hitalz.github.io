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

//drag
$(document).ready(function() {
  $(function() {
    $("#actual-draggable-object-one").resizable({
      containment: "document",
      aspectRatio: true,
      autoHide: true,
      ghost: true
    });
    $("#actual-draggable-object-two").resizable({
      aspectRatio: 16 / 9,
      ghost: true
    });
    $("#actual-draggable-object-three").resizable({
      aspectRatio: 1/1 ,
      ghost: true
    });
    $("#actual-draggable-object-four").resizable({
      aspectRatio: 16 / 9,
      ghost: true
    });
    $("#actual-draggable-object-five").resizable({
      aspectRatio: 16 / 9,
      ghost: true
    });
    $("#actual-draggable-object-six").resizable({
      aspectRatio: 16 / 9,
      ghost: true
    });
    $('#actual-draggable-object-seven').resizable({
      aspectRatio: 16 / 9,
      ghost: true
    });
  });
});
$(document).ready(function () {
  $(function() {
    $("#draggable-object-one").draggable();
    $("#draggable-object-two").draggable();
    $("#draggable-object-three").draggable();
    $("#draggable-object-four").draggable();
    $("#draggable-object-five").draggable();
    $("#draggable-object-six").draggable();
    $('#draggable-object-seven').draggable();
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

// $(document).ready(function () {
//   $('.story-small img').each(function () {
//     var maxWidth = 100; // Max width for the image
//     var maxHeight = 100;    // Max height for the image
//     var ratio = 0;  // Used for aspect ratio
//     var width = $(this).width();    // Current image width
//     var height = $(this).height();  // Current image height

//     // Check if the current width is larger than the max
//     if (width > maxWidth) {
//       ratio = maxWidth / width;   // get ratio for scaling image
//       $(this).css("width", maxWidth); // Set new width
//       $(this).css("height", height * ratio);  // Scale height based on ratio
//       height = height * ratio;    // Reset height to match scaled image
//       width = width * ratio;    // Reset width to match scaled image
//     }

//     // Check if current height is larger than max
//     if (height > maxHeight) {
//       ratio = maxHeight / height; // get ratio for scaling image
//       $(this).css("height", maxHeight);   // Set new height
//       $(this).css("width", width * ratio);    // Scale width based on ratio
//       width = width * ratio;    // Reset width to match scaled image
//     }
//   });
// });