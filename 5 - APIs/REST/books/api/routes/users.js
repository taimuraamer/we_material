const express = require('express')
const router = express.Router();
const { userLoginValidation, userRegisterValidation } = require('../validation/request')
const Users = require('../model/Users')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

router.post('/register', async (req, res) => {

    const password = req.body.password;
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const input = {
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    }
    const error = userRegisterValidation(input)
    if (error) return res.send(error.details[0].message);

    const oldUser = await Users.findOne({ email: input.email })
    if (oldUser) return res.send("Email already exists.")
    const user = new Users(input)
    try {
        const saved_user = await user.save()
        res.send(saved_user._id)
    }
    catch (error) {
        res.send(error)
    }

})

router.post('/login', async (req, res) => {

    const input = {
        email: req.body.email,
        password: req.body.password
    }
    const error = userLoginValidation(input)
    if (error) return res.status(400).send(error.details[0].message);

    const user = await Users.findOne({ email: input.email })
    if (!user) return res.status(400).send("Invalid email addresss");

    const compare = await bcrypt.compare(input.password, user.password)
    if (!compare) return res.send('Invalid password')

    const token = jwt.sign({ _id: user.id }, process.env.SECRET)
    if (!token) return res.send('invalid token')
    res.header('auth-token', token)
    res.send({ token: token })
})

module.exports = router;