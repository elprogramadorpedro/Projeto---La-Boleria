import clientsRepository from '../repositories/clientsRepository.js'
import ordersRepository from '../repositories/ordersRepository.js';

export async function createClients(req, res) {
    const client = req.body;
  
    try {

      const {name, address, phone} = client;
      await clientsRepository.createClient(name, address, phone);
  
      res.sendStatus(201); // created
    } catch (error) {
      console.log(error);
      return res.sendStatus(500); // server error
    }
}

export async function getOrderByClient(req, res) {
  const { id } = req.params;

  try {
    const orders = await ordersRepository.getOrdersByClient(id);
    if(orders.rowCount === 0){
      return res.sendStatus(404); // not found
    }
    
    res.send(orders.rows)
  } catch (error) {
    console.log(error);
    return res.sendStatus(500); // server error
  }
}
