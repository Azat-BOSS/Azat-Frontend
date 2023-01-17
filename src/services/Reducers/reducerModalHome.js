import { createSlice } from "@reduxjs/toolkit";

const modalHomeSlice = createSlice({
  name: "homeSlice",
  initialState: {
    inState: false
  },
  reducers: {
    changeState: (state, action) => {
      state.inState = action.payload
    }
  }
})

export const { changeState } = modalHomeSlice.actions
export default modalHomeSlice.reducer