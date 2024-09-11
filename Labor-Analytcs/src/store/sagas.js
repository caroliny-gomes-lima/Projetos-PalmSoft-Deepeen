import { all } from "redux-saga/effects";
import sagas from "../features/sagas";

export default function* rootSaga() {
  yield all(sagas);
}
