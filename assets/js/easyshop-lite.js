document.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('nav.mainnav');
  if (burger) {
    burger.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  }
});
