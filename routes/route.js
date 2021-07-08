const router = require('express').Router();
const { book } = require('../controllers');

// GET localhost:8080/api/books => get all books
router.get('/api/books', book.getAllBooks);

//GET localhost:8080/api/book/id/{id} => get book by id
router.get('/api/book/id/:id', book.getBookByID);

//GET localhost:8080/api/book/judul/{judul} => get book by judul
router.get('/api/book/judul/:judul', book.getBookByJudul);

//POST localhost:8080/api/book => add book
router.post('/api/book', book.addBook);

//PUT localhost:8080/api/book => update data book
router.put('/api/book', book.updateBook);

//DELETE localhost:8080/api/book => delete a book
router.delete('/api/book', book.deleteBook);






module.exports = router;