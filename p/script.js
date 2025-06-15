window.addEventListener('scroll', () => {
  const section = document.getElementById('ability');
  const bars = document.querySelectorAll('.bar');

  if (section.getBoundingClientRect().top < window.innerHeight) {
    bars.forEach(bar => {
      const percent = bar.getAttribute('data-percent');
      bar.querySelector('::after'); // for visual
      bar.innerHTML = `<div style="width: ${percent}; height: 100%; background: #444; transition: width 2s;"></div>`;
    });
  }
});

let currentSlide = 0;

function openPopup() {
  document.getElementById('popup').style.display = 'block';
  showSlide(currentSlide);
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  if (index >= slides.length) currentSlide = 0;
  else if (index < 0) currentSlide = slides.length - 1;
  else currentSlide = index;

  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === currentSlide) slide.classList.add('active');
  });
}

function changeSlide(direction) {
  showSlide(currentSlide + direction);
}

