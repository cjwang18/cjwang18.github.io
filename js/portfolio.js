// Use Handlebars templating to fill in portfolio content
$(function() {
    var source   = $("#section-template").html(),
        template = Handlebars.compile(source);
    var context  = {
        "sections": [
            {
                "custom": "<h1>Scroll Down</h1>"
            },
            {
                "title": "GreekLink",
                "desc": "is an innovative way for members of fraternities and sororities to network both socially and professionally.",
                "img": "gl_sign_in_8_9_13.png"
            },
            {
                "title": "Bureau of Street Services",
                "desc": "home page, redesigned for the 21st century, with responsive support.",
                "link": "http://bss.lacity.org",
                "img": "bssNewHomePage-desktop.png"
            },
            {
                "title": "A Media Aggregator",
                "desc": "dynamically presents different content from YouTube, Vimeo, 500px, Hype Machine, and even news, weather and restaurant suggestions! Check it out!",
                "link": "http://cjwang18.github.io/media-aggregator",
                "img": "media_aggregator_1.jpg"
            },
            {
                "title": "Weather or Not",
                "desc": "beautifully displays the weather forecast.",
                "img": "weatherOrNot.png"
            },
            {
                "title": "LABSS",
                "desc": "links Angelenos with the services and information they need to enjoy their city, beautify their community and stay connected with their local government.",
                "link": "https://play.google.com/store/apps/details?id=org.lacity.bss.streets",
                "img": "LABSS.png"
            },
            {
                "title": "Super Ball",
                "desc": "is a futuristic C#/XNA puzzle solver game with a unique dual-perspective mode: 3rd person mode to build level and 1st person mode to complete it.",
                "link": "https://github.com/laurencerwong/superball",
                "img": "superball.png"
            },
            {
                "custom": "<div class='details'><h1>Roller Coaster</h1><p>is simulated with OpenGL in C.</p></div><div class='graphics'><iframe src='//player.vimeo.com/video/37723394' width='500' height='375' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>"
            }
        ]
    },
        html = template(context);

    $("#fullPage").append(html);
});

// Use fullPage to render portfolio content
$(document).ready(function () {
    $('#fullPage').fullpage({
        slidesColor: ['#efefef', '#F3B562', '#FFFFFF', '#44B2E5', 'whitesmoke', 'whitesmoke', '#ccddff', 'whitesmoke'],
        anchors: ['ScrollDown', 'GreekLink', 'BSS', 'MediaAggregator', 'WeatherOrNot', 'LABSS', 'SuperBall', 'RollerCoaster'],
        navigation: true,
        navigationPosition: 'left',
        easing: 'easeInOutQuad',
        onLeave: function (index, nextIndex, direction) {
            // scroll header up to hide
            if (index === 1 && direction === "down")
                $("header").removeClass("nav-down").addClass("nav-up");
            // scroll header back down to show
            if (nextIndex === 1 && direction === "up")
                $("header").removeClass("nav-up").addClass("nav-down");
        }
    });
});
