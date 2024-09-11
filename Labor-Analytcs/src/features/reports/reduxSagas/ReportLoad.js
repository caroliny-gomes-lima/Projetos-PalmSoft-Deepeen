import { call, put } from "redux-saga/effects";
import { Alerts, Filters, SessionStorage } from "../../../lib";
import { ResponseError, api } from "../../../services";
import { Creators } from "./index";

function formatDate(date) {
  return date ? new Date(date).toISOString() : null;
}

export default function* ReportLoad({ data }) {
  try {
    SessionStorage.setItem("shippingEndDate", data.end);
    SessionStorage.setItem("shippingStartDate", data.start);

    data.end = Filters.fixDateToRequest(formatDate(data.end));
    data.start = Filters.fixDateToRequest(formatDate(data.start));

    const response = yield call(api.getReports, data.start, data.end);
    const lengthData = response.data.length;
    const tamanhoData = lengthData >= 100 ? 100 : lengthData;
    let response100 = [];
    for (let i = 0; i < tamanhoData; i++) {
      response100.push(response.data[i]);
    }
    if (lengthData <= 0) {
      yield put(Creators.reportRequestLoadSuccess(null, null));
      Alerts.alertWarning(["Sem dados para o período."]);
    } else {
      yield put(Creators.reportRequestLoadSuccess(response.data, response100));
      Alerts.alertSuccess([
        `Mostrando os primeiros ${tamanhoData} de ${lengthData} registros.`,
        "Para visualização completa, exportar o arquivo.",
      ]);
    }
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.reportRequestLoadFailure());
  }
}
