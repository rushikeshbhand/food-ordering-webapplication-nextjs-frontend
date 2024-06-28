import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./redux/modeSlice"

const store = configureStore({
    reducer: {
      theme: themeReducer
    },
  })

  export default store;