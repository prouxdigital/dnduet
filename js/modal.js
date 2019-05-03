;(function() {
    const toggleModal = isActive => {
        let modal = document.getElementById("editModal");
        if(isActive) {
            modal.classList.remove("is-active");
        } else {
            modal.classList.add("is-active");
        }
    };

    document.getElementById("editCharacter").addEventListener("click", e => {
        toggleModal(false);
        e.stopPropagation();
    });
    document.querySelector("#editModal .modal-background").addEventListener("click", e => {
        toggleModal(true);
        e.stopPropagation();
    });
    document.querySelector("#editModal .modal-close").addEventListener("click", e => {
        toggleModal(true);
        e.stopPropagation();
    });
})();
