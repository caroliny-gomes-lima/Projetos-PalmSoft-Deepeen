import { call, put } from "redux-saga/effects";
import { Alerts, Filters, SessionStorage } from "../../../lib";
import { ResponseError, api } from "../../../services";
import { Creators } from "./index";

export default function* globalProductivityRequest({
  filters = {},
  cancelToken,
}) {
  try {
    const prodType = filters.prodType ? filters.prodType : 1;
    delete filters.prodType;
    if (
      Object.keys(filters).length === 0 &&
      SessionStorage.getItem("filters") !== null
    ) {
      filters = SessionStorage.getItem("filters");
    }

    filters.shippingStartDate = Filters.fixDateToRequest(
      filters.shippingStartDate,
      -6
    );
    filters.shippingEndDate = Filters.fixDateToRequest(
      filters.shippingEndDate,
      0
    );
    filters.id = filters.id != null ? filters.id : -1;
    filters.type = filters.type != null ? filters.type : "ALL";
    filters.equalsProcess =
      filters.equalsProcess != null ? filters.equalsProcess : false;
    filters.dataView = filters.dataView != null ? filters.dataView : "DAY";
    console.log(filters.id);
    let response;
    if (prodType === 1) {
      response = yield call(
        api.getGlobalProductivityChart,
        filters,
        cancelToken
      );
      SessionStorage.setItem("prodType", "Média");
    } else {
      response = yield call(
        api.getGlobalProductivityEffectiveChart,
        filters,
        cancelToken
      );
      SessionStorage.setItem("prodType", "Efetiva");
    }

    if (response.error === "OK") {
      Alerts.alertWarning("Sem registro no período.");
      yield put(Creators.globalProductivityFailure());
      return;
    } else if (response.error === "NOK") {
      yield put(Creators.globalProductivityFailure());
      return;
    }

    const current = SessionStorage.getItem("filterStatusLoad") || [];
    current.push(filters);
    SessionStorage.setItem("filtersStatusActual", current);
    console.log(response.filters);
    yield put(Creators.globalProductivitySuccess(response.globalProductivity));
    yield put(
      Creators.historicProductivitySuccess(response.productivityHistory)
    );
    yield put(
      Creators.orderingProductivitySuccess(response.productivityByOperator)
    );
    yield put(
      Creators.productivityProcessSuccess(response.productivityBySector)
    );
    yield put(Creators.geralDataDataSuccess(response.generalData));
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.globalProductivityFailure());
  }
}
