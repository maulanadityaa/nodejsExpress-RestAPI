const config = require('../config/database');
const mysql = require('mysql');
const pool = mysql.createPool(config);

pool.on('error', (err) => {
    console.error(err);
});

module.exports ={
    //get all books
    getAllBooks(req,res){
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(`SELECT * FROM books;`,
                function (error, results) {
                    if(error) throw error;  
                    res.send({ 
                        success: true, 
                        message: 'Get All Books',
                        data: results 
                    });
                });
            connection.release();
        })
    },

}