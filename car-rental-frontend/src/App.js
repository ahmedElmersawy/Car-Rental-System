// src/App.js
import React from 'react';
import CarForm from './components/FormCar';

function App() {
    return (
        <div className="App">
            <h1>Car Rental System</h1>
            <FormCar />
            <CarList />
        </div>
    );
}

export default App;

