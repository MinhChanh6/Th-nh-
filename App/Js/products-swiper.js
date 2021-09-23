/* Products Swiper */
const productsWrap = document.querySelectorAll(".products-farther");
productsWrap.forEach((el) => {
    const productsPrev = el.querySelector(".swiper-button-prev");
    const productsNext = el.querySelector(".swiper-button-next");

    const productsSwiper = new Swiper(".productsSwiper", {
        slidesPerView: 'auto',
        // autoplay: {
        //     delay: 5000
        // },
        loop: true,
        navigation: {
            nextEl: productsNext,
            prevEl: productsPrev,
        },
    })
})
