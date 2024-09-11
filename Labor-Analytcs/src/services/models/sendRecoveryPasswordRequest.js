import { Console } from "../../lib";

function sendRecoveryPass(email) {
  if (!email)
    Console.errorParse(
      "email",
      email,
      null,
      null,
      "Não foi enviado um e-mail para a solicitação."
    );
  return email;
}

export default sendRecoveryPass;
