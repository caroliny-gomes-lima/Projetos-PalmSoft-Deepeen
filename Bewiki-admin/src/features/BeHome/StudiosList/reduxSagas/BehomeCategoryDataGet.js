import { call, put } from "redux-saga/effects";
import { Creators } from "./index";
import { api, ResponseError } from "../../../../services";

export default function* BehomeCategoryDataGet({ stayType }) {
  try {
    const response = yield call(api.getBeHomeStayCategory, stayType);
    yield put(Creators.BehomeCategoryDataGetSuccess(response));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.BehomeCategoryDataGetFailure());
  }
}
