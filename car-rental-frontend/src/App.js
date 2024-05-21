// src/App.js
import React from 'react';
import ExternalHTMLComponent from './ExternalHTMLComponent';
import FormCar from './components/FormCar';
import CarList from './components/CarList';

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

