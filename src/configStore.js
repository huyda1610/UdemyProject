import { configureStore } from "@reduxjs/toolkit";
import devToolsEnhancer from 'remote-redux-devtools'

import course from "./Slices/courseSlice";
import auth from "./Slices/authSlice";
import cart from "./Slices/cartSlice";
import user from "./Slices/userSlice"

const store = configureStore({
  reducer: {
    course,
    auth,
    cart,
    user
  },
  devTools: false,
});

export default store;