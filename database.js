const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'miranda'
  })
  
  connection.connect(function(error){
    if(error){
        throw error
    } else {
        console.log('MySQL databse is connected succesfully!')
    }
  })

  // connection.end() 

module.exports = connection