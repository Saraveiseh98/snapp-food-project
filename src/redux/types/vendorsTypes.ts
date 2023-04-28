import { FinalResult } from "../../models/vendor";
import { vendorActionTypes } from "../actionTypes/vendorTypes";

export interface VendorsState {
  loading: boolean;
  data: FinalResult[];
  error: string | null;
}

export type GetVendorsSuccessPayload = {
  data: FinalResult[];
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

export type VendorsActions =
  | GetVendorsRequest
  | GetVendorsSuccess
  | GetVendorsFailure;
