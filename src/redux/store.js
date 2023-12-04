import { configureStore } from '@reduxjs/toolkit';

import contactsReducer from './reducers/contacts/contactsSlice';
import filterReducer from './reducers/contacts/filterSplice';
import authReducer from './reducers/auth/authSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: authReducer,
  },
});

export default store;
