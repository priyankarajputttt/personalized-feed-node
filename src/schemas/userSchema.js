const Joi = require("joi");

const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

// Define user schemas
const userSchemas = {
  userRegister: Joi.object({
    username: Joi.string().required(),
    email: Joi.string().pattern(emailRegex).required(),
    password: Joi.string().min(8).required(),
    interests: Joi.array().items(Joi.string()).required(),
  }),

  userLogin: Joi.object({
    email: Joi.string().pattern(emailRegex).required(),
    password: Joi.string().min(8).required(),
  }),
};

module.exports = userSchemas;
