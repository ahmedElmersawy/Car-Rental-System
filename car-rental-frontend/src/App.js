// src/App.js
import React from 'react';
import ExternalHTMLComponent from './components/ExternalHTMLComponent';
import FormCar from './components/FormCar';
import CarList from './components/CarList';

function App() {
    console.log('steste')
    return (
        <div className="App">
            <h1>Car Rental System</h1>
            {/*<ExternalHTMLComponent />*/}
            <FormCar />
            <CarList />
        </div>
    );
}

export default App;

