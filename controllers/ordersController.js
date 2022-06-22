import ordersRepository from "../repositories/ordersRepository.js";
import clientsRepository from "../repositories/clientsRepository.js";
import cakesRepository from "../repositories/cakesRepository.js";
import dayjs from "dayjs"

export async function createOrders(req, res) {
    const order = req.body;
  
    try {

      const client = await clientsRepository.getClientById(order.clientId);
      if (client.rowCount === 0) {
        return res.sendStatus(404); // not found
      }
      const cake = await cakesRepository.getCakeById(order.cakeId);
      if (cake.rowCount === 0) {
        return res.sendStatus(404); // not found
      }

      const today = dayjs().format('YYYY-MM-DD HH:mm');

      const {clientId, cakeId, quantity, totalPrice} = order;
      await ordersRepository.createOrder(clientId, cakeId, quantity, totalPrice, today);
  
      res.sendStatus(201); // created
    } catch (error) {
      console.log(error);
      return res.sendStatus(500); // server error
    }
}
