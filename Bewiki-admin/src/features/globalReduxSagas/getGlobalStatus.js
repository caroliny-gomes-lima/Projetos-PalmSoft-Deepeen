import { put } from "redux-saga/effects";
import { SessionStorage } from "../../lib";
import { Creators } from ".";

export default function* getGlobalStatus() {
  const isLoggedIn = SessionStorage.getItem("isLoggedIn");
  if (isLoggedIn) {
    yield put(Creators.getUserInfosRequest());
    yield put(Creators.setIsLoggedIn(true));
  }
}
