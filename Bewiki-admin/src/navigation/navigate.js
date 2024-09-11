import { Base64 } from "../lib";
import { history } from "../store";
import Constants from "../config/constants";

export const prefix = "";

export const paths = {
  login: prefix + "/",
  home: prefix + "/",
  forgotPassword: prefix + "/forgot_password",
  changePassword: prefix + "/change_password",
  userRegister: prefix + "/user_register",
  userList: prefix + "/user_list",
  users: prefix + "/users",
  cashBack: prefix + "/cashback",

  //-------Bework---------
  beWorkHistoricRelease: prefix + "/beWork/HistoricRelease",

  //-------Behome---------
  beHomeRequestedReservations: prefix + "/beHome/requestedReservations",
  beHomeRegister: prefix + "/beHome/registerApartment",
  beHomePrevisionFlow: prefix + "/beHome/behomePrevisionFlow",
  behomeHistoricList: prefix + "/beHome/beHomeHistoric",
  behomeStudiosList: prefix + "/beHome/behomeStudiosList",
  behomePendingCheckIns: prefix + "/beHome/pendingCheckIns",
  behomeSignatures: prefix + "/beHome/signatures",
  behomeStudiosEditing: prefix + "/behome/StudiosEditing",
  behomeReservationImport: prefix + "/behome/ReservationImport",

  //-------Bemarket---------
  beMarketCouponList: prefix + "/beMarket/couponList",
  beMarketRestaurantLists: prefix + "/beMarket/RestaurantLists",
};
export const navigateTo = {
  Home: () => navigate(paths.home),
  Landing: () => navigate(paths.login),
  ForgotPassword: () => navigate(paths.forgotPassword),
  ChangePassword: () => navigate(paths.changePassword),
  UserRegister: () => navigate(paths.userRegister),
  Users: () => navigate(paths.users),
  CashBack: () => navigate(paths.cashBack),
  exampleWithParams: (queryParam) =>
    navigate(`/example/${Base64.encode(queryParam)}`),

  //-------Bework---------
  BeWorkHistoricRelease: () => navigate(paths.beWorkHistoricRelease),
  //-------Behome---------
  BeHomeRequestedReservations: () =>
    navigate(paths.beHomeRequestedReservations),
  BeHomeRegister: () => navigate(paths.beHomeRegister),
  BehomePrevisionFlow: () => navigate(paths.beHomePrevisionFlow),
  BehomeHistoricList: () => navigate(paths.behomeHistoricList),
  BehomeStudiosList: () => navigate(paths.behomeStudiosList),
  BehomePendingCheckIns: () => navigate(paths.behomePendingCheckIns),
  BehomeSignatures: () => navigate(paths.behomeSignatures),
  BehomeStudiosEditing: () => navigate(paths.behomeStudiosEditing),
  BehomeReservationImport: () => navigate(paths.behomeReservationImport),
  //-------Bemarket---------
  BeMarketCouponList: () => navigate(paths.beMarketCouponList),
  BeMarketRestaurantLists: () => navigate(paths.beMarketRestaurantLists),
};

export const replaceTo = {
  Home: () => replace(paths.home),
  Landing: () => replace(paths.login),
  ForgotPassword: () => replace(paths.forgotPassword),
  ChangePassword: () => replace(paths.changePassword),
  UserRegister: () => replace(paths.userRegister),
  Users: () => replace(paths.users),
  CashBack: () => replace(paths.cashBack),
  exampleWithParams: (queryParam) =>
    replace(`/example/${Base64.encode(queryParam)}`),

  //-------Bework---------
  BeWorkHistoricRelease: () => replace(paths.beWorkHistoricRelease),

  //-------Behome---------
  BeHomeRequestedReservations: () => replace(paths.beHomeRequestedReservations),
  BehomeHistoricList: () => replace(paths.behomeHistoricList),
  BeHomeRegister: () => replace(paths.beHomeRegister),
  BehomePrevisionFlow: () => replace(paths.beHomePrevisionFlow),
  BeHomeApartmentList: () => replace(paths.beHomeApartmentList),
  BehomeStudiosList: () => replace(paths.behomeStudiosList),
  BehomePendingCheckIns: () => replace(paths.behomePendingCheckIns),
  BehomeSignatures: () => replace(paths.behomeSignatures),
  BehomeStudiosEditing: () => replace(paths.behomeStudiosEditing),
  BehomeReservationImport: () => replace(paths.behomeReservationImport),
  //-------Bemarket---------
  BeMarketCouponList: () => replace(paths.beMarketCouponList),
  BeMarketRestaurantLists: () => replace(paths.beMarketRestaurantLists),
};

export function navigate(pathname) {
  const element = document.getElementById(
    Constants.ELEMENTS.IDS.applicationDefaultScroll
  );
  if (element) {
    element.scrollTop = 0;
  }
  history.push({ pathname });
}

export function replace(pathname) {
  const element = document.getElementById(
    Constants.ELEMENTS.IDS.applicationDefaultScroll
  );
  if (element) {
    element.scrollTop = 0;
  }
  history.replace({ pathname });
}

export function goBack() {
  history.goBack();
}

export function goFoward() {
  history.goForward();
}
