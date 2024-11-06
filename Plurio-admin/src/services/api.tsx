import { create, RequestTransform } from "apisauce";
import caller from "./helpers/caller";

import { SessionStorage } from "../utils";

const apiUrl = process.env.REACT_APP_API;

const api = create({
  baseURL: apiUrl,
  timeout: 500000,
});

api.addRequestTransform((request: any) => {
  const token = SessionStorage.getItem("token");

  if (token) {
    request.headers.authorization = token;
  }
});

api.addMonitor((response: any) => {
  const token = response.headers.authorization;

  if (token) {
    SessionStorage.setItem("token", token);
  }
});

async function getToken(loginData) {
  return caller(api.post, "/auth/sign_in", null, loginData);
}
async function sendRecoveryPasswordRequest(data) {
  return caller(
    api.post,
    `/access/password_reset_request?email=${data.email}`,
    null
  );
}

async function recoveryPasswordValidate(data) {
  return caller(api.post, "/access/password_reset_code", null, data);
}

async function sendRecoveryPasswordNewPassword(data) {
  return caller(
    api.post,
    `/access/password_reset_confirmation`,
    null,
    data.body,
    {
      headers: { Authorization: "Bearer " + data?.token },
    }
  );
}
// {  headers: { "Access-Control-Allow-Origin": "*" }}
async function getUserData(data) {
  return caller(api.get, "/user/find_current", null, data);
}

async function putChangePassword(data) {
  return caller(api.post, "/access/redefinition", null, data);
}


const apiServices = {
  sendRecoveryPasswordRequest,
  sendRecoveryPasswordNewPassword,
  recoveryPasswordValidate,

  getToken,

  getUserData,

  putChangePassword,

};

export default apiServices;
