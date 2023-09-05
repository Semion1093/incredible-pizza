const navLinks = document.querySelector('nav');
const navBar = document.querySelector('.navigation-bar-content');
const longLongTime = true;

while (longLongTime) {
  if (isVisible(navBar)) {
    navLinks.style.display = 'none';
  } else {
    navLinks.style.display = 'flex';
  }
}

function isVisible(elem) {
  return window.innerHeight > elem.getBoundingClientRect().bottom;
}
