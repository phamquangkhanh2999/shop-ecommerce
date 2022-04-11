import { combineReducers } from "redux";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import orderReducer from "./orderReducer";

const rootReducers = combineReducers({
  productReducer,
  cartReducer,
  orderReducer,
});

export default rootReducers;
