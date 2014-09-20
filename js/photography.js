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

// Use Handlebars templating to fill in photography HTML content
$(function() {
    var source   = $("#photo-template").html(),
        template = Handlebars.compile(source);
    var html = template(photography);

    $("#container").append(html);
});

// Use isotope to render photography content
// $(document).ready(function () {
$(function() {
    var $container = $('#container').imagesLoaded(function() {
        $container.isotope({
            // options
            itemSelector: '.item',
            sortBy: 'random',
            animationEngine: 'best-available',
            masonry: {
                columnWidth: '.item',
                gutter: 0
            }
        });
    });
    // filter items
    $('a.filter').click(function() {
        var filterValue = $(this).attr('data-filter');
        $container.isotope({ filter: filterValue });
    });
});
