import { put, call } from "redux-saga/effects";
import { Creators } from ".";
import { ResponseError } from "../../services";

import { api } from "../../services";

export default function* getWorkShiftRequest() {
  try {
    const dataF = yield call(api.getWorkShiftFilters);
    const data = yield call(api.getWorkShifts);

    yield put(Creators.getWorkShiftSucess(dataF.data, data.data));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.getWorkShiftFailure());
  }
}
