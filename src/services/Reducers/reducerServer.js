import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const skillsUrl = `https://peppy-zuccutto-3cc1d0.netlify.app/api/skillcards?populate=*`

export const skillsFetchData = createAsyncThunk(
  "cards/skillsFetchData",
  () => {
    return fetch(`${skillsUrl}`, {
      headers: {
        Authorization: `Bearer bc4497703bae9e51063c1579f84a2aa14381d51a986b98b850f520fa7b766c8c89597d19b657c73dc788e53fb39a909814225985d5dc007cdd7176e335348c83d4d4f554b6a8fbd60c91c1a5626f94c400963dd9f471b9ddc4d898672bf5ec1b1a7cbb85c0eb497381cc70d340c770f1850ee9fc63fc43af9c67f2773f5ed5b0`
      }
    })
    .then(res => res.json())
  }
)

const skillsCardSlice = createSlice({
  name: "skillsCardSlice",
  initialState: {
    skillsArr: [],
    resolve: null,
    error: null
  },
  extraReducers: {
    [skillsFetchData.pending]: (state) => {
      state.resolve = "...pending"
      state.error = null
    },
    [skillsFetchData.fulfilled]: (state, action) => {
      state.resolve = "resolved"
      state.skillsArr = action.payload
    },
  }
})

export default skillsCardSlice.reducer

