import { combineReducers } from "redux";
import { ProductReducer, selectProductReducer } from "./ProductReducer";
import AddCart from "./AddCart";
export const reducers = combineReducers({
  allProducts: ProductReducer,
  product: selectProductReducer,
  AddToCart: AddCart,
});

// allProducts: ProductReducer,
// product: selectProductReducer,
// user: userSlice,
// AddToCart: AddCart,
