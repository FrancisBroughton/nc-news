import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers/articlesReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const store = createStore(
  reducers,
  applyMiddleware(logger, thunk)
);

export default store;