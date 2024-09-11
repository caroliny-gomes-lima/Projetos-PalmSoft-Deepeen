import { Constants } from "../config";
import { Base64 } from "../lib";
import { history } from "../store";

export const prefix = "/labor";
export const paths = {
  homePreLogin: prefix + "/",
  home: prefix + "/home",
  login: prefix + "/login",
  forgotPassword: prefix + "/forgot_password",
  productivity: prefix + "/productivity",
  capacity: prefix + "/capacity",
  costs: prefix + "/costs",
  cdMap: prefix + "/cd_map",
  opportunity: prefix + "/opportunity",
  changePassword: prefix + "/change_password",
  userRegister: prefix + "/user_register",
  userList: prefix + "/user_list",
  report: prefix + "/report",
  setupEquation: prefix + "/setup_equation",
  performedEquation: prefix + "/performed_equation",
  operators: prefix + "/operators",
  extraHours: prefix + "/extra_hours",
  turns: prefix + "/turns",
  pageError404: "*",
};
export const navigateTo = {
  Home: () => navigate(paths.home),
  Login: () => navigate(paths.login),
  HomePreLogin: () => navigate(paths.homePreLogin),
  CDMap: () => navigate(paths.cdMap),
  Landing: () => navigate(paths.login),
  ForgotPassword: () => navigate(paths.forgotPassword),
  Productivity: () => navigate(paths.productivity),
  Capacity: () => navigate(paths.capacity),
  Costs: () => navigate(paths.costs),
  Opportunity: () => navigate(paths.opportunity),
  ChangePassword: () => navigate(paths.changePassword),
  UserRegister: () => navigate(paths.userRegister),
  UserList: () => navigate(paths.userList),
  SetupEquation: () => navigate(paths.setupEquation),
  PerformedEquation: () => navigate(paths.performedEquation),
  Report: () => navigate(paths.report),
  Operators: () => navigate(paths.operators),
  Turns: () => navigate(paths.turns),
  ExtraHours: () => navigate(paths.extraHours),
  exampleWithParams: (queryParam) =>
    navigate(`/example/${Base64.encode(queryParam)}`),
};

export const replaceTo = {
  HomePreLogin: () => replace(paths.homePreLogin),
  Landing: () => replace(paths.login),
  ForgotPassword: () => replace(paths.forgotPassword),
  Productivity: () => replace(paths.productivity),
  CDMap: () => replace(paths.cdMap),
  Capacity: () => replace(paths.capacity),
  Costs: () => replace(paths.costs),
  Opportunity: () => replace(paths.opportunity),
  ChangePassword: () => replace(paths.changePassword),
  UserRegister: () => replace(paths.userRegister),
  UserList: () => replace(paths.userList),
  SetupEquation: () => replace(paths.setupEquation),
  PerformedEquation: () => replace(paths.performedEquation),
  Report: () => replace(paths.report),
  Operators: () => replace(paths.operators),
  ExtraHours: () => replace(paths.extraHours),
  Turns: () => replace(paths.turns),
  exampleWithParams: (queryParam) =>
    replace(`/example/${Base64.encode(queryParam)}`),
  pageError404: () => replace(paths.pageError404),
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
