const initSlider = () => {
    const imageList = document.querySelector(".minhasplantas .image-list");
    const slideButtons = document.querySelectorAll(".minhasplantas .slide-button");

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({  left: scrollAmount, behavior: "smooth"  });
        });
    });
}

window.addEventListener("load", initSlider);