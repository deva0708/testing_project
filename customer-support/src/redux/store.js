import { createStore } from 'redux';
import purchaseReducer from './reducers';

const store = createStore(
  purchaseReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__
);

export default store;