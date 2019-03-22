$(function(){
	$(".title").typed({
		strings: [
		"hector torres",
		],
		typeSpeed: 40,
		showCursor: false,
	})
})


// Dark mode
$(document).ready(function () {
	$("#background-control").change(function () {
		if ($(this).prop('checked')) {
			$('body').addClass('dark-mode');
		} else {
			$('body').removeClass('dark-mode');
		}
	});
});