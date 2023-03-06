import { configureStore } from "@reduxjs/toolkit";
import peopleReducer from './reducers/peopleSlice'
import personReducer from './reducers/personSlice'

export const store = configureStore({
   reducer: {
      people: peopleReducer,
      person: personReducer,
   },
})