import { Router } from "express";
import { createOrders } from "../controllers/ordersController.js";
import  orderSchema from "../schema/orderSchema.js";
import { validateSchema } from "./../middleware/schemaValidator.js";

const orderRouter = Router();
orderRouter.post('/order',validateSchema(orderSchema), createOrders);

export default orderRouter;