
import React, { useEffect, useState } from 'react';
import { getAvailableCars } from '../services/api';

function CarList() {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await getAvailableCars();
                setCars(response.data);
            } catch (error) {
                console.error('Error fetching cars:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchCars();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2>Available Cars</h2>
            <ul>
                {cars.map((car) => (
                    <li key={car.plate_id}>
                        {car.model} - {car.color} - ${car.rent_price} - {car.car_status}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CarList;
