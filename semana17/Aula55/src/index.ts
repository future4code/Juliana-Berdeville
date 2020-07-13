import knex from "knex"
import dotenv from "dotenv"
import express from "express"
import { AddressInfo } from "net"
import { v4 } from "uuid"
import {BdConnection} from '../src/BdConnection'

/*Criando App  backend - endpoint (API)*/
const app = express();
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  });;
app.use(express.json());
/*Criando App  backend - endpoint (API)*/

/*Criando um novo usário com a classe BdConnection*/
  const falandoComOBD = new BdConnection() /*var falandoComOBD do tipo BdConnection*/

  const criandoUsuario = falandoComOBD.createNewUser('123456','oie@oie.com','ronaldinho')
  /* chamamos, no index.ts, o método da classe BdConnection.ts -- createNewUser -- e 
  passamos pra ele 3 argumentos: (id) -- 123456 --, (email) -- oie@oie.com -- e 
  (password) -- ronaldinho.*/
/*Criando um novo usário com a classe BdConnection*/



