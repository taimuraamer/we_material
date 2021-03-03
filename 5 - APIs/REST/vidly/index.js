const express = require('express')
const Joi = require('@hapi/joi')

const app = express();

app.use(express.json())

// get all genres
app.get('/api/geners', (req, res) => {

})

// get one genres
app.get('/api/geners/:id', (req, res) => {

})

// post geners
app.post('/api/geners', (req, res) => {

})

// update
app.put('/api/geners/:id', (req, res) => {

})

app.delete('/api/delete:/id', (req, res) => {

})

const validate = (data) => {
    const schema = {

    }


}