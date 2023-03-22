SELECT b.booking_id, c.name, b.order, b.checkin, b.checkout, b.request, b.number, b.photo, r.type, s.status 
FROM miranda.bookings AS b
INNER JOIN customers AS c ON c.id_customer=b.id_customer
INNER JOIN room_type AS r ON r.id=b.id_room_type
INNER JOIN booking_status AS s ON s.id_booking_status=b.id_status
WHERE b.booking_id=2;