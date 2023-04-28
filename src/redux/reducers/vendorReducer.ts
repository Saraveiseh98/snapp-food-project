import { vendorActionTypes } from "../actionTypes/vendorTypes";
import { VendorsActions, VendorsState } from "../types/vendorsTypes";

const initialState: VendorsState = {
  data: [],
  loading: false,
  loadingMore: false,
  error: null,
  totalCount: 0,
  pageNumber: 0,
  pageSize: 10,
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
        ...state,
        data: action.payload.data,
        totalCount: action.payload.totalCount,
        loading: false,
        error: null,
      };
    case vendorActionTypes.GET_VENDOR_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case vendorActionTypes.LOAD_MORE_VENDOR_REQUEST:
      return {
        ...state,
        loadingMore: true,
      };
    case vendorActionTypes.LOAD_MORE_VENDOR_SUCCESS:
      return {
        ...state,
        loadingMore: false,
        error: null,
        data: [...state.data, ...action.payload.data],
        totalCount: action.payload.totalCount,
        pageNumber: state.pageNumber + 1,
      };
    case vendorActionTypes.LOAD_MORE_VENDOR_FAILURE:
      return {
        ...state,
        loadingMore: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
};

export default reducer;
