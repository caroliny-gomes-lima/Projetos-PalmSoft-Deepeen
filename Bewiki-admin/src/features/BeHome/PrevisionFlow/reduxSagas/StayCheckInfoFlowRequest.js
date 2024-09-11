import { call, put } from "redux-saga/effects";
import { Creators } from "./index";
import { api, ResponseError } from "../../../../services";

export default function* StayCheckInfoFlowRequest(
  startDate,
  endDate
) {
  try {
    const response = yield call(
      api.getBehomeStayCheckInfoFlow,
      startDate,
      endDate
    );
    yield put(Creators.StayCheckInfoFlowRequestSuccess(response.data));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.StayCheckInfoFlowRequestFailure());
  }
}
