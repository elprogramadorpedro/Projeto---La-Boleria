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
export async function getOrder(req, res) {  
  //const { id } = req.params;
  const { date } = req.query
  console.log("Date->",date)
  try {
    let allOrders = [];
    let orders = []

    if(date === undefined){
      const ordersRow = await ordersRepository.getOrders();
      if(ordersRow.rowCount === 0){
        return res.status(404).send([]);
      }
      orders = ordersRow.rows;
    }else{
      const ordersRow = await ordersRepository.getOrdersByDate(date);
      if(ordersRow.rowCount === 0){
        return res.send([]);
      }
      orders = ordersRow.rows;
    }
 
    const promiseList = orders.map(async (order) => {
      let cake = await cakesRepository.getCakeById(order.cakeId);
      let client = await clientsRepository.getClientById(order.clientId);
      allOrders.push(
        {
          cake:cake.rows,
          client:client.rows,
          createdAt:order.createdAt,
          quantity:order.quantity,
          totalPrice:order.totalPrice
        }
      )
    });

    Promise.all(promiseList).then(results => {
      res.status(200).send(allOrders)
    });
    
    
  } catch (error) {
    console.log(error);
    return res.sendStatus(500); // server error
  }
}

export async function getOrderById(req, res) {
  const { id } = req.params;

  try {
    const orders = await ordersRepository.getOrdersById(id);
    if(orders.rowCount === 0){
      return res.sendStatus(401); // not found
    }
    const order = orders.rows;
    //Cake
    const cake = await cakesRepository.getCakeById(order[0].cakeId);
    if(cake.rowCount === 0){
      return res.sendStatus(404); // not found
    }

    //Client
    const client = await clientsRepository.getClientById(order[0].clientId);
    if(client.rowCount === 0){
      return res.sendStatus(404); // not found
    }

    res.send({
      cake:cake.rows,
      client:client.rows,
      createdAt:order.createdAt,
      quantity:order.quantity,
      totalPrice:order.totalPrice
    })
  } catch (error) {
    console.log(error);
    return res.sendStatus(500); // server error
  }
}