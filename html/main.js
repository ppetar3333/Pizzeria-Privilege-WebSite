function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var StartPosition = window.pageYOffset;
    var distance = targetPosition - StartPosition;
    var startTime = null;

    function animation(currentTime) {
        if (startTime == null) startTime == currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, StartPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }


    requestAnimationFrame(animation)
}

var section1 = document.querySelector('.section1');
section1.addEventListener('click', function () {
    smoothScroll('.section2', 1000);
});
/* section1 is not defined (function does not work) */
/* need to be defined section1 */