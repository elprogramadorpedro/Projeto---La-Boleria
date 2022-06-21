import cakesRepository from "../repositories/cakesRepository.js";

export async function createCakes(req, res) {
    const cake = req.body;
  
    try {
      const nameCake = await cakesRepository.getCakeByName(cake.name)
      if (nameCake.rowCount > 0) {
        return res.sendStatus(409); // conflict
      }
  
      const {name, price, description, image} = cake;
      await cakesRepository.createCake(name, price, description, image);
  
      res.sendStatus(201); // created
    } catch (error) {
      console.log(error);
      return res.sendStatus(500); // server error
    }
  }