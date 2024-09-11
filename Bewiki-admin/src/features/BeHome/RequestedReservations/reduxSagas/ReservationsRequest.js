import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../../services";
import { Creators } from "./index";

export default function* ReservationsRequest(
  page,
  sort,
  pageSize,
  staySubscriptionType
) {
  try {
    const response = yield call(
      api.getBeHomeReservations,
      page,
      sort,
      pageSize,
      staySubscriptionType
    );
    yield put(Creators.ReservationsRequestSuccess(response.data));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.ReservationsFailure());
  }
}
