
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
    thumbs: {
        swiper: swiper,
    },
});