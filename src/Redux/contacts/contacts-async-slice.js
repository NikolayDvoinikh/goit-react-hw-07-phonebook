import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllContacts,
  fetchAddContact,
  fetchDeleteContact,
} from './contacts-operations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllContacts.pending, store => {
        store.isLoading = true;
      })
      .addCase(fetchAllContacts.fulfilled, (store, { payload }) => {
        store.contacts = payload;
        store.isLoading = false;
      })
      .addCase(fetchAllContacts.rejected, (store, { payload }) => {
        store.error = payload;
        store.isLoading = false;
      })
      .addCase(fetchAddContact.pending, store => {
        store.isLoading = true;
      })
      .addCase(fetchAddContact.fulfilled, (store, { payload }) => {
        store.contacts = [...store.contacts, payload];
        store.isLoading = false;
      })
      .addCase(fetchAddContact.rejected, (store, { payload }) => {
        store.error = payload;
        store.isLoading = false;
      })
      .addCase(fetchDeleteContact.pending, store => {
        store.isLoading = true;
      })
      .addCase(fetchDeleteContact.fulfilled, (store, { payload }) => {
        const index = store.contacts.findIndex(({ id }) => id === payload);
        store.contacts.splice(index, 1);
        store.isLoading = false;
      })
      .addCase(fetchDeleteContact.rejected, (store, { payload }) => {
        store.error = payload;
        store.isLoading = false;
      });
  },
});
