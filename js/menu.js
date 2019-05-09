;(function() {
    const toggle = document.getElementById("game-toggle");
    const menu = document.getElementById("game-menu");

    toggle.addEventListener("click", function() {
        console.log("click");
        menu.classList.toggle("is-active");
    });
})();
