import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
        state.push(payload);
      },
      prepare: data => {
        return {
          payload: {
            ...data,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, { payload }) {
      return state.filter(item => item.id !== payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
