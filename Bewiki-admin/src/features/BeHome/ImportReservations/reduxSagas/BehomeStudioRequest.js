import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../../services";
import { Creators } from "./index";

export default function* BehomeStudioRequest(data) {
  try {
    const response = yield call(api.getBehomeStudio, data);
    yield put(Creators.BehomeStudioRequestSuccess(response.data));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.BehomeStudioRequestFailure());
  }
}
