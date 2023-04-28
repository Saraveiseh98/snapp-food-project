import { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { VendorsApiResponse } from "../../models/vendor";
import {
  getVendorsFailure,
  getVendorsSuccess,
} from "../actions/vendorsActions";
import { vendorActionTypes } from "../actionTypes/vendorTypes";
import { instance as axiosInstance } from "../../config/api";

const getVendors = () =>
  axiosInstance.get("/mobile/v3/restaurant/vendors-list", {
    params: {
      lat: 35.774,
      long: 51.418,
      page: 0,
      page_size: 10,
    },
  });

function* getVendorsSaga() {
  try {
    const response: AxiosResponse<VendorsApiResponse> = yield call(getVendors);
    yield put(getVendorsSuccess({ data: response.data.data.finalResult }));
  } catch (e: unknown) {
    yield put(getVendorsFailure({ error: e }));
    yield;
  }
}

function* vendorsSaga() {
  yield all([takeLatest(vendorActionTypes.GET_VENDOR_REQUEST, getVendorsSaga)]);
}

export default vendorsSaga;
