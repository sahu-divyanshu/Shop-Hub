//import { createStore } from "redux";
import { reducers } from "./Reducers";
import { configureStore } from "@reduxjs/toolkit";

// const store = createStore(
//   reducers,
//   {},
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
const store = configureStore({
  reducer: reducers,
});
export default store;
