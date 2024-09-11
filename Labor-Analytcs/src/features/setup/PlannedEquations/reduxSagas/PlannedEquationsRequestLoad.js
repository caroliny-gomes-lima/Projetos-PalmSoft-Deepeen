import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../../services";
import { Creators } from "./index";

export default function* PlannedEquationsRequestLoad() {
  try {
    const response = yield call(api.getEquationsSetup);
    yield put(Creators.PlannedEquationsRequestLoadSuccess(response.data));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.EquationsRequestLoadFailure());
  }
}
