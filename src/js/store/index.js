import {applyMiddleware, createStore} from 'redux';
import rootReducer from '../reducers';
import logger from 'redux-logger';

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, applyMiddleware(logger));

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
