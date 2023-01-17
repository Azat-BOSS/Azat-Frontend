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

export const { changeModalState }  = modalSlice.actions
export default modalSlice.reducer