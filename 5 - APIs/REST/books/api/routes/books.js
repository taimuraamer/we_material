const express = require('express')
const router = express.Router();
const Books = require('../model/Books')
const { bookValidation } = require('../validation/request')

// get all books
router.get('/', (req, res) => {
    res.send([{
        title: "C++",
        author: "Dietel",
        price: 500
    },
    {
        title: "Java",
        author: "Dietel",
        price: 500
    }])
})

// get a specific book
router.get('/:id', async (req, res) => {
    const book = await Books.find(req.params.id)
    res.json(book)
})

router.post('/', async (req, res) => {
    const input = {
        title: req.body.title,
        author: req.body.author,
        price: req.body.price
    }

    // // validation
    const errorMessage = bookValidation(input)
    if (errorMessage) return res.status(400).send(errorMessage)

    const book = new Books(input);

    try {
        await book.save();
        res.send('Saved to database....');
    }
    catch (err) {
        res.status(400).send(err.message)
    }


})

// update a specific book
router.patch('/:id', (req, res) => {
    res.send('<h1>Update a specific book</h1>')
})

router.delete('/', (req, res) => {
    res.send('<h1>We are ready to delete all books</h1>')
})
// delete a specific book
router.delete('/:id', (req, res) => {
    res.send('<h1>Delete a specific books</h1>')
})

module.exports = router;