const page = document.body;

function toggleDarkMode(target, checked) {
    const customEvent = new CustomEvent(
        "dark-mode:toggle", {
            bubbles: true,
            detail: {checked},
        }
    );
    target.dispatchEvent(customEvent);
}

document.body.addEventListener(
    "dark-mode:toggle",
    (event) => {
        const page = event.currentTarget;
        const checked = event.detail.checked;
        page.classList.toggle("dark-mode", checked);
    }
);