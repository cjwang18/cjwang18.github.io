var imageArr = getRandomizedSlideshowImages();
$.backstretch(imageArr, {
	fade: 750,
	duration: 10000
});

$(document).ready(function () {
	var links = '<a href="javascript:void(0);">home</a> <a target="_blank" href="http://twnas.myds.me/~c707h3j/">photography</a> <a target="_blank" href="http://vimeo.com/c707h3j">cinematography</a> <a href="./portfolio/">portfolio</a>';
	$("#linkContainer,#menu").click(function (e) {
		if ($("#links").html() == "cj") {
			$("#links").html(links);
			$(".fullName").addClass("grayed");
			if (e.stopPropagation) e.stopPropagation();
		} else {
			$("#links").html("cj");
			$(".fullName").removeClass("grayed");
			if (e.stopPropagation) e.stopPropagation();
		}
	});
});