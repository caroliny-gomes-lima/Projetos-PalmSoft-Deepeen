import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../../services";
import { Creators } from "./index";

export default function* EquationsRequestSave({ data }) {
  try {
    const period = data.period;
    const type = data.type;

    delete data.processS;
    delete data.equationExib;
    delete data.period;
    delete data.type;

    data["month"] = new Date(period).getMonth() + 1;
    data["year"] = new Date(period).getFullYear();

    data["isDefault"] = data["isDefault"] === "false";

    if (type === 1) {
      yield call(api.sendEquationsSetup, data);
    } else {
      data["timeSeparation"] = Number(data.timeSeparation);
      data["timeCheckout"] = Number(data.timeCheckout);
      yield call(api.sendPerformedEquationsSetup, data);
    }

    yield put(Creators.PlannedEquationsRequestLoad());
    yield put(Creators.PerformedEquationsRequestLoad());
    yield put(Creators.EquationsRequestSaveFinish());
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.EquationsRequestSaveFinish());
  }
}
