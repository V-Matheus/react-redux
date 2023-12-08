import { configureStore, combineReducers } from '@reduxjs/toolkit';
import contador from './contador';
import modal from './modal';
import logger from './middleware/logger';

const middleware = [logger];

const reducer = combineReducers({ contador, modal });
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

export default store;
