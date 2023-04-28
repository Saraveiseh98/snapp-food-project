import { vendorActionTypes } from "../actionTypes/vendorTypes";
import {
  GetVendorsFailure,
  GetVendorsFailurePayload,
  GetVendorsRequest,
  GetVendorsSuccess,
  GetVendorsSuccessPayload,
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
