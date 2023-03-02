import { combineReducers } from '@reduxjs/toolkit';
import { contactsSlice } from './contacts/contacts-async-slice';
import { filterSlice } from './filter/filter-slice';

const rootReducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
});

export default rootReducer;
