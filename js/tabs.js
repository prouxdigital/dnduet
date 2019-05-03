;(function() {
    const toggleTab = el => {
        if(el.classList.contains("is-active")) return;

        [].forEach.call(document.querySelectorAll(".panel-tabs a"), el => {
            el.classList.remove("is-active");
        });

        [].forEach.call(document.querySelectorAll(".panel-tab"), el => {
            el.classList.add("is-hidden");
        });

        el.classList.add("is-active");
        document.getElementById(el.dataset.target).classList.remove("is-hidden");
    };

    [].forEach.call(document.querySelectorAll(".panel-tabs a"), el => {
        el.addEventListener("click", e => {
            toggleTab(el);
            e.stopPropagation();
        });
    });
})();
