export default function createMenu() {
    //******** OPEN MENU HANDLE  ********// 

    const navOverlay = document.querySelector(".nav-overlay");
    const menu = document.querySelector(".menu");
    const menuChild = document.querySelectorAll(".has-child > a > i");
    menuChild.forEach((el, index) => {
        el.addEventListener("click", () => {
            const subMenus = document.querySelectorAll(".menu-child")
            const subMenu = subMenus[index];
            subMenu.classList.toggle("show")
        })
    })
    // Hide Nav After Click // 
    const menuNoChildItems = document.querySelectorAll(".menu-item.no-child > .menu-link");
    menuNoChildItems.forEach((el) => {
        el.addEventListener("click", () => {
            hideNav();
        })
    })
    const menuHasChildItems = document.querySelectorAll(".menu-child-link")
    menuHasChildItems.forEach((el) => {
        el.addEventListener("click", () => {
            hideNav();
        })
    })
    // Open menu handle //
    const btn = document.querySelector(".nav-burger");
    btn.addEventListener("click", () => {
        btn.querySelectorAll("span").forEach((span) => span.classList.toggle("open"));
        navOverlay.style.transition = "all 0.4s linear";
        navOverlay.classList.toggle("open");
        menu.classList.toggle("show");
        menu.style.transition = "0.4s linear 0.2s";
        $('body').toggleClass('no-scroll');
    });

    // hide nav after clicked outside of nav
    navOverlay.addEventListener("click", (e) => {
        hideNav();
        $('body').removeClass('no-scroll');
    })

    function hideNav() {
        menu.style.transition = "all 0.4s linear";
        menu.classList.remove("show");
        navOverlay.style.transition = "0.4s linear 0.2s";
        navOverlay.classList.remove("open");
        btn.querySelectorAll("span").forEach((span) => span.classList.remove("open"));
        $('body').removeClass('no-scroll');
    }

    //******** FIXED NAV WHEN SCROLL ********//
    var lastScrollTop = 0;
    const navFix = document.querySelector(".nav")
    const header = document.querySelector(".header")
    const headerTop = document.querySelector(".header-top")
    // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
    window.addEventListener("scroll", () => { // or window.addEventListener("scroll"....
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop) {
            headerTop.classList.add('active')
            headerTop.classList.remove('show')
            navFix.classList.add('active', 'scroll-header',)
        } else {
            headerTop.classList.remove('active')
            headerTop.classList.add('show')
            navFix.classList.remove('active', 'scroll-header')
        }
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    }, false);
}