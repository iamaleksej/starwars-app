import { createSlice } from "@reduxjs/toolkit";
import { getPerson } from "../services/api/apiPersonSlice"

export const personSlice = createSlice({
   name: "person",
   initialState: {
      data: {},
      loading: true,
   },
   reducers: {},
   extraReducers: {
      [getPerson.pending]: (state) => {
         state.loading = true;
      },
      [getPerson.fulfilled]: (state, { payload }) => {
         state.loading = false;
         state.data = payload
      },
      [getPerson.rejected]: (state) => {
         state.loading = false;
      }
   }

});

export default personSlice.reducer