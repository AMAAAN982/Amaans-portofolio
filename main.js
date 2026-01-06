let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("header-scrolled")
        console.log("scroll working")

    } else {
        nav.classList.remove("header-scrolled")
    }
}