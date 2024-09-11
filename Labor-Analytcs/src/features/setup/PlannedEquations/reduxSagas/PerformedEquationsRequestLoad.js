import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../../services";
import { Creators } from "./index";

export default function* PerfomedEquationsRequestLoad() {
  try {
    const response = yield call(api.getPerformedEquationsSetup);
    yield put(Creators.PerformedEquationsRequestLoadSuccess(response.data));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.EquationsRequestLoadFailure());
  }
}
