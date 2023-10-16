import Mail from "../lib/Mail";

export default {
  key: "RegistrationMail",
  async handle({ name, email }) {
    await Mail.sendMail({
      from: "Teste de fila <queue@queuetest.com.br>",
      to: `${name} <${email}>`,
      subject: "Recado Novo Velho",
      html: `Olá ${name}, este é o email de confirmação que seu projeto está funcionando!`,
    });
  },
};
