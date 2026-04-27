const toggle = document.getElementById('menuToggle');
const menu = document.getElementById('mainMenu');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
  });
}
