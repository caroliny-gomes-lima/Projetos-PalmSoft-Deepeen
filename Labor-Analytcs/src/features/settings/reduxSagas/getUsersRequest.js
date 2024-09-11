import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../services";
import { Creators } from "./index";

export default function* getUsersRequest() {
  try {
    const response = yield call(api.getListaAcessos);
    yield put(Creators.getUsersSuccess(response.data));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.getUsersFailure());
  }
}
