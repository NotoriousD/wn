import { combineReducers } from "redux";
import { brandsReducers } from "./brands/reducers";
import { datesReducers } from "./dates/reducers";
import { authReducers } from "./auth/reducers";

export const rootReducer = combineReducers({
  brands: brandsReducers,
  dates: datesReducers,
  auth: authReducers,
});
