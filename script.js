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



// Chama a função para carregar os casos quando a página for carregada
document.addEventListener("DOMContentLoaded", function() {
  loadMinhasPlantas();
});

// Cria a div "mp" puxando informações do json
function loadMinhasPlantas() {
  fetch("minhasplantas.json")
  .then(response => response.json())
  .then(data => {
    const casesContainer = document.querySelector(".image-list");
    casesContainer.innerHTML = ""; // Limpa a lista

    data.forEach(caseItem => {
      const div = document.createElement("div");
      div.className = "mp";
      div.innerHTML = `<div class="capa">
                          <div class="capaimg">
                          <img src="${caseItem.capa}" alt="Capa">
                          </div>
                          <div class="coracaov">
                          <img src="assets/corev.png" alt="Coração vermelho">
                          </div>
                      </div>
                      <div class="titulo">
                          <div class="iplanta">
                              <img src="assets/planta.png" alt="Ícone de planta">
                          </div>
                          <div class="tplanta">
                              <h3>${caseItem.title}</h3>
                          </div>
                      </div>
                      <div class="infos">
                          <div class="icones">
                              <img src="assets/sol.png" alt="Ícone de sol">
                          </div>
                          <div class="infosp">
                              <h4>${caseItem.luz}</h4>
                          </div>
                      </div>
                      <div class="infos">
                          <div class="icones">
                              <img src="assets/gota.png" alt="Ícone de gota">
                          </div>
                          <div class="infosp">
                              <h4>${caseItem.agua}</h4>
                          </div>
                      </div>`;
      casesContainer.appendChild(div);
    });
  })
  .catch(error => {
    console.error("Erro ao carregar casos:", error);
  });
}

// Chama a função para carregar os casos quando a página for carregada
document.addEventListener("DOMContentLoaded", function() {
  loadNovasPlantas();
});

// Cria a div "np" puxando informações do json
function loadNovasPlantas() {
  fetch("novasplantas.json")
  .then(response => response.json())
  .then(data => {
    const casesContainer = document.querySelector(".novasplantas");
    casesContainer.innerHTML = ""; // Limpa a lista

    data.forEach(caseItem => {
      const div = document.createElement("div");
      div.className = "np";
      div.innerHTML = `<div class="capan">
                          <img src="${caseItem.capa}">
                      </div>
                      <div class="titulon">
                          <div class="coracaoc">
                              <img src="assets/corec.png">
                              </div>
                          <div class="tplantan">
                              <h3>${caseItem.title}</h3>
                          </div>
                      </div>`;
      casesContainer.appendChild(div);
    });
  })
  .catch(error => {
    console.error("Erro ao carregar casos:", error);
  });
}


function openCamera() {
  document.getElementById("captureInput").click();
}

document.getElementById("captureInput").addEventListener("change", function(event) {
  const file = event.target.files[0];
  const imageUrl = URL.createObjectURL(file);
  window.location.href = "form.html?image=" + imageUrl;
});


document.addEventListener("DOMContentLoaded", function() {
  const imgElement = document.getElementById("capturedImage");

  // Verificar se a URL da imagem foi fornecida na query string
  const urlParams = new URLSearchParams(window.location.search);
  const imageUrl = urlParams.get('image');

  if (imageUrl) {
      // Definir a URL da imagem capturada como src do elemento de imagem
      imgElement.src = imageUrl;
  } else {
      console.error("URL da imagem não fornecida.");
  }
});


function takePhoto() {
  if (!('ImageCapture' in window)) {
      alert('ImageCapture não está disponível neste navegador.');
      return;
  }

  navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
          const imageCapturer = new ImageCapture(stream.getVideoTracks()[0]);
          return imageCapturer.takePhoto();
      })
      .then(blob => {
          // Criar URL para a imagem capturada
          const imageUrl = URL.createObjectURL(blob);
          // Redirecionar para uma nova página HTML com a imagem
          window.location.href = "form.html";
      })
      .catch(err => {
          console.error('Erro ao capturar a foto:', err);
          if (err.name === 'NotAllowedError') {
              alert('Permissão para acessar a câmera não concedida.');
          } else if (err.name === 'NotFoundError' || err.name === 'OverconstrainedError') {
              alert('Não foi possível encontrar ou inicializar a câmera.');
          } else {
              alert('Erro ao capturar a foto: ' + err.message);
          }
      });
}




