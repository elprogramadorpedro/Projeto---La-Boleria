import joi from 'joi';		

const clientSchema = joi.object({
    name: joi.string().required(),
    address: joi.string().required(),
    
	phone: joi.string().pattern(/^[0-9]{10}$/ || /^[0-9]{11}$/).required()
});

export default clientSchema