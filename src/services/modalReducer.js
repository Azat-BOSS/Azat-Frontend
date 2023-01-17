import {createSlice} from "@reduxjs/toolkit"

export const modalSlice = createSlice({
  name: "modalSlice",
  initialState: {
    modalState: false
  },
  reducers: {
    changeModalState: (state, action) => {
      state.modalState = action.payload
    }
  }
})

export const { changeModalState }  = modalSlice.actions
