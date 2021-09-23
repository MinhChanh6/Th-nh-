
/* Home Swiper */
var swiper = new Swiper(".homeSwiper", {
    speed: 800,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 5000,
    },
});
/* Charms */
window.onload = function () {
    const charmWrap = document.querySelector(".charm-farther");
    const charmPrev = charmWrap.querySelector(".swiper-button-prev");
    const charmNext = charmWrap.querySelector(".swiper-button-next");
    if (charmWrap) {
        var charmsSwiper = new Swiper(".charmsSwiper", {
            //loop: true,
            speed: 1200,
            slidesPerView: 'auto',
            autoplay: {
                delay: 5000
            },
            loop: true,
            navigation: {
                nextEl: charmNext,
                prevEl: charmPrev
            },

        });
    }
}
/* Related Swiper */
var relatedSwiper = new Swiper(".relatedSwiper", {
    //loop: true,
    speed: 1200,
    slidesPerView: 'auto',
    autoplay: {
        delay: 5000
    },
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

});
