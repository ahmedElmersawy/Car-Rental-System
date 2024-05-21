const API_URL = 'http://localhost:8080';

export const addCar = async (car) => {
    const response = await fetch(`${API_URL}/addCar`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(car),
    });
    return response.json();
};

export const addRenter = async (renter) => {
    const response = await fetch(`${API_URL}/addRenter`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(renter),
    });
    return response.json();
};

export const addPayment = async (payment) => {
    const response = await fetch(`${API_URL}/addPayment`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payment),
    });
    return response.json();
};

export const addCarOwner = async (carOwner) => {
    const response = await fetch(`${API_URL}/addCarOwner`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(carOwner),
    });
    return response.json();
};

// Add more functions as needed for other API endpoints
