var widthThreshold = 1020;
var speed = 3.0;

var readProgress = 0.0;

const WIDTH = 1;
const HEIGHT = 0;

var displayStyle = 0;

window.onload = function () {

    // a # smooth scroll
    (function () {
        var allATag = document.querySelectorAll('a[href]');
        for (var i = 0; i < allATag.length; ++i) {
            var currentNode = allATag[i];
            if (currentNode.hash.indexOf('#') === 0) {
                currentNode.addEventListener('click', function (e) {
                    e.preventDefault();
                    document.getElementById(this.hash.substring(1)).scrollIntoView({
                        behavior: 'smooth'
                    });
                }, false);
            }
        }
    })();

    // disable horizon scroll inside articles
    (function () {
        var articles = document.querySelectorAll('article');
        for (var i = 0; i < articles.length; ++i) {
            articles[i].addEventListener('mousewheel', function (e) {
                if (!((e.wheelDelta < 0 && this.offsetHeight + this.scrollTop === this.scrollHeight) || (e.wheelDelta > 0 && this.scrollTop === 0))) {
                    e.stopPropagation();
                }
            })
        }
    })();

    // wheel scroll
    document.addEventListener('mousewheel', function (e) {
        e.preventDefault();
        if (document.body.clientWidth > widthThreshold) {
            window.scrollBy({
                top: 0,
                left: -e.wheelDelta * speed,
                behavior: 'smooth'
            });
        } else {
            window.scrollBy({
                top: -e.wheelDelta * speed,
                left: 0,
                behavior: 'smooth'
            });
        }
    });

    document.addEventListener('scroll', function (e) {
        if (displayStyle === (window.document.body.clientWidth > 1020)) {
            if (document.body.clientWidth > widthThreshold) {
                readProgress = document.documentElement.scrollLeft / document.documentElement.scrollWidth;
            } else {
                readProgress = document.documentElement.scrollTop / document.documentElement.scrollHeight;
            }
        }
    });

    // document resize
    window.onresize = function (e) {
        if ((window.document.body.clientWidth > 1020) ^ displayStyle) {
            displayStyle = document.body.clientWidth > 1020;
            window.scrollTo({
                top: displayStyle ? 0 : readProgress * document.documentElement.scrollHeight,
                left: displayStyle ? readProgress * document.documentElement.scrollWidth : 0,
                behavior: 'smooth'
            });
        }
    };

    if (window.document.body.clientWidth > 1020) {
        displayStyle = WIDTH;
    }

};