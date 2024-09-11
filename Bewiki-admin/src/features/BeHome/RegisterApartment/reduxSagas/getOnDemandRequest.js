import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../../services";
import { Creators } from "./index";

export default function* BeHomeOnDemandRequest({ data }) {
  try {
    const response = yield call(api.getBeHomeOnDemand, data);

    yield put(Creators.BeHomeOnDemandRequestSuccess(response.data?.content));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.BeHomeOnDemandRequestFailure());
  }
}
