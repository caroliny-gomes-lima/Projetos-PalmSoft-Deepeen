import { call, put } from "redux-saga/effects";
import { api, ResponseError } from "../../../../services";
import { Creators } from "./index";
export default function* BehomeStudioListDataGet(
  page,
  size,
  categoryId,
  status,
  stayType
) {
  try {
    const response = yield call(
      api.getBehomeStudioListData,
      page,
      size,
      categoryId,
      status,
      stayType
    );
    yield put(Creators.BehomeStudioListDataGetSuccess(response));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.BehomeStudioListDataGetFailure());
  }
}
