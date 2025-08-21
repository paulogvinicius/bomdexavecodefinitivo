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
