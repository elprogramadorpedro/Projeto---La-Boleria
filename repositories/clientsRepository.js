import db from "../config/db.js";

async function createClient(name, address, phone) {

  return db.query(`
    INSERT INTO clients (name, address, phone) 
    VALUES ($1, $2, $3)`, 
    [name, address, phone]);
}
async function getClientById(id) {
  return db.query(`SELECT * FROM clients WHERE id = $1 `, [id]);
}

const clientsRepository = {
  createClient,
  getClientById
};
    
export default clientsRepository;