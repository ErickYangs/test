window.onload = function () {
    setWidth();
    banner();
}

function setWidth() {
    var width = 0;
    $('.pro-tabs li').each(function (index, ele) {
        width += $(ele).outerWidth(true);
    });
    $('.pro-tabs').width(width);
}

function banner() {
    var banner = document.querySelector('.wjs-banner');
    var startX = 0;
    var moveX = 0;
    var distanceX = 0;
    banner.ontouchstart = function (e) {
        startX = e.targetTouches[0].clientX;
    }
    banner.ontouchmove = function (e) {
        moveX = e.targetTouches[0].clientX;
        distanceX = moveX - startX;
    }
    banner.ontouchend = function (e) {
        if (distanceX > 0) {
            $('.carousel').carousel('prev');
        }
        if (distanceX < 0) {
            $('.carousel').carousel('next');
        }
    }
}