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




// Função para obter acesso à mídia do usuário
function getUserMedia(options, successCallback, failureCallback) {
    // Verifica se o navegador suporta diferentes formas de acesso à mídia
    var api = navigator.getUserMedia || navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia || navigator.msGetUserMedia;
    // Se uma API de acesso à mídia estiver disponível, ela é usada para obter o acesso
    if (api) {
      return api.bind(navigator)(options, successCallback, failureCallback);
    }
  }
  
  // Variável para armazenar o fluxo de vídeo capturado
  var theStream;
  
  // Função para capturar uma foto do vídeo da câmera
  function takePhoto() {
    // Verifica se a API ImageCapture é suportada pelo navegador
    if (!('ImageCapture' in window)) {
      alert('ImageCapture is not available'); // Alerta se a API não for suportada
      return;
    }
    
    // Verifica se o fluxo de vídeo já foi capturado
    if (!theStream) {
      alert('Grab the video stream first!'); // Alerta para capturar o vídeo antes de tirar uma foto
      return;
    }
    
    // Cria um objeto ImageCapture com o primeiro track de vídeo do fluxo
    var theImageCapturer = new ImageCapture(theStream.getVideoTracks()[0]);
  
    // Chama a função takePhoto() para capturar uma foto
    theImageCapturer.takePhoto()
      .then(blob => {
        var theImageTag = document.getElementById("imageTag");
        // Exibe a foto capturada no elemento <img> na página
        theImageTag.src = URL.createObjectURL(blob);
      })
      .catch(err => alert('Error: ' + err)); // Alerta em caso de erro durante a captura da foto
  }
  


