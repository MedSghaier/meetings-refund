import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import { loadState, saveState } from './localState';

const middlewares = [];

const persistedState = loadState();
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = createStore(rootReducer, persistedState, applyMiddleware(...middlewares),);

store.subscribe(()=>{
  saveState({meetings: store.getState().meetings})
})

export default store;