import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const worksUrl = `https://peppy-zuccutto-3cc1d0.netlify.app/api/workscard?populate=*`

export const worksFetchData = createAsyncThunk(
  "works/worksFetchData",
  () => {
    return fetch(worksUrl, {
      headers: {
        Authorization: `Bearer 0820913e2a4b8f7cfe3e1996bf2d0af39e354da1e314eedf482130319c89c167c7156fedfd4b0cee68b5f3255963aab1320d31e19322503908aa9a840143fc7a5592b9c94b9ff4ec0798e7b28b607506cd2269d0fb0cb0feaf4a86105140a98d04224d44b2ea1b4262d3be29e49287b6ed79d75c2b013284cc4cd91d904e04f1`
      }
    })
    .then(res => res.json())
  }
)

const worksCardSlice = createSlice({
  name: "worksCardSlice",
  initialState: {
    worksArr: [],
    resolve: null,
    error: null
  },
  extraReducers: {
    [worksFetchData.pending]: (state) => {
      state.resolve = "pending ..."
      state.error = null
    },
    [worksFetchData.fulfilled]: (state, action) => {
      state.resolve = "resolve"
      state.worksArr = action.payload
    }
  }
})

export default worksCardSlice.reducer