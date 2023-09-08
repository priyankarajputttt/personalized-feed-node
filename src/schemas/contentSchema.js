const Joi = require("joi");
const contentCreateSchema = Joi.object({
  title: Joi.string().required().min(5).max(100),
  tags: Joi.array().items(Joi.string()).required(),
  description: Joi.string().required().min(10).max(1000),
});

module.exports = contentCreateSchema;
