// store.js
import { configureStore } from "@reduxjs/toolkit";
import user from "./user"; // Import your reducer
import authReducer from "./authReducer";
import productReducer from "./productReducer";

export const store = configureStore({
  reducer: {
    // Add your reducers here
    user,
    auth: authReducer,
    products: productReducer,
  },
});

export default store;
