import "dotenv/config";
import express from "express";
import UserController from "./app/controllers/UserController";

const app = express();
app.use(express.json());

app.post("/users", UserController.store);

app.listen(3333, () => {
  console.log("Servidor rodando na porta 3333");

  let contador = 1;

  const interval = setInterval(() => {
    if (contador <= 1000) {
      console.log(contador);
      contador++;
    } else {
      clearInterval(interval);
    }
  }, 1000);
});
