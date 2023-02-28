import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    fetchingInProgress({ isLoading }) {
      isLoading = true;
    },
    fetchingSuccess({ isLoading, contacts }, action) {
      isLoading = false;
      contacts = action.payload;
    },
    fetchingError({ isLoading, error }, action) {
      isLoading = false;
      error = action.payload;
    },

    // addContact: {
    //   reducer: (state, { payload }) => {
    //     state.push(payload);
    //   },
    //   prepare: data => {
    //     return {
    //       payload: {
    //         ...data,
    //         createdAt: Date.now(),
    //       },
    //     };
    //   },
    // },
    // deleteContact(state, { payload }) {
    //   return state.filter(item => item.id !== payload);
    // },
  },
});

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  contactsSlice.actions;
