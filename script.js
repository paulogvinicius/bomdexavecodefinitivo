// ---------------------- SLIDER ----------------------
const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'));
}

function showSlider() {
  slider[currentSlide].classList.add('on');
}

function nextSlider() {
  hideSlider();
  currentSlide = (currentSlide + 1) % slider.length;
  showSlider();
}

function prevSlider() {
  hideSlider();
  currentSlide = (currentSlide - 1 + slider.length) % slider.length;
  showSlider();
}

if(btnNext) btnNext.addEventListener('click', nextSlider);
if(btnPrev) btnPrev.addEventListener('click', prevSlider);

// ---------------------- SCROLL SUAVE ----------------------
const destino = document.getElementById("btn-duvidas");

// todos os botões/links que devem rolar
const botoesScroll = document.querySelectorAll(".scroll-btn");

botoesScroll.forEach(botao => {
  botao.addEventListener("click", (e) => {
    e.preventDefault();
    if(destino){
      destino.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });
});

  const imgs = document.querySelectorAll(".depoimento-img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".lightbox .close");

  imgs.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  // Fechar clicando fora da imagem
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
