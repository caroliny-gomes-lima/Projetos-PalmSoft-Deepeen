import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../services";
import { Creators } from "./index";

export default function* opportunitiesUnassignedHoursRequest() {
  try {
    const { data } = yield call(api.getOpportunitiesUnassignedHours);
    yield put(Creators.opportunitiesUnassignedHoursSuccess(data));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.opportunitiesUnassignedHoursFailure());
  }
}
