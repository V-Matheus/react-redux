import { configureStore, combineReducers } from '@reduxjs/toolkit';
import contador from './contador';
import fotos from './fotos';
import logger from './middleware/logger';

const middleware = (getDefaultMiddleware) => [
  ...getDefaultMiddleware(),
  logger,
];

const reducer = combineReducers({ contador, fotos });
const store = configureStore({ reducer, middleware });

export default store;
