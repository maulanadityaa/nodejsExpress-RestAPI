const config = require('../config/database');
const mysql = require('mysql');
const pool = mysql.createPool(config);

//get current date and time
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

pool.on('error', (err) => {
    console.error(err);
});

module.exports = {
    //get all books
    getAllBooks(req, res) {
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(`SELECT * FROM books;`,
                function (error, results) {
                    if (error) throw error;
                    res.send({
                        success: true,
                        message: 'Get All Books',
                        data: results
                    });
                });
            connection.release();
            console.log(dateTime+'  /api/books');
        })
    },

    //get book by id
    getBookByID(req, res) {
        const id = req.params.id;
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(`SELECT * FROM books WHERE id=?`, [id],
                function (err, results) {
                    if (err) throw err;
                    res.send({
                        success: true,
                        message: 'Get Book by ID',
                        data: results,
                    });
                }
            );
            connection.release();
            console.log(dateTime+`  /api/book/${id}`);
        });
    },
    
    //get book by judul
    getBookByJudul(req, res) {
        const judul = req.params.judul;
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(`SELECT * FROM books WHERE judul=?`, [judul],
                function (err, results) {
                    if (err) throw err;
                    res.send({
                        success: true,
                        message: 'Get Book by Judul',
                        data: results,
                    });
                }
            );
            connection.release();
            console.log(dateTime+`  /api/book/${judul}`);
        });
    },
    //add book
    addBook(req, res) {
        const data = {
            judul : req.body.judul,
            penulis : req.body.penulis,
            kategori : req.body.kategori,
            stock : req.body.stock
        }
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(`INSERT INTO books SET ?`, [data],
                function (err, results) {
                    if (err) throw err;
                    res.send({
                        success: true,
                        message: 'Success Add Book',
                        data: data
                    });
                }
            );
            connection.release();
            console.log(dateTime+'  /api/book');
        });
    },

    //update data book
    updateBook(req, res) {
        const data = {
            judul : req.body.judul,
            penulis : req.body.penulis,
            kategori : req.body.kategori,
            stock : req.body.stock
        };
        const id = req.body.id;
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(`UPDATE books SET ?, updated_at=? WHERE id=?`, [data,dateTime,id],
                function (err, results) {
                    if (err) throw err;
                    res.send({
                        success: true,
                        message: 'Success Edit Book',
                        data: data
                    });
                }
            );
            connection.release();
            console.log(dateTime+'  /api/book');
        });
    },

    //delete book
    deleteBook(req, res) {
        const id = req.body.id;
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(`DELETE FROM books WHERE id=?`, [id],
                function (err, results) {
                    if (err) throw err;
                    res.send({
                        success: true,
                        message: 'Success Delete a Book',
                        results: results
                    });
                }
            );
            connection.release();
            console.log(dateTime+'  /api/book');
        });
    }
}