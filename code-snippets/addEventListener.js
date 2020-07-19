document.addEventListener('keydown', (evt) => {
    evt = evt || window.event;
    let isEscape = false;
    if ("key" in evt) {

        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }

    if (isEscape) {
        parent.postMessage("Escape", "*");
    }

});