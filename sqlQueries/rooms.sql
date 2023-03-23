SELECT r.id_rooms, r.number, r.photos, r.price, r.offer, t.type, s.status 
FROM miranda.rooms AS r
INNER JOIN room_type AS t ON r.idType=t.id
INNER JOIN room_status AS s ON r.id_status=s.id_room_status;

SET SQL_SAFE_UPDATES=0; 
DELETE FROM miranda.rooms;

SELECT r.id_rooms, r.number, r.photos, r.price, r.offer, rt.type, rs.status, a.amenity FROM miranda.rooms_amenities as ra
INNER JOIN amenities AS a ON ra.id_amenity=a.idAmenities
INNER JOIN rooms AS r ON ra.id_room=r.id_rooms
INNER JOIN room_type AS rt ON r.idType=rt.id
INNER JOIN room_status AS rs ON r.id_status=rs.id_room_status;