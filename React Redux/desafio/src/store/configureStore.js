import { configureStore, combineReducers } from '@reduxjs/toolkit';
import login from './login';
import photos from './photos';
import localStorage from './middleware/localStorage';

const local = localStorage;
const reducer = combineReducers({ login, photos });
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  local,
});

export default store;
