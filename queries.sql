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

CREATE TABLE `miranda`.`rooms` (
  `id` INT NOT NULL,
  `number` INT NOT NULL,
  `photos` VARCHAR(45) NOT NULL,
  `price` INT NOT NULL,
  `offer` INT NOT NULL,
  `status` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `miranda`.`room_type` (
  `id` INT NOT NULL,
  `type` VARCHAR(245) NOT NULL,
  PRIMARY KEY (`id`));

SELECT * 
FROM miranda.bookings
INNER JOIN booking_status ON bookings.id_status=booking_status.id_booking_status
INNER JOIN customers ON bookings.id_customer=customers.id_customer;

SELECT b.booking_id, c.name, b.order, b.checkin, b.checkout, b.request, t.type, b.number, b.photo, s.status 
FROM miranda.bookings AS b
INNER JOIN booking_status AS s ON b.id_status=s.id_booking_status
INNER JOIN customers AS c ON b.id_customer=c.id_customer
INNER JOIN room_type AS t ON b.id_room_type=t.id;