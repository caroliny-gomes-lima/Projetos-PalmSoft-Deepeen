import { call, put } from "redux-saga/effects";
import { api, ResponseError } from "../../../../services";
import { Creators } from "./index";
export default function* BehomeOccupancyDataGet(startDate, endDate) {
  try {
    const response = yield call(
      api.getBehomeStayCheckInfoFlow,
      startDate,
      endDate
    );
    yield put(Creators.BehomeOccupancyDataGetSuccess(response.data));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.BehomeOccupancyDataGetFailure());
  }
}
