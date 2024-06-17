
const Joi = require("joi");

module.exports.listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        location: Joi.string().required(),
        country: Joi.string().required(), // Corrected typo from 'contary' to 'country'
        price: Joi.number().required().min(0),
        image: Joi.string().allow("", null), // Changed " " to "" for better clarity
    }).required(),
});

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        comment: Joi.string().required(), // Changed 'Comment' to 'comment' for consistency
    }).required(),
});
