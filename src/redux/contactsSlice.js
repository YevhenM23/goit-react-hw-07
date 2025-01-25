import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, deleteContact, addContact } from "./contactsOps";

const contactsReducer = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    filter: "",
    loading: false,
    error: null,
    filters: {
      name: "",
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = true;
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = true;
      })
      .addCase(addContact.pending, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

// export default filterSlice.reducer;
export const { changeFilter } = filterSlice.actions;

export const selectNameFilter = (state) => state.filter.name;

// export const {} = contactsReducer.actions;
export default contactsReducer.reducer;

export const selectContacts = (state) => state.contacts.items;
// export const selectFilter = (state) => state.contacts.filters.name;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
