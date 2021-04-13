import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import ipo from './ipo';
import sheet from './sheet';
import sheetConfig from './sheetConfig';

/**
 * Persist config
 * */
const persistConfig = {
  key: 'sheetConfig',
  storage
}

export default combineReducers({
  ipo,
  sheet,
  sheetConfig: persistReducer(persistConfig, sheetConfig)
})
