const Joi = require('@hapi/joi')

const bookValidation = (book) => {
    const bookSchema = Joi.object({
        title: Joi.string().required(),
        author: Joi.string().required().min(2),
        price: Joi.number().required()
    })
    const { error } = bookSchema.validate(book)
    return error.details[0].message;
}

const userRegisterValidation = (user) => {
    const userSchema = Joi.object({
        name: Joi.string().required().min(4).max(200),
        email: Joi.string().email().required(),
        password: Joi.string().required().min(4).max(200)
    })
    const { error } = userSchema.validate(user)
    return error;
}

const userLoginValidation = (user) => {
    const userSchema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required().min(4).max(200)
    })
    const { error } = userSchema.validate(user)
    return error;
}

module.exports.bookValidation = bookValidation;
module.exports.userRegisterValidation = userRegisterValidation;
module.exports.userLoginValidation = userLoginValidation;