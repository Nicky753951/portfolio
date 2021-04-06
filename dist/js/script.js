const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});


const counters = document.querySelectorAll('.percent__name-pe'),
      lines = document.querySelectorAll('.percent__gradation-plus');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});
