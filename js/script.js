
// NUMBERS 
(() => {
    const counter = document.querySelectorAll('.counter');
    // covert to array
    const array = Array.from(counter);
    // select array element
    array.map((item) => {
        // data layer
        let counterInnerText = item.textContent;

        let count = 15;
        let speed = item.dataset.speed / counterInnerText
        function counterUp() {
            item.textContent = count++
            if (counterInnerText < count) {
                clearInterval(stop);
            }
        }
        const stop = setInterval(() => {
            counterUp();
        }, speed);
    })
})()

// TESTMONIAL 
$(document).ready(function () {

    $("#owl-demo").owlCarousel({
        navigation: true, 
        slideSpeed: 300,
        paginationSpeed: 400,
        items: 2,
        itemsDesktop: false,
        itemsDesktopSmall: false,
        itemsTablet: false,
        itemsMobile: false,
        loop:true,
        autoplay:true
    });
<<<<<<< HEAD
});
=======
});
>>>>>>> f9316cbcaecb48c0b7083a86205dbd2d815aae83
