import joi from 'joi';		

const cakeSchema = joi.object({
    name: joi.string().min(2).required(),
    price: joi.number().min(1).required(),
	description: joi.string(),
    image: joi
		.string()
		.pattern(/^[a-zA-Z0-9-_]+[:./\\]+([a-zA-Z0-9 -_./:=&"'?%+@#$!])+$/)
		.required()
});

export default cakeSchema