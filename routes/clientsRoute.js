import { Router } from "express";
import { createClients } from "../controllers/clientsController.js";
import  clientSchema from "../schema/clientsSchema.js";
import { validateSchema } from "./../middleware/schemaValidator.js";

const clientsRouter = Router();
clientsRouter.post('/clients',validateSchema(clientSchema), createClients);

export default clientsRouter;