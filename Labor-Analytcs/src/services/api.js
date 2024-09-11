import { create } from "apisauce";
import caller from "./helpers/caller";
import jwt_decode from "jwt-decode";

import { SessionStorage } from "../lib";
import Models from "./models";
import Constants from "../config/constants";

const apiUrl = Constants.HML
  ? "https://deepen.ianclive.com"
  : "https://laboranalytics.com.br";

const urls = {
  COJ: `${apiUrl}/api_labor`,
  RCO: `${apiUrl}/api_labor_rio_claro`,
  EAA: `${apiUrl}/api_labor_escada`,
  FPP: `${apiUrl}/api_labor_castro`,
};

const api = create({
  baseURL: getUrl(localStorage.getItem("cdValue")),
  timeout: 1000000,
});

function getUrl(value) {
  return urls[value] !== undefined ? urls[value] : urls["COJ"];
}

async function changeApi(value) {
  let newUrl = getUrl(value);
  api.setBaseURL(newUrl);
}

api.addRequestTransform((request) => {
  const token = SessionStorage.getItem("token");
  if (token) {
    request.headers.authorization = token;
  }
});

api.addMonitor((response) => {
  const token = response.headers.authorization;

  if (token) {
    SessionStorage.setItem("token", token);
  }
});

async function getToken(loginData) {
  return caller(api.post, "/login", Models.getToken, loginData);
}

async function getUserInfos() {
  const decodedToken = jwt_decode(SessionStorage.getItem("token"));
  return caller(
    api.get,
    `/user/get_by_id?id=${decodedToken.user_id}`,
    Models.getUserInfos
  );
}

async function sendRecoveryPasswordRequest(email) {
  return caller(
    api.post,
    `/access/password_reset_request?email=${Models.sendPasswordRequest(email)}`
  );
}
async function sendRecoveryPasswordNewPassword(password) {
  return caller(
    api.post,
    "/access/password_reset_confirmation",
    Models.sendNewPassword,
    password
  );
}
async function recoveryPasswordCode(code) {
  return caller(
    api.post,
    "/access/password_reset_code",
    Models.sendPasswordCode,
    code
  );
}
async function changePassword(data) {
  return caller(api.post, "/user/change_password", null, data);
}
async function createAccess(data) {
  return caller(
    api.post,
    "/user/insert",
    null,
    Models.sendCreateAccessModel(data)
  );
}
async function getListaAcessos() {
  return caller(api.get, "/user/get_all", Models.getListaAcessos);
}
async function updateUserAccess(data) {
  return caller(
    api.post,
    "/user/update",
    null,
    Models.sendUpdateUserAccessModel(data)
  );
}

async function getOperadores() {
  return caller(api.get, "/operator/get_all", Models.getOperadores);
}

async function getFiltersStatusInProcess() {
  return caller(
    api.get,
    "/process/get_all_in_process",
    Models.getFiltersStatusInProcess
  );
}

// TODO/HINT - Produtividade =-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=

async function getGlobalProductivityChart(filters, cancelToken) {
  if (cancelToken) {
    api.addRequestTransform((request) => {
      request.cancelToken = cancelToken;
    });
  }
  return caller(
    api.get,
    `/shipping_order/productivity_global?type=${filters.type}&id=${filters.id}&shippingStartDate=${filters.shippingStartDate}&shippingEndDate=${filters.shippingEndDate}&equalsProcess=${filters.equalsProcess}&dataView=${filters.dataView}`,
    Models.getGlobalProductivityChart
  );
}

async function getGlobalProductivityEffectiveChart(filters, cancelToken) {
  if (cancelToken) {
    api.addRequestTransform((request) => {
      request.cancelToken = cancelToken;
    });
  }
  return caller(
    api.get,
    `/shipping_order/productivity_global_effective?type=${filters.type}&id=${filters.id}&shippingStartDate=${filters.shippingStartDate}&shippingEndDate=${filters.shippingEndDate}&equalsProcess=${filters.equalsProcess}&dataView=${filters.dataView}`,
    Models.getGlobalProductivityChart
  );
}

// TODO/HINT - Capacidade =-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=

async function getGlobalCapacityChart(filters) {
  return caller(
    api.get,
    `/shipping_order/capacity_global?type=${filters.type}&id=${filters.id}&shippingStartDate=${filters.shippingStartDate}&shippingEndDate=${filters.shippingEndDate}`,
    Models.getGlobalCapacityChart
  );
}
async function getCapacityIdleOrdering(filters) {
  return caller(
    api.get,
    `/shipping_order/capacity_global_by_operator?type=${filters.type}&id=${filters.id}&shippingStartDate=${filters.shippingStartDate}&shippingEndDate=${filters.shippingEndDate}`,
    Models.getCapacityIdleOrdering
  );
}

async function getCapacityProcessCharts(filters) {
  return caller(
    api.get,
    `/shipping_order/capacity_global_by_process?type=${filters.type}&id=${filters.id}&shippingStartDate=${filters.shippingStartDate}&shippingEndDate=${filters.shippingEndDate}`,
    Models.getCapacityProcessCharts
  );
}

async function getCapacityHistoricChart(filters) {
  return caller(
    api.get,
    `/shipping_order/capacity_global_history?type=${filters.type}&id=${filters.id}&shippingStartDate=${filters.shippingStartDate}&shippingEndDate=${filters.shippingEndDate}`,
    Models.getCapacityHistoricCharts
  );
}

