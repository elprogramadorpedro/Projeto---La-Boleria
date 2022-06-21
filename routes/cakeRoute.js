import { Router } from "express";
import { createCakes } from "../controllers/cakesController.js";
import cakeSchema from "../schema/cakesSchema.js";
import { validateSchema } from "./../middleware/schemaValidator.js";

const cakeRouter = Router();
cakeRouter.post('/cakes',validateSchema(cakeSchema), createCakes);

export default cakeRouter;