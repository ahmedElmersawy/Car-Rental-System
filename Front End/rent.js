
let lastScrollTop = 0;
    const topHeader = document.querySelector('.top-header');
    const mainHeader = document.querySelector('.header');

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // Scroll Down
            topHeader.style.top = '-40px';
            mainHeader.style.top = '-60px';
        } else {
            // Scroll Up
            topHeader.style.top = '0';
            mainHeader.style.top = '40px';
        }
        lastScrollTop = scrollTop;
    });