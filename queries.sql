CREATE DATABASE miranda;
USE miranda;

CREATE TABLE Bookings (
    Booking_id int PRIMARY KEY,
    Client varchar(255),
    Order Date,
    Checkin Date,
    Checkout Date,
    Request varchar(255),
    Room_type varchar(255),
    Photos JSON, 
    Booking_status varchar(255)
);