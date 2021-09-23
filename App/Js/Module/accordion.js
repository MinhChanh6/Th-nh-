export default function createAccordion() {

    const accordions = document.querySelectorAll(".accordion");
    const icons = document.querySelectorAll(".bxs-chevron-up");
    accordions.forEach((accordion, index) => {
        const icon = icons[index];
        accordion.addEventListener("click", () => {
            accordion.classList.toggle("active");
            if (icon.classList.contains("bxs-chevron-up")) {
                icon.classList.remove("bxs-chevron-up")
                icon.classList.add("bxs-chevron-down")
            } else {
                icon.classList.add("bxs-chevron-up")
            }
        })
    })
}
