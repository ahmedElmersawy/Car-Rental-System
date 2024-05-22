
let lastScrollTop = 0;
const topHeader = document.querySelector('.top-header');
const mainHeader = document.querySelector('.header');

window.addEventListener('scroll', function () {
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

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const email = loginForm.email.value;
            const password = loginForm.password.value;
            console.log("Login - Email:", email, "Password:", password);
            // Handle login logic here
        });
    }

    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const name = signupForm.name.value;
            const email = signupForm.email.value;
            const password = signupForm.password.value;
            console.log("Sign Up - Name:", name, "Email:", email, "Password:", password);
            // Handle signup logic here
        });
    }
});
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
});

function addToCart(event) {
    const car = JSON.parse(event.target.getAttribute('data-car'));
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(car);
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = 'cart.html';
}