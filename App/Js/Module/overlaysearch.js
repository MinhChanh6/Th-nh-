export default function createOverlaySearch() {
    const icon = document.querySelector(".search-icon2");
    const overLay = document.querySelector(".overlay");
    const closeIcon = document.querySelector(".overlay-close")
    icon.addEventListener("click", () => {
        overLay.style.transition = "all 0.4s linear";
        overLay.classList.toggle("active");
        $('body').toggleClass('no-scroll');
    })
    closeIcon.addEventListener("click", () => {
        overLay.classList.remove("active");
        $('body').removeClass('no-scroll');
    })
}