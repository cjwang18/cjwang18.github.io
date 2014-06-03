var imageArr = getRandomizedSlideshowImages();

// lazy loading
var f = imageArr[0], n = new Image;
	n.onerror = function () {
		console.log("error loading image");
	};
	n.onload = function () {
		// start slideshow passing only the first image
		$.backstretch([f], {
			fade: 700,
			duration: 10000
		});
		// push more images a second before they appear (error accumulates)
		var instance = $('body').data('backstretch');
		// console.log(instance);
		var imgCount = 0;
		var timer = setInterval(function () {
			++imgCount;
			// console.log(imgCount);
			// console.log(instance);
			if (imgCount === (imageArr.length - 1)) clearInterval(timer);
			instance.images.push(imageArr[imgCount]);
		}, 9000);
		var restart = setInterval(function () {
			// console.log("restarting");
			$('body').backstretch('next');
			clearInterval(restart);
		}, 10000);
	};
	n.src = f;

$(document).ready(function () {
	var links = '<a href="javascript:void(0);">home</a> <a target="_blank" href="http://twnas.myds.me/~c707h3j/">photography</a> <a target="_blank" href="http://vimeo.com/c707h3j">cinematography</a> <a href="./portfolio/">portfolio</a>';
	$("#linkContainer,#menu").click(function (e) {
		if ($("#links").html() == "cj") {
			$("#links").html(links);
			$(".fullName").addClass("grayed");
			if (e.stopPropagation) e.stopPropagation();
		} else {
			// Prevent menu closing when clicking a link
			if (e.currentTarget.id != "linkContainer") {
				$("#links").html("cj");
				$(".fullName").removeClass("grayed");	
			}
			if (e.stopPropagation) e.stopPropagation();
		}
	});
});