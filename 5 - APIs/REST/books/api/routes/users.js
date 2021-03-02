const express = require('express')
const router = express.Router();

// get all books
router.get('/', (req, res) => {
    res.send('<h1>This is response from an Express</h1>')
})

// get a specific book
router.get('/users/:id', (req, res) => {

})

// update a specific book
router.patch('/users/:id', (req, res) => {

})

// delete a specific book
router.delete('/users/:id', (req, res) => {

})

module.exports = router;