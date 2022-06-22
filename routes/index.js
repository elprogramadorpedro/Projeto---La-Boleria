import {Router} from "express";
import cakeRouter from "./cakeRoute.js";
import clientsRouter from "./clientsRoute.js";
import orderRouter from "./orderRoute.js"

const router = Router();

router.use(cakeRouter);
router.use(clientsRouter);
router.use(orderRouter);

export default router;