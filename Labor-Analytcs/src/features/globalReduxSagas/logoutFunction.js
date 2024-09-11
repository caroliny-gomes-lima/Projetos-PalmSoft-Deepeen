import { put } from "redux-saga/effects";
import { Creators } from ".";
import { Creators as ProductivityCreators } from "../productivity/reduxSagas";
import { SessionStorage } from "../../lib";
import { navigateTo } from "../../navigation/navigate";

export default function* globalLogout() {
  SessionStorage.removeItem("isLoggedIn");
  SessionStorage.removeItem("token");
  yield put(Creators.setIsLoggedIn(false));
  yield put(ProductivityCreators.exit());
  navigateTo.Landing();
}
