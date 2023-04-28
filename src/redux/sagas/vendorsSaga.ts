import { VendorsState } from "./../types/vendorsTypes";
import { VendorsApiResponse } from "./../../models/vendor";
import { AxiosResponse } from "axios";
import { all, call, put, takeLatest, select } from "redux-saga/effects";

import {
  getVendorsFailure,
  getVendorsSuccess,
  loadMoreVendorsFailure,
  loadMoreVendorsSuccess,
} from "../actions/vendorsActions";
import { vendorActionTypes } from "../actionTypes/vendorTypes";
import { instance as axiosInstance } from "../../config/api";
import { VendorRequestParams } from "../types/vendorsTypes";

const defaultParams = {
  lat: 35.774,
  long: 51.418,
  page: 0,
  page_size: 10,
};

const getPageNumber = (state: { vendors: VendorsState }): number =>
  state.vendors.pageNumber;

const getVendors = (params: VendorRequestParams) =>
  axiosInstance.get("/mobile/v3/restaurant/vendors-list", {
    params,
  });

function* getVendorsSaga() {
  try {
    const response: AxiosResponse<VendorsApiResponse> = yield call(
      getVendors,
      defaultParams
    );
    yield put(
      getVendorsSuccess({
        data: response.data.data.finalResult,
        totalCount: response.data.data.count,
      })
    );
  } catch (e: unknown) {
    yield put(getVendorsFailure({ error: e }));
  }
}

function* loadMoreVendorsSaga() {
  try {
    const pageNumber: number = yield select(getPageNumber);
    const response: AxiosResponse<VendorsApiResponse> = yield call(getVendors, {
      ...defaultParams,
      page: Number(pageNumber) + 1,
    });
    yield put(
      loadMoreVendorsSuccess({
        data: response.data.data.finalResult,
        totalCount: response.data.data.count,
      })
    );
  } catch (e: unknown) {
    yield put(loadMoreVendorsFailure({ error: e }));
  }
}

function* vendorsSaga() {
  yield all([
    takeLatest(vendorActionTypes.GET_VENDOR_REQUEST, getVendorsSaga),
    takeLatest(vendorActionTypes.LOAD_MORE_VENDOR_REQUEST, loadMoreVendorsSaga),
  ]);
}

export default vendorsSaga;
