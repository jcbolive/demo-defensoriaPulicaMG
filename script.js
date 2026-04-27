const toggle = document.getElementById('menuToggle');
const menu = document.getElementById('mainMenu');

if (toggle && menu) {
  toggle.addEventListener('click', () => menu.classList.toggle('open'));
}

const heroImage = document.getElementById('heroImage');
const dots = document.querySelectorAll('.dot');

dots.forEach((dot) => {
  dot.addEventListener('click', () => {
    dots.forEach((d) => d.classList.remove('active'));
    dot.classList.add('active');
    if (heroImage) heroImage.src = dot.dataset.img;
  });
});
