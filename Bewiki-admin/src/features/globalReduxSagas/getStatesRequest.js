import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../services";
import { Creators } from "./index";

export default function* getStatesRequest({ data }) {
  try {
    const response = yield call(api.getState, data);
    yield put(Creators.getStatesRequestSuccess(response.data));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.getStatesRequestFailure());
  }
}
