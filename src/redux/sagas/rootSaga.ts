import { all, fork } from "redux-saga/effects";
import vendorsSaga from "./vendorsSaga";

export function* rootSaga() {
  yield all([fork(vendorsSaga)]);
}
