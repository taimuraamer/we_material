const express = require('express')
const app = express();
require('dotenv/config')

const authRoute = require('./routes/auth')
const postsRoute = require('./routes/posts')

const mongoose = require("mongoose")

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log("Connected to DB."))

app.use(express.json())

app.use('/api/user', authRoute)
app.use('/api/posts', postsRoute)

app.listen(3000, () => console.log("http://localhost:3000"))