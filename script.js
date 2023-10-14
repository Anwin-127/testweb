window.addEventListener('scroll',function(){
    const header = document.querySelector('header');
    const themeToggle = document.getElementById('themeToggle');
    header.classList.toggle("sticky", window.scrollY > 0);
    themeToggle.classList.toggle("sticky", window.scrollY > 0);
});

let isDarkMode = true;
themeToggle.addEventListener('click', () => {
    if (isDarkMode) {
        var root = document.querySelector(':root');
        root.style.setProperty('--bg-color','white')
        root.style.setProperty('--text-color','black')
        themeToggle.src = 'moon.png';
        isDarkMode = false;
        root.style.setProperty('--list-color','black')
        root.style.setProperty('--switch-on','0')
        root.style.setProperty('--switch-off','1')
    } else {
        var root = document.querySelector(':root');
        root.style.setProperty('--bg-color','black')
        root.style.setProperty('--text-color','white')
        root.style.setProperty('--list-color','white')
        themeToggle.src = 'sun.png';
        isDarkMode = true;
        root.style.setProperty('--switch-on','1')
        root.style.setProperty('--switch-off','0')
    }
});

function toggleMenu(){
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

