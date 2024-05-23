
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
            if (email === "user@example.com" && password === "password") {
                localStorage.setItem('loggedIn', 'true');
                window.location.href = 'index.html';
            } else {
                alert("Invalid credentials. Please try again.");
            }
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


document.addEventListener('DOMContentLoaded', function () {
    const topNavBar = document.getElementById('topNavBar');

    function updateNavBar() {
        topNavBar.innerHTML = ''; // Clear existing content

        if (localStorage.getItem('loggedIn') === 'true') {
            // User is logged in
            topNavBar.innerHTML = `
                    <li><a href="#" id="logoutButton">Log Out</a></li>
                    <li><a href="#">FAQ</a></li>
                `;

            document.getElementById('logoutButton').addEventListener('click', function (e) {
                e.preventDefault();
                localStorage.removeItem('loggedIn');
                updateNavBar(); // Update the navbar after logging out
            });
        } else {
            // User is not logged in
            topNavBar.innerHTML = `
                    <li><a href="login.html">Sign In</a></li>
                    <li><a href="signup.html">Sign Up</a></li>
                    <li><a href="#">FAQ</a></li>
                `;
        }
    }

    updateNavBar(); // Initial call to set the navbar based on login status
});