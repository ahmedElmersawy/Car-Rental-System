import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const addCar = (car) => {
    //console.log('api url', API_URL)
    axios.post(`${API_URL}/addCar`, car)
};
export const addRenter = (renter) => axios.post(`${API_URL}/addRenter`, renter);
export const addPayment = (payment) => axios.post(`${API_URL}/addPayment`, payment);
export const addCarOwner = (carOwner) => axios.post(`${API_URL}/addCarOwner`, carOwner);
export const addToCart = (cartItem) => axios.post(`${API_URL}/addToCart`, cartItem);
export const linkCarToRenter = (link) => axios.post(`${API_URL}/linkCarToRenter`, link);
export const updateCarStatus = (carStatus) => axios.put(`${API_URL}/updateCarStatus`, carStatus);
export const getAvailableCars = () => axios.get(`${API_URL}/getAvailableCars`);
export const getCarsRentedByRenter = (renterId) => axios.get(`${API_URL}/getCarsRentedByRenter/${renterId}`);
export const deleteCar = (plateId) => axios.delete(`${API_URL}/deleteCar/${plateId}`);
export const deleteRenter = (renterId) => axios.delete(`${API_URL}/deleteRenter/${renterId}`);
export const deletePayment = (paymentId) => axios.delete(`${API_URL}/deletePayment/${paymentId}`);
export const deleteCarOwner = (ownerId) => axios.delete(`${API_URL}/deleteCarOwner/${ownerId}`);
export const getRentersByCar = (plateId) => axios.get(`${API_URL}/getRentersByCar/${plateId}`);
export const getPaymentsByRenterPhone = (renterPhoneNumber) => axios.get(`${API_URL}/getPaymentsByRenterPhone/${renterPhoneNumber}`);
