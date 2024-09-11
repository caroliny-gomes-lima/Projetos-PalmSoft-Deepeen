import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../../services";
import { Creators } from "./index";

export default function* EquationsRequestDelete({ data }) {
  try {
    if (data.type === 1) {
      yield call(api.deleteEquationSetup, data.data.id);
    } else {
      yield call(api.deletePerfomedEquationsSetup, data.data.id);
    }
    yield put(Creators.PlannedEquationsRequestLoad());
    yield put(Creators.PerformedEquationsRequestLoad());
    yield put(Creators.EquationsRequestDeleteFinish());
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.EquationsRequestDeleteFinish());
  }
}
