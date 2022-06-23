import db from "../config/db.js";

async function createOrder(clientId, cakeId, quantity, totalPrice, today) {

  return db.query(`
    INSERT INTO orders ("clientId", "cakeId", quantity, "createdAt","totalPrice")
    VALUES ($1, $2, $3, $4, $5)`, 
    [clientId, cakeId, quantity, today, totalPrice]);
}

async function getOrders() {
  return db.query(`SELECT * FROM orders`);
}

async function getOrdersByDate(date) {
  return db.query(`SELECT * FROM orders WHERE "createdAt" = $1`, [date]);
}

async function getOrdersById(id) {
  return db.query(`SELECT * FROM orders WHERE id = $1`, [id]);
}

async function getOrdersByClient(clientId) {
  return db.query(`SELECT * FROM orders WHERE "clientId" = $1`, [clientId]);
}
const ordersRepository = {
    createOrder,
    getOrders,
    getOrdersByDate,
    getOrdersById,
    getOrdersByClient
};
    
export default ordersRepository;