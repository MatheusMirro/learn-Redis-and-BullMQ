import { registrationQueue } from "../lib/Queue";

export default {
  async store(req, res) {
    const { name, email, password } = req.body;

    const user = {
      name,
      email,
      password,
    };

    if (user) {
      await registrationQueue.add("RegistrationMail", user);
      return res.json(user);
    } else {
      console.error("Dados de usuário ausentes ou inválidos.");
      return res.status(400).json({ error: "Dados de usuário inválidos" });
    }
  },
};
