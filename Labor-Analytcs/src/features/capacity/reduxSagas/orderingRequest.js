import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../services";
import { Creators } from "./index";

export default function* orderingRequest({ filters = {} }) {
  try {
    filters.shippingStartDate = "2020-12-01";
    filters.shippingEndDate = "2020-12-31";
    const data = yield call(api.getCapacityIdleOrdering, filters);
    yield put(Creators.orderingSuccess(data.data));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.orderingFailure());
  }
}
