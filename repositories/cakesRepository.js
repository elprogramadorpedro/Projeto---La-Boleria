import db from "../config/db.js";

async function getCakeByName(name) {
  return db.query(`SELECT * FROM cakes WHERE name = $1 `, [name]);
}

async function createCake(name, price, description, image) {

  return db.query(`
    INSERT INTO cakes (name, price, description, image) 
    VALUES ($1, $2, $3, $4)`, 
    [name, price, description, image]);
}

const cakesRepository = {
  getCakeByName,
  createCake
};
  
  export default cakesRepository;