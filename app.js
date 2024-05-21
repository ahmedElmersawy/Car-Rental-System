import express from 'express';
import {
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
} from './database.js';

const app = express();

app.use(express.json());

app.post('/addCar', async (req, res) => {
    try {
        const { plate_id, model, color, rent_price, car_status } = req.body;
        const result = await addCar(plate_id, model, color, rent_price, car_status);
        res.status(201).send(result);
    } catch (err) {
        console.error('Error adding car:', err.message);
        res.status(500).send(err.message);
    }
});

app.post('/addRenter', async (req, res) => {
    try {
        const { renter_id, renter_name, license_num, phone } = req.body;
        const result = await addRenter(renter_id, renter_name, license_num, phone);
        res.status(201).send(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.post('/addPayment', async (req, res) => {
    try {
        const { payment_id, payment_amount, Pdate, renter_phone_number } = req.body;
        const result = await addPayment(payment_id, payment_amount, Pdate, renter_phone_number);
        res.status(201).send(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.post('/addCarOwner', async (req, res) => {
    try {
        const { owner_id, owner_name, address, email, phone } = req.body;
        const result = await addCarOwner(owner_id, owner_name, address, email, phone);
        res.status(201).send(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
});


app.post('/addToCart', async (req, res) => {
    try {
        const { car_plate_id, payment_id, purchase_date } = req.body;
        const result = await addToCart(car_plate_id, payment_id, purchase_date);
        res.status(201).send(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
});


app.post('/linkCarToRenter', async (req, res) => {
    try {
        const { car_plate_id, renter_id } = req.body;
        const result = await linkCarToRenter(car_plate_id, renter_id);
        res.status(201).send(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
});


app.put('/updateCarStatus', async (req, res) => {
    try {
        const { plate_id, car_status } = req.body;
        const result = await updateCarStatus(plate_id, car_status);
        res.status(200).send(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
});


app.get('/getAvailableCars', async (req, res) => {
    try {
        const result = await getAvailableCars();
        res.status(200).send(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
});


app.get('/getCarsRentedByRenter/:renter_id', async (req, res) => {
    try {
        const { renter_id } = req.params;
        const result = await getCarsRentedByRenter(renter_id);
        res.status(200).send(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
});


app.delete('/deleteCar/:plate_id', async (req, res) => {
    try {
        const { plate_id } = req.params;
        const result = await deleteCar(plate_id);
        res.status(200).send(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.delete('/deleteRenter/:renter_id', async (req, res) => {
    try {
        const { renter_id } = req.params;
        const result = await deleteRenter(renter_id);
        res.status(200).send(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
});


app.delete('/deletePayment/:payment_id', async (req, res) => {
    try {
        const { payment_id } = req.params;
        const result = await deletePayment(payment_id);
        res.status(200).send(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
});


app.delete('/deleteCarOwner/:owner_id', async (req, res) => {
    try {
        const { owner_id } = req.params;
        const result = await deleteCarOwner(owner_id);
        res.status(200).send(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
});


app.get('/getRentersByCar/:plate_id', async (req, res) => {
    try {
        const { plate_id } = req.params;
        const result = await getRentersByCar(plate_id);
        res.status(200).send(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
});


app.get('/getPaymentsByRenterPhone/:renter_phone_number', async (req, res) => {
    try {
        const { renter_phone_number } = req.params;
        const result = await getPaymentsByRenterPhone(renter_phone_number);
        res.status(200).send(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3001'); // Change to match your port
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});

export default app;
