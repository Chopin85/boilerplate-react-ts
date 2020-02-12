import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import counter from './counter/reducers';

const rootReducer = combineReducers({
  counter
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

export default store;
