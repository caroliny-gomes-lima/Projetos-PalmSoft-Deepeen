import { format } from "date-fns";
import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../../services";
import { Creators } from "./index";

export default function* SendOperatorsRequest({ data }) {
  try {
    data["admissionDate"] = data["admissionDate"]
      ? format(new Date(data["admissionDate"]), "yyyy-MM-dd")
      : null;
    data["statusStart"] = data["statusStart"]
      ? format(new Date(data["statusStart"]), "yyyy-MM-dd")
      : null;
    data["statusEnd"] = data["statusEnd"]
      ? format(new Date(data["statusEnd"]), "yyyy-MM-dd")
      : null;

    yield call(api.sendOperators, data);

    yield put(Creators.OperatorsFinish());
    yield put(Creators.GetOperators(-1, "", 0, 0));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.OperatorsFinish());
  }
}
