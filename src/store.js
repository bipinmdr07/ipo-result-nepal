import thunk from 'redux-thunk';
import config from 'config';
import { persistStore } from 'redux-persist';
import promise from 'redux-promise-middleware';
import { compose, createStore, applyMiddleware } from 'redux';

import * as env from 'constants/env'

import rootReducer from './reducers';

const enhancers = [applyMiddleware(thunk, promise)]

if (config.env !== env.PRODUCTION && window.__REDUX_DEVTOOLS_EXTENSION__) {
  enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__())
}

const store = createStore(
  rootReducer,
  compose(...enhancers)
);

const persistor = persistStore(store);

export default store;
export { persistor };
