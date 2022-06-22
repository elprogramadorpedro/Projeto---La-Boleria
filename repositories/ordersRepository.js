import db from "../config/db.js";

async function createOrder(clientId, cakeId, quantity, totalPrice, today) {

  return db.query(`
    INSERT INTO orders ("clientId", "cakeId", quantity, "createdAt","totalPrice")
    VALUES ($1, $2, $3, $4, $5)`, 
    [clientId, cakeId, quantity, today, totalPrice]);
}

const ordersRepository = {
    createOrder
};
    
export default ordersRepository;