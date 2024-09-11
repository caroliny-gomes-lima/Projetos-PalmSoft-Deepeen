import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../../services";
import { Creators } from "./index";

export default function* PendingCheckInsRequest(
  page,
  sort,
  pageSize,
  staySubscriptionType
) {
  try {
    const response = yield call(
      api.getBehomePendingCheckIns,
      page,
      sort,
      pageSize,
      staySubscriptionType
    );
    yield put(Creators.PendingCheckInsRequestSuccess(response.data));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.PendingCheckInsRequestFailure());
  }
}
