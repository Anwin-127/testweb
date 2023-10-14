window.addEventListener('scroll',function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 10);
});

const themeToggle = document.getElementById('themeToggle');
let isDarkMode = true;
themeToggle.addEventListener('click', () => {
    if (isDarkMode) {
        var root = document.querySelector(':root');
        root.style.setProperty('--bg-color','white')
        root.style.setProperty('--text-color','black')
        themeToggle.src = 'moon.png';
        isDarkMode = false;
    } else {
        var root = document.querySelector(':root');
        root.style.setProperty('--bg-color','black')
        root.style.setProperty('--text-color','white')
        themeToggle.src = 'sun.png';
        isDarkMode = true;
    }
});