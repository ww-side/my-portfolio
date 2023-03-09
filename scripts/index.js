const burger = document.querySelector('.burger');
const menuItem = document.querySelectorAll('.menu__item');
const navigation = document.querySelector('.navigation');
const html = document.querySelector('html');

burger.addEventListener('click', function() {
  burger.classList.toggle('active');
  navigation.classList.toggle('open');
  html.classList.toggle('hidden');
});

menuItem.forEach(b=>b.addEventListener('click', function() {
  burger.classList.remove('active');
  navigation.classList.remove('open');
  html.classList.remove('hidden');
}));