import { combineReducers } from "redux";
import vendorsReducer from "./vendorReducer";

const rootReducer = combineReducers({
  vendors: vendorsReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;

export default rootReducer;
