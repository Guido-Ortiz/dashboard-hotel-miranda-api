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

  
//   connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
//     if (err) throw err
  
//     console.log('The solution is: ', rows[0].solution)
//   })
  
//   connection.end() 