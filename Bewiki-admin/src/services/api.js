import { create } from "apisauce";
import caller from "./helpers/caller";
import buildQueryParamsUrl from "./helpers/buildQueryParamsUrl";

import { SessionStorage } from "../lib";
import Models from "./models";

const { REACT_APP_API_URL } = process.env;

export const api = create({
  baseURL: REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.addRequestTransform((request) => {
  const token = SessionStorage.getItem("token");

  if (token) {
    request.headers.authorization = `Bearer ${token}`;
  }
});

api.addMonitor((response) => {
  const { headers } = response;
  if (headers?.authorization) {
    SessionStorage.setItem("token", headers.authorization);
  }
});

async function getToken(loginData, captcha) {
  return caller(api.post, "/login", null, loginData);
}

async function getUserInfos() {
  return caller(api.get, `/user`, Models.getUserInfos);
}

async function passwordReset(email) {
  return caller(
    api.post,
    buildQueryParamsUrl("/password/reset/request", { email })
  );
}

async function newPasswordConfirm(email, password, code) {
  return caller(api.put, "/password/reset/confirm", null, {
    email,
    password,
    code,
  });
}

async function validateToken(email, code) {
  return caller(api.post, "/password/reset/code", null, { email, code });
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

async function getState() {
  return caller(api.get, `/state`, Models.getState);
}

//--------------------CASHBACK-------------------------//
async function getCashBackList({ page, sort, pageSize, sectorId }) {
  return caller(
    api.get,
    buildQueryParamsUrl("/cashback/transaction", {
      page,
      pageSize,
      sort,
      sectorId,
    }),
    Models.getCashBackList
  );
}

async function DeleteBalanceCashback(UserId, cashBackValue) {
  const body = { userId: UserId, value: cashBackValue };
  return caller(api.patch, "/cashback/transaction/wallet/remove", null, body);
}

async function AddBalanceCashback(UserId, cashBackValue) {
  const body = { userId: UserId, value: cashBackValue };
  return caller(api.patch, "/cashback/transaction/wallet/add", null, body);
}
//--------------------USUÁRIOS-------------------------//

async function getEnabledUsers({ page, sort, pageSize, blocked = false }) {
  return caller(
    api.get,
    buildQueryParamsUrl("/user/all", { page, sort, pageSize, blocked }),
    Models.getEnabledUsers
  );
}

async function EnabledUsersDelete(userId) {
  return caller(
    api.delete,
    buildQueryParamsUrl("/user", { userId }),
    null,
    null
  );
}

async function getBlockedUsers({ page, sort, pageSize, blocked = true }) {
  return caller(
    api.get,
    buildQueryParamsUrl("/user/all", { page, sort, pageSize, blocked }),
    Models.getEnabledUsers
  );
}

async function EnabledUsersBlock(userId) {
  return caller(api.patch, `/user/block/${userId}`, null, null);
}

async function getInfoCancellation({ userId, status = "CANCELLED" }) {
  return caller(
    api.get,
    buildQueryParamsUrl("/behome/stay/subscription", { userId, status }),
    Models.getInfoCancellation
  );
}

async function UnblockUsers(userId) {
  return caller(api.patch, `/user/unblock/${userId}`, null, null);
}

async function getBlackListUsers({ page, sort, pageSize }) {
  return caller(
    api.get,
    buildQueryParamsUrl("/blacklist", { page, sort, pageSize }),
    Models.getBlackListUsers
  );
}

async function BlackListUsersPost(data) {
  return caller(api.post, "/blacklist", null, data);
}

async function getCashbackTransaction(userId) {
  return caller(
    api.get,
    `/cashback/transaction?userId=${userId}`,
    Models.getCashbackTransaction
  );
}

//
//  | | ------------------------------------ BEHOME ------------------------------------ | |
//

async function getBeHomeOnDemand() {
  return caller(api.get, `/behome/stay/extrafeature`, Models.getBeHomeOnDemand);
}

async function getBeHomeLocation() {
  return caller(api.get, `/behome/stay/localization`, Models.getBeHomeLocation);
}

async function getBeHomeAmenity() {
  return caller(api.get, `/behome/stay/amenity`, Models.getBeHomeAmenity);
}

async function getImage(id) {
  return caller(api.get, `/image/${id}`, null, null, {
    headers: { Accept: "*/*" },
  });
}

//-------------------- Cadastro de Apartamentos --------------------
async function sendBeHomeRegisterApartment(data) {
  return caller(api.post, "/behome/stay/category", null, data);
}

//-------------------- Novas Requisições --------------------
async function getBeHomeStayCategory(stayType) {
  return caller(
    api.get,
    buildQueryParamsUrl("/behome/stay/category", { stayType }),
    Models.getBeHomeStayCategory
  );
}

async function getBeHomeReservations({
  page,
  sort,
  pageSize,
  staySubscriptionType,
}) {
  const status = ["WAITING"];
  return caller(
    api.get,
    buildQueryParamsUrl("/behome/stay/subscription", {
      page,
      pageSize,
      sort,
      staySubscriptionType,
      status,
    }),
    Models.getBeHomeRequestedReservations
  );
}

async function getBehomeStayIdRoom(categoryId) {
  return caller(
    api.get,
    buildQueryParamsUrl("/behome/stay/", { categoryId }),
    Models.getBehomeStayIdRoom,
    null
  );
}

async function beHomeRequestedReservationsTransfer(
  stayType,
  StaySubscriptionId,
  BehomeStayId
) {
  const stayTypeRouteMap = {
    S: "shortstay",
    L: "longstay",
  };
  return caller(
    api.patch,
    `/behome/${stayTypeRouteMap[stayType]}/subscription/change/stay/${StaySubscriptionId}/${BehomeStayId}`,
    null,
    null
  );
}

async function beHomeRequestedReservationsAccept(stayType, StaySubscriptionId) {
  const stayTypeRouteMap = {
    S: "shortstay",
    L: "longstay",
  };
  return caller(
    api.patch,
    `/behome/${stayTypeRouteMap[stayType]}/subscription/accept/${StaySubscriptionId}`,
    null,
    null
  );
}

async function beHomeRequestedReservationsCancell(
  stayType,
  StaySubscriptionId,
  cancelReason
) {
  const stayTypeRouteMap = {
    S: "shortstay",
    L: "longstay",
  };
  return caller(
    api.patch,
    `/behome/${stayTypeRouteMap[stayType]}/subscription/cancel/${StaySubscriptionId}`,
    null,
    cancelReason
  );
}

//--------------------------Assinaturas-----------------------------------
async function getBeHomeSubscriptions({
  page,
  sort,
  pageSize,
  staySubscriptionType,
  minCheckOutDate,
  maxCheckInDate,
}) {
  const status = ["ACCEPTED"];
  return caller(
    api.get,
    buildQueryParamsUrl("/behome/stay/subscription", {
      page,
      pageSize,
      sort,
      staySubscriptionType,
      minCheckOutDate,
      maxCheckInDate,
      status,
    }),
    Models.getBehomeSubscriptions
  );
}

async function getBeHomeTransaction(StaySubscriptionId) {
  return caller(
    api.get,
    `/behome/stay/subscription/transaction/${StaySubscriptionId}`,
    Models.getBeHomeTransaction
  );
}

async function cancelBeHomeSubscriptions(StaySubscriptionId, cancelReason) {
  return caller(
    api.patch,
    `/behome/longstay/subscription/cancel/${StaySubscriptionId}`,
    null,
    { cancelReason }
  );
}

//--------------------------Check-ins Pendentes---------------------------

async function getBehomePendingCheckIns({
  page,
  sort,
  pageSize,
  staySubscriptionType,
}) {
  const status = ["CHECKIN_WAITING_APPROVAL"];
  return caller(
    api.get,
    buildQueryParamsUrl("/behome/stay/subscription", {
      page,
      pageSize,
      sort,
      staySubscriptionType,
      status,
    }),
    Models.getBehomePendingCheckIns
  );
}

async function getBehomeGuestSheet({ checkInId }) {
  return caller(
    api.get,
    `/behome/stay/subscription/check/guestsheet/${checkInId}`,
    Models.getBeHomeGuestSheet
  );
}

async function cancelBehomeCheckIn(checkInId) {
  const body = { id: checkInId };
  return caller(
    api.patch,
    "/behome/stay/subscription/check/reprove",
    null,
    body
  );
}

async function approveBehomeCheckIn(checkInId) {
  const body = { id: checkInId };
  return caller(
    api.patch,
    "/behome/stay/subscription/check/approve",
    null,
    body
  );
}

async function transferBehomeCheckIn(stayType, subscriptionId, stayId) {
  const stayTypeRouteMap = {
    S: "shortstay",
    L: "longstay",
  };

  return caller(
    api.patch,
    `/behome/${stayTypeRouteMap[stayType]}/subscription/change/stay/${subscriptionId}/${stayId}`
  );
}

async function getBehomeCheckInTransferCategoriesInfo(stayType) {
  return caller(
    api.get,
    buildQueryParamsUrl("/behome/stay/category", { stayType }),
    Models.getBehomeCheckInTransferCategoriesInfo
  );
}

async function getBehomeCheckInTransferAvailableRooms(categoryId) {
  const status = "VAGO_LIMPO";
  return caller(
    api.get,
    buildQueryParamsUrl("/behome/stay", { categoryId, status }),
    Models.getBehomeCheckInTransferAvailableRooms
  );
}

//--------------------------Previsão de fluxo---------------------------

async function getBehomeStayPrevisionFlow(
  page,
  pageSize,
  sort,
  name,
  stayType,
  status
) {
  return caller(
    api.get,
    buildQueryParamsUrl("/behome/stay", {
      page,
      size: pageSize,
      sort,
      name,
      stayType,
      behomeStayStatus: status,
    }),
    Models.getBehomeStayPrevisionFlow
  );
}

async function getBehomeStayCheckInfoFlow({ startDate, endDate }) {
  return caller(
    api.get,
    buildQueryParamsUrl("/behome/stay/subscription/check/info", {
      startDate,
      endDate,
    }),
    Models.getBehomeStayCheckInfoFlow
  );
}

async function getBehomeStudioListData({
  page,
  size,
  categoryId,
  status,
  stayType,
}) {
  return caller(
    api.get,
    buildQueryParamsUrl("/behome/stay", {
      page,
      size,
      categoryId,
      status,
      stayType,
    }),
    Models.getBehomeStudioListData
  );
}

//--------------------------Fluxo de importação---------------------------
async function PostReservation(data) {
  return caller(api.post, "/behome/shortstay/subscription/import", null, data);
}

async function getBehomeStudio({ stayType }) {
  return caller(
    api.get,
    buildQueryParamsUrl("/behome/stay/category", { stayType }),
    Models.getBehomeStudio
  );
}

//--------------------------BeMarket---------------------------
//--------------------------Cupons---------------------------

async function getCoupons({ page, size }) {
  return caller(
    api.get,
    buildQueryParamsUrl("/coupon", {
      page,
      size,
    })
  );
}

async function couponRegisterCPF(id, cpf) {
  return caller(api.post, "/coupon/cpf", null, { id, cpf });
}

async function couponGetRedeemers(id) {
  return caller(api.get, `/coupon/${id}`);
}

//---------------------LISTA DE RESTAURANTES-----------------
async function getMerchants({ page, size, sort }) {
  return caller(
    api.get,
    buildQueryParamsUrl("/merchant", {
      page,
      size,
      sort,
    }),
    Models.getBeMarketMerchants
  );
}

const apiServices = {
  getToken,
  getUserInfos,
  passwordReset,
  validateToken,
  newPasswordConfirm,
  sendRecoveryPasswordNewPassword,
  recoveryPasswordCode,
  changePassword,
  createAccess,
  getListaAcessos,
  updateUserAccess,
  getState,
  //-------CashBack-----------
  getCashBackList,
  DeleteBalanceCashback,
  AddBalanceCashback,
  //-------Usuários-----------
  getEnabledUsers,
  EnabledUsersDelete,
  EnabledUsersBlock,
  getInfoCancellation,
  UnblockUsers,
  getBlockedUsers,
  getBlackListUsers,
  BlackListUsersPost,
  getCashbackTransaction,
  //------Behome-----------
  getBeHomeLocation,
  getBeHomeAmenity,
  getBeHomeOnDemand,
  getImage,
  getBeHomeStayCategory,
  getBehomeStayIdRoom,
  sendBeHomeRegisterApartment,
  getBeHomeReservations,
  beHomeRequestedReservationsTransfer,
  beHomeRequestedReservationsAccept,
  beHomeRequestedReservationsCancell,
  getBehomePendingCheckIns,
  getBehomeGuestSheet,
  cancelBehomeCheckIn,
  approveBehomeCheckIn,
  transferBehomeCheckIn,
  getBehomeCheckInTransferCategoriesInfo,
  getBehomeCheckInTransferAvailableRooms,
  getBeHomeSubscriptions,
  getBeHomeTransaction,
  cancelBeHomeSubscriptions,
  getBehomeStayPrevisionFlow,
  getBehomeStayCheckInfoFlow,
  getBehomeStudioListData,
  PostReservation,
  getBehomeStudio,
  //------BeMarket-----------
  getCoupons,
  couponRegisterCPF,
  couponGetRedeemers,
  getMerchants,
};

export default apiServices;
