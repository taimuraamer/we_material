const express = require('express')
const app = express();
require('dotenv/config')
const mongoose = require('mongoose')

const booksRouter = require('./routes/books')
const usersRouter = require('./routes/users')

// middleware
app.use(express.json())
app.use('/books', booksRouter)
app.use('/users', usersRouter)

app.get('/', (req, res) => {
    res.send('We are on home page.')
})

mongoose.connect(process.env.CONNECTION_STRING, { useUnifiedToology: true, useNewUrlParser: true }, () => console.log("Conneted to DB."))


const PORT = 5000 || process.env.PORT
app.listen(PORT, () => console.log('connected: http://localhost:' + PORT))