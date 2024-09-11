import { call, put } from "redux-saga/effects";
import { ResponseError, api } from "../../../../services";
import { Creators } from "./index";

function dateFormat(date) {
  date = new Date(date);
  const hh = ("0" + date.getHours()).slice(-2);
  const mm = ("0" + date.getMinutes()).slice(-2);
  return `${hh}:${mm}:00`;
}

export default function* SendTurnsRequest({ data }) {
  try {
    data.timeWeekStart = data?.timeWeekStart
      ? dateFormat(data.timeWeekStart)
      : null;
    data.timeWeekEnd = data?.timeWeekEnd ? dateFormat(data.timeWeekEnd) : null;
    data.timeSundayStart = data?.timeSundayStart
      ? dateFormat(data.timeSundayStart)
      : null;
    data.timeSundayEnd = data?.timeSundayEnd
      ? dateFormat(data.timeSundayEnd)
      : null;
    data.timeSaturdayStart = data?.timeSaturdayStart
      ? dateFormat(data.timeSaturdayStart)
      : null;
    data.timeSaturdayEnd = data?.timeSaturdayEnd
      ? dateFormat(data.timeSaturdayEnd)
      : null;

    yield call(api.sendTurns, data);
    yield put(Creators.GetTurns());
    yield put(Creators.TurnsFinish());
  } catch (response) {
    const errorResponse = new ResponseError(response);
    errorResponse.alertMessage();
    yield put(Creators.TurnsFinish());
  }
}
