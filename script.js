document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        var nav = document.querySelector("nav");
        nav.classList.toggle("scrolled", window.scrollY > 0);
    });
});
