import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./redux/modeSlice"
import authReducer from "./redux/authSlice"

const store = configureStore({
    reducer: {
      theme: themeReducer,
      auth: authReducer,
    },
  })

  export default store;