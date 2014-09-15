var imageArr = getRandomizedSlideshowImages();

// lazy loading
var f = imageArr[0],
    n = new Image;
n.onerror = function() {
    console.log("error loading image");
};
n.onload = function() {
    // start slideshow passing only the first image
    $.backstretch([f], {
        fade: 700,
        duration: 10000
    });
    // push more images a second before they appear (error accumulates)
    var instance = $('body').data('backstretch');
    // console.log(instance);
    var imgCount = 0;
    var timer = setInterval(function() {
        ++imgCount;
        // console.log(imgCount);
        // console.log(instance);
        if (imgCount === (imageArr.length - 1)) clearInterval(timer);
        instance.images.push(imageArr[imgCount]);
    }, 9000);
    var restart = setInterval(function() {
        // console.log("restarting");
        $('body').backstretch('next');
        clearInterval(restart);
    }, 10000);
};
n.src = f;

$(function() {
    function toggleClassOnSwipe() {
        var active = 'active';
        $('#layout').toggleClass(active);
        $('#menu').toggleClass(active);
        $('#menuLink').toggleClass(active);
    }
    //Enable swiping...
    $("#menuLink").swipe({
        swipeLeft: function() {
            toggleClassOnSwipe();
        },
        swipeRight: function() {
            toggleClassOnSwipe();
        },
        threshold: 10
    });
});
