let currentSlide = 0;
let activeGroup = null;

window.addEventListener('scroll', () => {
  const section = document.getElementById('ability');
  const bars = document.querySelectorAll('.bar');

  if (section.getBoundingClientRect().top < window.innerHeight) {
    bars.forEach(bar => {
      const percent = bar.getAttribute('data-percent');
      bar.innerHTML = `<div style="width: ${percent}; height: 100%; background: #444; transition: width 2s;"></div>`;
    });
  }
});

function openPopup(category) {
  document.getElementById('popup').style.display = 'block';

  // 모든 슬라이드 그룹 숨기기
  document.querySelectorAll('.slides').forEach(group => {
    group.style.display = 'none';
  });

  // 해당 카테고리만 보여주고 슬라이드 변수 저장
  activeGroup = document.querySelector(`.category-${category}`);
  activeGroup.style.display = 'block';

  currentSlide = 0;
  showSlide(currentSlide);
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

function showSlide(index) {
  if (!activeGroup) return;

  const slides = activeGroup.querySelectorAll('.slide');

  if (index >= slides.length) currentSlide = 0;
  else if (index < 0) currentSlide = slides.length - 1;
  else currentSlide = index;

  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === currentSlide);
  });
}

function changeSlide(direction) {
  showSlide(currentSlide + direction);
}
