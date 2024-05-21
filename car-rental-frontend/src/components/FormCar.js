
import React, { useState } from 'react';
import { addCar } from '../services/api';

function FormCar() {
    const [plateId, setPlateId] = useState('');
    const [model, setModel] = useState('');
    const [color, setColor] = useState('');
    const [rentPrice, setRentPrice] = useState('');
    const [carStatus, setCarStatus] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const car = { plate_id: plateId, model, color, rent_price: rentPrice, car_status: carStatus };
        try {
            await addCar(car);
            setMessage('Car added successfully!');
            // Clear the form
            setPlateId('');
            setModel('');
            setColor('');
            setRentPrice('');
            setCarStatus('');
        } catch (error) {
            console.error('There was an error adding the car!', error);
            setMessage('Failed to add car.');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Plate ID:
                    <input type="text" value={plateId} onChange={(e) => setPlateId(e.target.value)} />
                </label>
                <label>
                    Model:
                    <input type="text" value={model} onChange={(e) => setModel(e.target.value)} />
                </label>
                <label>
                    Color:
                    <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
                </label>
                <label>
                    Rent Price:
                    <input type="text" value={rentPrice} onChange={(e) => setRentPrice(e.target.value)} />
                </label>
                <label>
                    Car Status:
                    <input type="text" value={carStatus} onChange={(e) => setCarStatus(e.target.value)} />
                </label>
                <button type="submit">Add Car</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default FormCar;
