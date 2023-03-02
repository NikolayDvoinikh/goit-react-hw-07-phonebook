import {
  apiGetAllContacts,
  apiAddContact,
  apiDeleteContact,
} from '../../components/shared/services/api';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetch-all',
  async (_, { rejectWithValue }) => {
    try {
      const data = await apiGetAllContacts();
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

export const fetchAddContact = createAsyncThunk(
  'contacts/add',
  async (contact, { rejectWithValue }) => {
    try {
      const { data: result, status } = await apiAddContact(contact);
      console.log(status);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);

export const fetchDeleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, { rejectWithValue }) => {
    try {
      await apiDeleteContact(id);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);
