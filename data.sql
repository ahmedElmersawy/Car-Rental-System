CREATE DATABASE CarRental;
USE CarRental;

CREATE TABLE Car (
    plate_id VARCHAR(10) NOT NULL,
    model VARCHAR(50),
    color VARCHAR(20),
    rent_price DECIMAL(10, 2),
    status VARCHAR(20),
    PRIMARY KEY (plate_id)
);

CREATE TABLE Renter (
    renter_id INT AUTO_INCREMENT,
    name VARCHAR(100),
    license_num VARCHAR(50),
    phone VARCHAR(20),
    PRIMARY KEY (renter_id)
);


CREATE TABLE Payment (
    payment_id INT AUTO_INCREMENT,
    payment_amount DECIMAL(10, 2),
    date DATE,
    renter_phone_number VARCHAR(20),
    PRIMARY KEY (payment_id)
);


CREATE TABLE Owner (
    owner_id INT AUTO_INCREMENT,
    name VARCHAR(100),
    address VARCHAR(255),
    email VARCHAR(100),
    phone VARCHAR(20),
    PRIMARY KEY (owner_id)
);


CREATE TABLE Cart (
    car_plate_id VARCHAR(10),
    payment_id INT,
    purchase_date DATE,
    PRIMARY KEY (car_plate_id, payment_id),
    FOREIGN KEY (car_plate_id) REFERENCES Car(plate_id),
    FOREIGN KEY (payment_id) REFERENCES Payment(payment_id)
);


CREATE TABLE CarRenter (
    car_plate_id VARCHAR(10),
    renter_id INT,
    PRIMARY KEY (car_plate_id, renter_id),
    FOREIGN KEY (car_plate_id) REFERENCES Car(plate_id),
    FOREIGN KEY (renter_id) REFERENCES Renter(renter_id)
);