// TODO/HINT - Custos =-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=

async function getCostsServingList() {
  const response = require("./mocks/getCostsServingList.json");
  return Models.getCostsServingList(response);
  // TODO/HINT
  /*
   * TODO remoção de mock e integração
   * return caller(api.post, "/login", Models.login, loginData);
   */
}

// TODO/HINT - Oportunidade =-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=

async function getOpportunitiesCapacitySummary() {
  const response = require("./mocks/getOpportunitiesCapacitySummary.json");
  return Models.getOpportunitiesCapacitySummary(response);
  // TODO/HINT
  /*
   * TODO remoção de mock e integração
   * return caller(api.post, "/login", Models.login, loginData);
   */
}

// TODO/HINT - Setup/Equações =-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=

async function getEquationsSetup() {
  return caller(api.get, `/builder/planned/get_all`, Models.getEquationsSetup);
}

async function sendEquationsSetup(data) {
  return caller(api.post, "/builder/planned/insert", null, data);
}

async function deleteEquationSetup(id) {
  return caller(api.delete, `/builder/planned/delete/${id}`, null, null);
}

async function getPerformedEquationsSetup() {
  return caller(
    api.get,
    `/builder/spent/get_all`,
    Models.getPerformedEquationsSetup
  );
}

async function sendPerformedEquationsSetup(data) {
  return caller(api.post, "/builder/spent/insert", null, data);
}

async function deletePerfomedEquationsSetup(id) {
  return caller(api.delete, `/builder/spent/delete/${id}`, null, null);
}

// TODO/HINT - Seturp/Operators  =-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=

async function getOperators(idOp, sector, shift, status) {
  return caller(
    api.get,
    `/operator/get?idOp=${idOp}&sector=${sector}&shift=${shift}&status=${status}&`,
    Models.getOperators
  );
}
async function sendOperators(data) {
  return caller(api.post, "/operator/insert", null, data);
}

async function getExtraHours(idOp) {
  return caller(api.get, `/extra_hours/get?idOp=${idOp}`, Models.getExtraHours);
}
async function sendExtraHours(data) {
  return caller(api.post, "/extra_hours/insert", null, data);
}
async function deleteExtraHours(id) {
  return caller(api.delete, `/extra_hours/delete?id=${id}`, null, null);
}

async function getTurns() {
  return caller(api.get, `/work_shift/get`, Models.getTurns);
}

async function sendTurns(data) {
  return caller(api.post, "/work_shift/insert", null, data);
}
async function updateTurns(data, id) {
  return caller(api.put, `/work_shift/update?id=${id}`, null, data);
}
async function deleteTurns(id) {
  return caller(api.delete, `work_shift/delete?id=${id}`, null, null);
}

async function getWorkShiftFilters() {
  return caller(api.get, `/work_shift/get`, Models.getWorkShiftFilter);
}
async function getWorkShifts() {
  return caller(api.get, `/work_shift/get`, Models.getWorkShift);
}

async function getSectors() {
  return Models.getSectors();
}
async function getSectorsFilter() {
  return Models.getSectorsFilter();
}
async function getStatusFilter() {
  return caller(api.get, `/status/get`, Models.getStatusFilter);
}
async function getStatus() {
  return caller(api.get, `/status/get`, Models.getStatus);
}
async function getOpType() {
  return caller(api.get, `/operatorType/get`, Models.getOpType);
}
async function getOpTypeFilter() {
  return caller(api.get, `/operatorType/get`, Models.getOpTypeFilter);
}

async function getReports(startDate, endDate) {
  return caller(
    api.get,
    `/shipping_order/all_ots?shippingStartDate=${startDate}&shippingEndDate=${endDate}`,
    Models.getReportList
  );
}

const apiServices = {
  changeApi,
  getToken,
  getUserInfos,
  sendRecoveryPasswordRequest,
  sendRecoveryPasswordNewPassword,
  recoveryPasswordCode,
  changePassword,
  createAccess,
  getListaAcessos,
  updateUserAccess,
  getOperadores,
  getFiltersStatusInProcess,

  // Productivity
  getGlobalProductivityChart,
  getGlobalProductivityEffectiveChart,

  // Capacity
  getGlobalCapacityChart,
  getCapacityIdleOrdering,
  getCapacityProcessCharts,
  getCapacityHistoricChart,

  // Costs
  getCostsServingList,

  // Opportunities
  getOpportunitiesCapacitySummary,

  // Setup/Equações
  getEquationsSetup,
  sendEquationsSetup,
  getPerformedEquationsSetup,
  sendPerformedEquationsSetup,
  deleteEquationSetup,
  deletePerfomedEquationsSetup,

  // Setup/Operadores
  getTurns,
  getOperators,
  getExtraHours,
  sendTurns,
  sendExtraHours,
  sendOperators,
  deleteExtraHours,
  updateTurns,
  deleteTurns,
  getWorkShiftFilters,
  getWorkShifts,
  getSectorsFilter,
  getSectors,
  getStatusFilter,
  getStatus,
  getOpType,
  getOpTypeFilter,

  // Relatorio
  getReports,
};

export default apiServices;
