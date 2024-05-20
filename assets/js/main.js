document.addEventListener("DOMContentLoaded", () => {
    const gridItems = document.querySelectorAll(".grid-item");

    const triggerAnimations = () => {
        gridItems.forEach(item => {
            item.classList.add("flash", "shake");
        });

        setTimeout(() => {
            gridItems.forEach(item => {
                item.classList.remove("flash", "shake");
            });
        }, 500);
    };

    window.addEventListener("scroll", () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            triggerAnimations();
        }
    });

    window.addEventListener("wheel", triggerAnimations);
    window.addEventListener("touchmove", triggerAnimations);
});
