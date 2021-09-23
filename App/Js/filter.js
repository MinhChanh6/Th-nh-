const filterIcon = document.querySelector(".collections-heading");
const contentActive = document.querySelector(".collections-col3");

if (filterIcon) {
    filterIcon.addEventListener("click", () => {
        if (contentActive.classList.contains("active")) {
            contentActive.classList.remove("active")
        }
        else {
            contentActive.classList.add("active")
        }
    });
}

