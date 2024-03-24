const initSlider = () => {
    const imageList = document.querySelector(".minhasplantas .image-list");
    const slideButtons = document.querySelectorAll(".minhasplantas .slide-button");


    //carrossel de imagens de acordo com os botões de click
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({  left: scrollAmount, behavior: "smooth"  });
        });
    });
}

window.addEventListener("load", initSlider);


//fazer a section-home sumir a medida que página rola
window.addEventListener('scroll', function() {
    var sectionHome = document.querySelector('.section-home');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        sectionHome.classList.add('hidden');
    } else {
        sectionHome.classList.remove('hidden');
    }
});


