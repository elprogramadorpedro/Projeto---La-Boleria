import { Router } from "express";
import { createOrders,getOrder,getOrderById } from "../controllers/ordersController.js";
import  orderSchema from "../schema/orderSchema.js";
import { validateSchema } from "./../middleware/schemaValidator.js";

const orderRouter = Router();
orderRouter.post('/order',validateSchema(orderSchema), createOrders);
orderRouter.get('/orders', getOrder);
orderRouter.get('/orders/:id', getOrderById);

export default orderRouter;