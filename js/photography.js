var photography  = {
    "categories": [
        {
            "name": "nature",
            "photos": []
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
            "photos": []
        },
        {
            "name": "things",
            "photos": []
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
$(document).ready(function () {
    var $container = $('#container').imagesLoaded(function() {
        $container.isotope({
            // options
            itemSelector: '.item',
            sortBy: 'random',
            masonry: {
                columnWidth: '.item',
                gutter: 0
            }
        });
    });
});
