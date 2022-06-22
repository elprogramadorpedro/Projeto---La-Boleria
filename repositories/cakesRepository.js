import db from "../config/db.js";

async function getCakeByName(name) {
  return db.query(`SELECT * FROM cakes WHERE name = $1 `, [name]);
}

async function getCakeById(id) {
  return db.query(`SELECT * FROM cakes WHERE id = $1 `, [id]);
}

async function createCake(name, price, description, image) {

  return db.query(`
    INSERT INTO cakes (name, price, description, image) 
    VALUES ($1, $2, $3, $4)`, 
    [name, price, description, image]);
}

const cakesRepository = {
  getCakeByName,
  getCakeById,
  createCake
};
  
export default cakesRepository;