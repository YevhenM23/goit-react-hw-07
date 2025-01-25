import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import filterSlice from "./filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterSlice,
  },
});
