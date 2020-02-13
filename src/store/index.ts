import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { counterReducer } from './counter/reducers';
import { drawerReducer } from './drawer/reducers';

const rootReducer = combineReducers({
  counter: counterReducer,
  drawer: drawerReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

export default store;

export type RootState = ReturnType<typeof rootReducer>;
