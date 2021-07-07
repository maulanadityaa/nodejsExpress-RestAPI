const router = require('express').Router();
const { book } = require('../controllers');

// GET localhost:8080/book => get all books
router.get('/books', book.getAllBooks);



module.exports = router;