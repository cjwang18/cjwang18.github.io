$(document).ready(function () {
	$.fn.fullpage({
		slidesColor: ['#efefef', '#F3B562', '#FFFFFF', '#44B2E5', 'whitesmoke', 'whitesmoke', '#ccddff', 'whitesmoke'],
		anchors: ['ScrollDown', 'GreekLink', 'BSS', 'MediaAggregator', 'WeatherOrNot', 'LABSS', 'SuperBall', 'RollerCoaster'],
		navigation: true,
		navigationPosition: 'left',
		easing: 'easeInOutQuad',
		onLeave: function (index, nextIndex, direction) {
			// console.log("index: " + index + ", nextIndex: " + nextIndex + ", direction: " + direction);
			
			// scroll header up to hide
			if (index === 1 && direction === "down")
				$("header").removeClass("nav-down").addClass("nav-up");

			// scroll header back down to show
			if (nextIndex === 1 && direction === "up")
				$("header").removeClass("nav-up").addClass("nav-down");
		}
	});
});
