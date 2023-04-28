import { FinalResult } from "../../models/vendor";
import { vendorActionTypes } from "../actionTypes/vendorTypes";

export interface VendorRequestParams {
  lat: number;
  long: number;
  page: number;
  page_size: number;
}
export interface VendorsState {
  loading: boolean;
  loadingMore: boolean;
  data: FinalResult[];
  error: string | null | unknown;
  totalCount: number;
  pageNumber: number;
  pageSize: number;
}

export type GetVendorsSuccessPayload = {
  data: FinalResult[];
  totalCount: number;
};

export type GetVendorsFailurePayload = {
  error: string | unknown;
};

export type GetVendorsRequest = {
  type: typeof vendorActionTypes.GET_VENDOR_REQUEST;
};

export type GetVendorsSuccess = {
  type: typeof vendorActionTypes.GET_VENDOR_SUCCESS;
  payload: GetVendorsSuccessPayload;
};

export type GetVendorsFailure = {
  type: typeof vendorActionTypes.GET_VENDOR_FAILURE;
  payload: GetVendorsFailurePayload;
};

export type LoadMoreVendorsRequest = {
  type: typeof vendorActionTypes.LOAD_MORE_VENDOR_REQUEST;
};

export type LoadMoreVendorsSuccess = {
  type: typeof vendorActionTypes.LOAD_MORE_VENDOR_SUCCESS;
  payload: GetVendorsSuccessPayload;
};

export type LoadMoreVendorsFailure = {
  type: typeof vendorActionTypes.LOAD_MORE_VENDOR_FAILURE;
  payload: GetVendorsFailurePayload;
};

export type VendorsActions =
  | GetVendorsRequest
  | GetVendorsSuccess
  | GetVendorsFailure
  | LoadMoreVendorsRequest
  | LoadMoreVendorsSuccess
  | LoadMoreVendorsFailure;
