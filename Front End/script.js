let lastScrollTop = 0;
const topHeader = document.querySelector('.top-header');
const header = document.querySelector('.header'); // Use querySelector for class

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    // Scrolling down
    topHeader.style.top = '-40px';
    header.style.top = '-100px';
  } else {
    // Scrolling up
    topHeader.style.top = '0';
    header.style.top = '40px';
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});
