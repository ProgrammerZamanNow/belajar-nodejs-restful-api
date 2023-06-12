import Joi from "joi";

const createAddressValidation = Joi.object({
    street: Joi.string().max(255).optional(),
    city: Joi.string().max(100).optional(),
    province: Joi.string().max(100).optional(),
    country: Joi.string().max(100).required(),
    postal_code: Joi.string().max(10).required()
});

const updateAddressValidation = Joi.object({
    id: Joi.number().min(1).positive().required(),
    street: Joi.string().max(255).optional(),
    city: Joi.string().max(100).optional(),
    province: Joi.string().max(100).optional(),
    country: Joi.string().max(100).required(),
    postal_code: Joi.string().max(10).required()
});

const getAddressValidation = Joi.number().min(1).positive().required();

export {
    createAddressValidation,
    getAddressValidation,
    updateAddressValidation
}
