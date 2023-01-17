import { configureStore, combineReducers } from "@reduxjs/toolkit"
import skillsCardSlice from "./Reducers/reducerServer"
import modalHomeSlice from "./Reducers/reducerModalHome"
import worksCardSlice from "./Reducers/reducerWorks"
const rootReducer = combineReducers({
  skillsCardSlice: skillsCardSlice,
  modalHomeSlice: modalHomeSlice,
  worksCardSlice: worksCardSlice
})

export const store = configureStore({
  reducer: rootReducer,
})