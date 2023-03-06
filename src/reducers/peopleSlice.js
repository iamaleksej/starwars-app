import { createSlice } from "@reduxjs/toolkit";
import { getPeople } from "../services/api/apiPeopleSlice"

export const peopleSlice = createSlice({
   name: "people",
   initialState: {
      data: [],
      loading: true,
      totalCount: null,
      hasNextPage: true,
      currentLang: 'en'
   },
   reducers: {
      clearData(state, { payload }) {
         state.data = payload
      },
      changeLanguage(state, { payload }) {
         state.currentLang = payload
      }
   },
   extraReducers: {
      [getPeople.pending]: (state) => {
         state.loading = true;
      },
      [getPeople.fulfilled]: (state, { payload }) => {
         state.loading = false;
         state.totalCount = payload.count
         state.data = state.data.concat(payload.results);
         if (!payload.next) {
            state.hasNextPage = null
         }
      },
      [getPeople.rejected]: (state) => {
         state.loading = false;
      }
   }

});

export default peopleSlice.reducer
