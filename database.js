import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise();

async function addCar(plate_id, model, color, rent_price) {
    const query = 'INSERT INTO Car (plate_id, model, color, rent_price) VALUES (?, ?, ?, ?)';
    const [result] = await pool.query(query, [plate_id, model, color, rent_price, car_status]);
    return result;
}

async function addRenter(renter_id, renter_name, license_num, phone) {
    const query = 'INSERT INTO Renter (renter_id, renter_name, license_num, phone) VALUES (?, ?, ?, ?)';
    const [result] = await pool.query(query, [renter_id, renter_name, license_num, phone]);
    return result;
}

async function addPayment(payment_id, payment_amount, Pdate, renter_phone_number) {
    const query = 'INSERT INTO Payment (payment_id, payment_amount, Pdate, renter_phone_number) VALUES (?, ?, ?, ?)';
    const [result] = await pool.query(query, [payment_id, payment_amount, Pdate, renter_phone_number]);
    return result;
}

async function addCarOwner(owner_id, owner_name, address, email, phone) {
    const query = 'INSERT INTO CarOwner (owner_id, owner_name, address, email, phone) VALUES (?, ?, ?, ?, ?)';
    const [result] = await pool.query(query, [owner_id, owner_name, address, email, phone]);
    return result;
}

async function addToCart(car_plate_id, payment_id, purchase_date) {
    const query = 'INSERT INTO Cart (car_plate_id, payment_id, purchase_date) VALUES (?, ?, ?)';
    const [result] = await pool.query(query, [car_plate_id, payment_id, purchase_date]);
    return result;
}

async function linkCarToRenter(car_plate_id, renter_id) {
    const query = 'INSERT INTO CarRenter (car_plate_id, renter_id) VALUES (?, ?)';
    const [result] = await pool.query(query, [car_plate_id, renter_id]);
    return result;
}

async function updateCarStatus(plate_id, car_status) {
    const query = 'UPDATE Car SET car_status = ? WHERE plate_id = ?';
    const [result] = await pool.query(query, [car_status, plate_id]);
    return result;
}

async function getAvailableCars() {
    const query = 'SELECT * FROM Car WHERE car_status = "available"';
    const [result] = await pool.query(query);
    return result;
}

async function getCarsRentedByRenter(renter_id) {
    const query = `
        SELECT Car.* 
        FROM Car
        JOIN CarRenter ON Car.plate_id = CarRenter.car_plate_id
        WHERE CarRenter.renter_id = ?
    `;
    const [result] = await pool.query(query, [renter_id]);
    return result;
}

async function deleteCar(plate_id) {
    const query = 'DELETE FROM Car WHERE plate_id = ?';
    const [result] = await pool.query(query, [plate_id]);
    return result;
}

async function deleteRenter(renter_id) {
    const query = 'DELETE FROM Renter WHERE renter_id = ?';
    const [result] = await pool.query(query, [renter_id]);
    return result;
}

async function deletePayment(payment_id) {
    const query = 'DELETE FROM Payment WHERE payment_id = ?';
    const [result] = await pool.query(query, [payment_id]);
    return result;
}

async function deleteCarOwner(owner_id) {
    const query = 'DELETE FROM CarOwner WHERE owner_id = ?';
    const [result] = await pool.query(query, [owner_id]);
    return result;
}

async function getRentersByCar(plate_id) {
    const query = `
        SELECT Renter.*
        FROM Renter
        JOIN CarRenter ON Renter.renter_id = CarRenter.renter_id
        WHERE CarRenter.car_plate_id = ?
    `;
    const [result] = await pool.query(query, [plate_id]);
    return result;
}

async function getPaymentsByRenterPhone(renter_phone_number) {
    const query = 'SELECT * FROM Payment WHERE renter_phone_number = ?';
    const [result] = await pool.query(query, [renter_phone_number]);
    return result;
}

export {
    addCar,
    addRenter,
    addPayment,
    addCarOwner,
    addToCart,
    linkCarToRenter,
    updateCarStatus,
    getAvailableCars,
    getCarsRentedByRenter,
    deleteCar,
    deleteRenter,
    deletePayment,
    deleteCarOwner,
    getRentersByCar,
    getPaymentsByRenterPhone
};
