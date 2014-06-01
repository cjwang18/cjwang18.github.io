$(document).ready(function () {
	$.fn.fullpage({
		//slidesColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', '#ccddff', 'whitesmoke'],
		//slidesColor: ['#efefef', '#FFAE4C', '#44B2E5', '#ccddff', 'whitesmoke'],
		slidesColor: ['#efefef', '#F3B562', '#FFFFFF', '#44B2E5', 'whitesmoke', 'whitesmoke', '#ccddff', 'whitesmoke'],
		anchors: ['ScrollDown', 'GreekLink', 'BSS', 'MediaAggregator', 'WeatherOrNot', 'LABSS', 'SuperBall', 'RollerCoaster'],
		paddingTop: '25px',
		navigation: true,
		navigationPosition: 'left'
	});
});