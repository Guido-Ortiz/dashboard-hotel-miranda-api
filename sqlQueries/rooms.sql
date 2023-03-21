SELECT r.id_rooms, r.number, r.photos, r.price, r.offer, t.type, s.status 
FROM miranda.rooms AS r
INNER JOIN room_type AS t ON r.idType=t.id
INNER JOIN room_status AS s ON r.id_status=s.id_room_status;