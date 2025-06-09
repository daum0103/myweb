// 네비게이션 탭 클릭시 활성화
document.querySelectorAll('nav ul li').forEach(li => {
    li.addEventListener('click', () => {
        document.querySelector('nav ul .active')?.classList.remove('active');
        li.classList.add('active');
    });
});

// 5초 후 자동 스크롤
window.addEventListener('load', () => {
    setTimeout(() => {
        const aboutSection = document.getElementById('about');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    }, 5000); // 5초 후 실행
});


