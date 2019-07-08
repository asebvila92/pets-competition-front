import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers/allReducers';
import thunk from 'redux-thunk';

export default function store() {
  return createStore(
    reducers, //put reducers into store
    applyMiddleware(thunk)
  );
}
