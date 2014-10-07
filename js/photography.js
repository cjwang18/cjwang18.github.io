var photography  = {
    "categories": [
        {
            "name": "nature",
            "photos": [
                {
                    "fileNum": "6939",
                    "fromSlideshow": true
                },
                {
                    "fileNum": "7484",
                    "fromSlideshow": true
                },
                {
                    "fileNum": "9055",
                    "fromSlideshow": true
                },
                {
                    "fileNum": "9113",
                    "fromSlideshow": true
                },
                {
                    "fileNum": "9157",
                    "fromSlideshow": true
                },
                {
                    "fileNum": "9292",
                    "fromSlideshow": true
                },
                {
                    "fileNum": "9522",
                    "fromSlideshow": true
                },
            ]
        },
        {
            "name": "people",
            "photos": [
                {
                    "fileNum": "5912",
                    "fromSlideshow": true
                },
                {
                    "fileNum": "5980",
                    "fromSlideshow": true
                },
                {
                    "fileNum": "7673",
                    "fromSlideshow": true
                },
                {
                    "fileNum": "8177",
                    "fromSlideshow": true
                }
            ]
        },
        {
            "name": "places",
            "photos": [
                {
                    "fileNum": "0156",
                    "fromSlideshow": true
                },
                {
                    "fileNum": "0684",
                    "fromSlideshow": true
                },
                {
                    "fileNum": "1362",
                    "fromSlideshow": true
                },
                {
                    "fileNum": "1373",
                    "fromSlideshow": true
                },
                {
                    "fileNum": "1417",
                    "fromSlideshow": true
                },
                {
                    "fileNum": "1442",
                    "fromSlideshow": true
                },
                {
                    "fileNum": "7934",
                    "fromSlideshow": true
                },
                {
                    "fileNum": "8977",
                    "fromSlideshow": true
                },
                {
                    "fileNum": "9220",
                    "fromSlideshow": true
                },
                {
                    "fileNum": "9330",
                    "fromSlideshow": true
                },
                {
                    "fileNum": "9400",
                    "fromSlideshow": true
                },
                {
                    "fileNum": "9886",
                    "fromSlideshow": true
                },
            ]
        },
        {
            "name": "things",
            "photos": [
                {
                    "fileNum": "6761",
                    "fromSlideshow": true
                },
                {
                    "fileNum": "6800",
                    "fromSlideshow": true
                },
                {
                    "fileNum": "8989",
                    "fromSlideshow": true
                },
                {
                    "fileNum": "9464",
                    "fromSlideshow": true
                },
            ]
        }
    ]
};

$(function() {
    // Use Handlebars templating to fill in photography HTML content
    var source   = $("#photo-template").html(),
        template = Handlebars.compile(source);
    var html = template(photography).split(",");
    html.pop(); // remove extra whitespace element from array
    var itemArr = shuffleArray(html);

    var i = 0;
    var items = getItemsHTML(i, determineNumItems(), itemArr, function(count) {
        i += count;
    });
    $('#container').append(items);

    // Use isotope to render photography content
    var $loading = $('#loading'),
        $container = $('#container').imagesLoaded(function() {
        // initialize isotope
        $container.isotope({
            // options
            itemSelector: '.item',
            animationEngine: 'best-available',
            masonry: {
                columnWidth: '.grid-sizer',
                gutter: '.gutter-sizer'
            }
        });
        // call layout to fix gutter
        $container.isotope('layout');
        // fade-in
        $('#container').animate({opacity: 1.0}, 250);
        $loading.animate({opacity: 0}, 250);
    });

    // filter items
    $('a.filter').click(function() {
        var filterValue = $(this).attr('data-filter');
        $container.isotope({ filter: filterValue });
        // shuffle items if "all categories" chosen
        if (filterValue === "*") {
            $container.isotope('shuffle');
        }
    });

    // custom infinite scrolling implementation
    $(window).scroll(function() {
        // only proceed if there are more images to insert
        if (i < itemArr.length) {
            if ($(window).scrollTop() == $(document).height() - $(window).height()) {
                $loading.css({opacity: 1.0});
                $('body').append('<div id="tempLoad"></div>');
                // insert the HTML of new images to temporary div
                items = getItemsHTML(i, determineNumItems(), itemArr, function(count) {
                    i += count;
                });
                $('#tempLoad').append(items);
                // reduce opacity for animation purposes
                $('#tempLoad').children().css({
                    opacity: 0
                });
                // add images to isotope and animate in once they have loaded
                var temp = $('#tempLoad').html();
                $('#tempLoad').imagesLoaded(function() {
                    $container.isotope('insert', $(temp), function() {
                        $container.children().css({ opacity: 1 });
                    });
                    $container.isotope('layout');
                    $loading.animate({opacity: 0}, 250);
                });
                // cleanup the temporary div
                $('#tempLoad').remove();
            }
        }
    });
});

/**
 * Essentially acting as a hash table,
 * returns the number of elements (isotope items)
 * that should be added to the page based
 * on the current window width.
 */
function determineNumItems() {
    $('body').css('overflow', 'hidden');
    var w = $(window).width();
    $('body').css('overflow', 'auto');
    if (w < 568) {
        return 3;
    } else if (w >= 568 && w < 1024) {
        return 6;
    } else if (w >= 1024 && w < 1280) {
        return 9;
    } else {
        return 16;
    }
}

/**
 * Returns concatenated HTML string of
 * n items from array arr starting at
 * position i.
 */
function getItemsHTML(i, n, arr, callback) {
    var l = i + n;
    var html = "";
    while ((i < l) && (i < arr.length)) {
        // console.log('i: ' + i);
        // console.log('l: ' + l);
        // console.log('arr.length: ' + arr.length);
        html += arr[i];
        i++;
    }
    callback((n - (l - i)));
    return html;
}

/**
 * Randomize array element order in-place.
 * Using Fisher-Yates shuffle algorithm.
 * http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
