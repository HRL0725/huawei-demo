window.addEventListener('load', function() {
    var sliderbar = document.querySelector('.slider_bar');
    var goback = document.querySelector('.goback');
    document.addEventListener('scroll', function() {
        if (window.pageYOffset >= 172) {
            sliderbar.style.position = 'fixed';
        } else {
            sliderbar.style.position = 'absolute';
        }
        if (window.pageYOffset >= 300) {
            goback.style.display = 'block';
        } else {
            goback.style.display = 'none';
        }
    })
    goback.addEventListener('click', function() {
        window.scroll(0, 0);
    })
})