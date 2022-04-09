import { combineReducers } from "redux";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
const rootReducers = combineReducers({
  productReducer,
  cartReducer,
});

export default rootReducers;
