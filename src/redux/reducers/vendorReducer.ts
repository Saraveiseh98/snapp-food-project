import { vendorActionTypes } from "../actionTypes/vendorTypes";
import { VendorsActions, VendorsState } from "../types/vendorsTypes";

const initialState: VendorsState = {
  data: [],
  loading: false,
  error: null,
};

const reducer = (
  state = initialState,
  action: VendorsActions
): VendorsState => {
  switch (action.type) {
    case vendorActionTypes.GET_VENDOR_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case vendorActionTypes.GET_VENDOR_SUCCESS:
      return {
        data: action.payload.data,
        loading: false,
        error: null,
      };
    case vendorActionTypes.GET_VENDOR_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default reducer;
