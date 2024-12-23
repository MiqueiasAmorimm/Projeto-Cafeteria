// Função para rolar suavemente para a seção desejada
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: "smooth", // Faz a rolagem suave
      block: "start", // Começa a rolagem no início da seção
    });
  }
}

// Adicionando eventos aos links do cabeçalho
document.addEventListener("DOMContentLoaded", function () {
  const homeLink = document.querySelector('nav a[href="#home"]');
  const sobreLink = document.querySelector('nav a[href="#sobre"]');
  const ambienteLink = document.querySelector('nav a[href="#ambiente"]');

  if (homeLink) {
    homeLink.addEventListener("click", function (event) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" }); // Rola para o topo da página
    });
  }

  if (sobreLink) {
    sobreLink.addEventListener("click", function (event) {
      event.preventDefault();
      scrollToSection("sobre"); // Chama a função para rolar para a seção 'sobre'
    });
  }

  if (ambienteLink) {
    ambienteLink.addEventListener("click", function (event) {
      event.preventDefault();
      scrollToSection("ambiente"); // Chama a função para rolar para a seção 'ambiente'
    });
  }
});
// Seleciona o vídeo
const video = document.getElementById("background-video");

// Altera a velocidade para 1.5x
video.playbackRate = 1.5;
