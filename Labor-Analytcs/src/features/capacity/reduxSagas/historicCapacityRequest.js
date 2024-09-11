import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../services";
import { Creators } from "./index";

export default function* historicCapacityRequest({ filters = {} }) {
  try {
    filters.shippingStartDate = "2020-12-01";
    filters.shippingEndDate = "2020-12-31";
    const data = yield call(api.getCapacityHistoricChart, filters);
    yield put(Creators.historicCapacitySuccess(data.data));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.historicCapacityFailure());
  }
}
/*
 *filters.shippingStartDate = Filters.fixDateToRequest(
 *      filters.shippingStartDate,
 *      -2
 *    );
 *    filters.shippingEndDate = Filters.fixDateToRequest(
 *      filters.shippingEndDate,
 *      -1
 *    );
 */
