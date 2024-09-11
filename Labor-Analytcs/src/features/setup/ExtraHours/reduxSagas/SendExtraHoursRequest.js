import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../../services";
import { Creators } from "./index";
import { Alerts } from "lib";
import { format } from "date-fns";

export default function* SendExtraHoursRequest({ data }) {
  try {
    delete data.opName;
    delete data.opRegistry;
    delete data.opSector;
    delete data.opShift;
    delete data.opStatus;

    data["date"] = format(new Date(data.date), "yyy-MM-dd");
    data["amountHours"] = Number(data.amountHours);

    yield call(api.sendExtraHours, data);
    Alerts.alertSuccess(["Hora extra cadastrada com sucesso"]);

    yield put(Creators.GetExtraHours(data.idOperator));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.ExtraHoursFinish());
  }
}
