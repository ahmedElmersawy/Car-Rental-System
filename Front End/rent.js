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

// rent.js
// rent.js
// document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const submitButton = document.getElementById("sbmit");
    console.log("--------");
    if (loginForm) {
        console.log("--------");
        submitButton.addEventListener("click", async function (event) {
            event.preventDefault();
            const email = loginForm.email.value;
            const password = loginForm.password.value;

            try {
                const response = await fetch('http://localhost:8000/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, password })
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log('Login successful', data);
                    // Save loggedIn status to localStorage
                    localStorage.setItem('loggedIn', 'true');
                    // Redirect to home page
                    window.location.href = 'index.html';
                } else {
                    console.error('Login failed', response.statusText);
                    alert('Login failed. Please check your credentials and try again.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred. Please try again later.');
            }
        });
    }

    const signupForm = document.getElementById("signupForm");
    if (signupForm) {
        signupForm.addEventListener("submit", async function (event) {
            event.preventDefault();
            const name = signupForm.name.value;
            const email = signupForm.email.value;
            const password = signupForm.password.value;

            try {
                const response = await fetch('http://localhost:8000/auth/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ name, email, password })
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log('Registration successful', data);
                    // Handle successful registration, e.g., redirect to login page
                    window.location.href = 'login.html';
                } else {
                    console.error('Registration failed', response.statusText);
                    alert('Registration failed. Please check your details and try again.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred. Please try again later.');
            }
        });
    }
// });

document.addEventListener('DOMContentLoaded', function () {
    console.log("--------");
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
    console.log("--------");
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