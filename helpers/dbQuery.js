const connection = require('../database');

function dbQuery(query, params) {
    return new Promise((resolve, reject) => {
        connection.query(query, params, (error, results) => {
            if (error)
                reject(error);
            resolve(results);
        });
    });
}

module.exports = dbQuery;
