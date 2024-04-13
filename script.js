//carrossel de imagens
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


// Abrir e fechar modal de documentos e camera
const modal = document.querySelector('.modal-foto')

function openModalFoto() {
  modal.classList.remove('active')
}

function closeModalFoto() {
  modal.classList.add('active')
}

// Chamar a função closeModalFoto() imediatamente ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
  closeModalFoto();
});




// Função para obter acesso à câmera e capturar uma foto
function capturePhoto() {
  // Opções para a captura de mídia
  const mediaOptions = { video: true };

  // Tenta obter o acesso à câmera
  navigator.mediaDevices.getUserMedia(mediaOptions)
      .then(function(stream) {
          // Sucesso ao obter acesso à câmera
          const track = stream.getVideoTracks()[0]; // Obtém o primeiro track de vídeo do fluxo
          const imageCapture = new ImageCapture(track); // Cria um objeto ImageCapture com o track de vídeo

          // Captura uma foto
          imageCapture.takePhoto()
              .then(function(blob) {
                  // Sucesso ao capturar a foto
                  const imageUrl = URL.createObjectURL(blob); // URL da foto capturada
                  // Exibe a foto em algum lugar da página, por exemplo:
                  const imgElement = document.createElement('img');
                  imgElement.src = imageUrl;
                  document.body.appendChild(imgElement);

                  // Encerra o acesso à câmera após capturar a foto
                  track.stop();
              })
              .catch(function(error) {
                  // Ocorreu um erro ao capturar a foto
                  console.error('Error capturing photo:', error);
              });
      })
      .catch(function(error) {
          // Ocorreu um erro ao tentar obter acesso à câmera
          console.error('Error accessing the camera:', error);
      });
}

// Chamada da função para capturar uma foto
capturePhoto();

  


