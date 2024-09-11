import { SessionStorage } from "../../lib";
// TODO/HINT
/*
 * leitura do token para permissão de usuário (lib para leitura abaixo)
 * import jwt_decode from "jwt-decode";
 */

export default function getToken(response) {
  const token = response.headers.authorization;
  // TODO/HINT
  /*
   * leitura do token para permissão de usuário (token abaixo)
   * const decodedToken = jwt_decode(token);
   */
  SessionStorage.setItem("token", token);

  // TODO/HINT
  /*
   * leitura do token para permissão de usuário (exemplo abaixo)
   * const invalidRole = decodedToken.ROLES[0] === "ROLE_PARCEIRO";
   * if (!invalidRole) {
   *   SessionStorage.setItem("token", token);
   * }
   */

  return response;
}
