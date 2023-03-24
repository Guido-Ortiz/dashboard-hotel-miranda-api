const mysql = require('mysql2');
require('dotenv').config()

const { HOST, USER, PASSWORD, DATABASE } = process.env

const connection = mysql.createConnection({
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE
  })
  
  connection.connect(function(error){
    if(error){
        throw error
    } else {
        console.log('MySQL databse is connected succesfully!')
    }
  }) 

module.exports = connection