import {createSlice} from "@reduxjs/toolkit"

const modalSlice = createSlice({
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

export default modalSlice.reducer
export const { changeModalState }  = modalSlice.actions
