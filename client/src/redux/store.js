import {createStore, applyMiddleware, compose} from 'redux';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import reducer from './reducers/problemReducer';

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(reduxPromiseMiddleware())
)
