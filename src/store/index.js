import { configureStore } from "@reduxjs/toolkit";
import parcelReducer from "./parcel";
const store = configureStore({
  reducer: {
    parcel: parcelReducer,
  },
});
export default store;
