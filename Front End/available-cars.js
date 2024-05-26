document.addEventListener("DOMContentLoaded", function () {
    const vehicleGrid = document.getElementById("vehicleGrid");

    if (vehicleGrid) {
        fetchAllCars();
    }

    async function fetchAllCars() {
        try {
            const response = await fetch('http://localhost:8000/vehicles');
            const data = await response.json();

            if (response.ok) {
                displayCars(data.data);
            } else {
                console.error('Failed to fetch cars:', response.statusText);
                alert('Failed to fetch cars. Please try again later.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        }
    }

    function displayCars(cars) {
        vehicleGrid.innerHTML = '';

        cars.forEach(car => {
            const carBox = document.createElement('div');
            carBox.classList.add('car-box');
            carBox.innerHTML = `
                <h2>${car.vehicle}</h2>
                <img src="${car.image}" alt="${car.vehicle}">
                <p>Type: ${car.type}</p>
                <p>Location: ${car.location}</p>
                <p>Stock: ${car.stock}</p>
                <p>Rating: ${car.rating}</p>
                <p>Price: $${car.price}</p>
                <p>Owner: ${car.owner}</p>
            `;
            vehicleGrid.appendChild(carBox);
        });
    }
});
