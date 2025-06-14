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

function openPopup(title) {
  const width = 500;
  const height = 400;
  const left = (window.screen.width - width) / 2;
  const top = (window.screen.height - height) / 2;
  const popup = window.open('', title, `width=${width},height=${height},top=${top},left=${left}`);
  popup.document.write(`
    <html><head><title>${title}</title></head>
    <body style="margin:0;display:flex;justify-content:center;align-items:center;height:100vh;font-family:sans-serif;">
      <h2>${title} 상세 내용</h2>
    </body></html>
  `);
}


