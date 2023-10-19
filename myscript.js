const menuDua = document.getElementById('menu-kedua');
const menuTiga = document.getElementById('menu-ketiga');
const icontog = document.getElementById('icontog');
const toggler = document.getElementById('toggler');


toggler.addEventListener('click', () => {
    if (toggler.checked == true) {
        icontog.classList.remove('fa-bars');
        icontog.classList.add('fa-xmark');
    } else {
        if (toggler.checked == false) {
            icontog.classList.remove('fa-xmark');
            icontog.classList.add('fa-bars');
        }
    }
})


document.addEventListener('click', (e) => {
    let elementClass = e.target.className;
    if (
        elementClass !== 'left-icon' &&
        elementClass !== 'right-icon' &&
        elementClass !== 'text'
    ) {
        menuDua.classList.remove('active');
        menuTiga.classList.remove('active');
    } else {}
});

menuDua.addEventListener('click', () => {
    menuDua.classList.toggle('active');
    menuTiga.classList.remove('active');
});

menuTiga.addEventListener('click', () => {
    menuTiga.classList.toggle('active');
    menuDua.classList.remove('active');
});