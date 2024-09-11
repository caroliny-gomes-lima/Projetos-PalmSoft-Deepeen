import { call, put } from "redux-saga/effects";
import { SessionStorage } from "../../../lib";
import { api, ResponseError } from "services";
import { Creators } from "./index";

export default function* statusProcessFiltersRequest() {
  try {
    const response = yield call(api.getFiltersStatusInProcess);
    yield put(Creators.statusProcessFiltersSuccess(response));
    SessionStorage.setItem("showingStatus", true);
    SessionStorage.setItem("process", response);
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.globalProductivityFailure());
  }
}
