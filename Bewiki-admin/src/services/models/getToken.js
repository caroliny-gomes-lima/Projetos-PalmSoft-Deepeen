import { SessionStorage } from "../../lib";
export default function getToken(response) {
  const token = response.authorization;
  SessionStorage.setItem("token", token);
  return response;
}
