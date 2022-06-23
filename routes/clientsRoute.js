import { Router } from "express";
import { createClients,getOrderByClient } from "../controllers/clientsController.js";
import  clientSchema from "../schema/clientsSchema.js";
import { validateSchema } from "./../middleware/schemaValidator.js";

const clientsRouter = Router();
clientsRouter.post('/clients',validateSchema(clientSchema), createClients);
clientsRouter.get('/clients/:id/orders', getOrderByClient);

export default clientsRouter;