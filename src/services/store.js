import {configureStore} from "@reduxjs/toolkit"
import modalSlice from "./modalReducer"

export const store = configureStore({
  reducer: {
    modalSlice: modalSlice
  }
})