import { createStore, combineReducers } from 'redux';
import userInfoReducer from './reducers/userInfoReducer';

const rootReducer = combineReducers({
    userHandler: userInfoReducer,
});

const store = createStore(rootReducer);

export default store;