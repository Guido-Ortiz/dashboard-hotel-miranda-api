SELECT u.id_user, u.name, u.photo, u.email, u.start, u.description, u.contact, us.status FROM miranda.users AS u
INNER JOIN user_status AS us ON u.idStatus=us.id_status;