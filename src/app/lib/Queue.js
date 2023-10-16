import { Queue, Worker } from "bullmq";
import redisConfig from "../../config/redis";
import RegistrationMail from "../jobs/RegistrationMail";

// Crie uma instância da fila (queue) com as configurações apropriadas.
export const registrationQueue = new Queue("RegistrationMail", {
  connection: redisConfig,
});

// Crie um worker associado à fila e defina a função que será executada quando uma tarefa for processada.
const worker = new Worker("RegistrationMail", async (job) => {
  await RegistrationMail.handle(job.data);
});

// Inicialize o worker.
worker.on("completed", (job) => {
  console.log(`Tarefa concluída: ${job.id}`);
});

worker.on("failed", (job, err) => {
  console.error(`Tarefa falhou: ${job.id}, Erro: ${err}`);
});
