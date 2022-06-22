import clientsRepository from '../repositories/clientsRepository.js'

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

