import { vendorActionTypes } from "../actionTypes/vendorTypes";
import {
  GetVendorsFailure,
  GetVendorsFailurePayload,
  GetVendorsRequest,
  GetVendorsSuccess,
  GetVendorsSuccessPayload,
  LoadMoreVendorsFailure,
  LoadMoreVendorsRequest,
  LoadMoreVendorsSuccess,
} from "../types/vendorsTypes";

export const getVendorsRequest = (): GetVendorsRequest => ({
  type: vendorActionTypes.GET_VENDOR_REQUEST,
});

export const getVendorsSuccess = (
  payload: GetVendorsSuccessPayload
): GetVendorsSuccess => ({
  type: vendorActionTypes.GET_VENDOR_SUCCESS,
  payload,
});

export const getVendorsFailure = (
  payload: GetVendorsFailurePayload
): GetVendorsFailure => ({
  type: vendorActionTypes.GET_VENDOR_FAILURE,
  payload,
});

export const loadMoreVendorsRequest = (): LoadMoreVendorsRequest => ({
  type: vendorActionTypes.LOAD_MORE_VENDOR_REQUEST,
});

export const loadMoreVendorsSuccess = (
  payload: GetVendorsSuccessPayload
): LoadMoreVendorsSuccess => ({
  type: vendorActionTypes.LOAD_MORE_VENDOR_SUCCESS,
  payload,
});

export const loadMoreVendorsFailure = (
  payload: GetVendorsFailurePayload
): LoadMoreVendorsFailure => ({
  type: vendorActionTypes.LOAD_MORE_VENDOR_FAILURE,
  payload,
});
