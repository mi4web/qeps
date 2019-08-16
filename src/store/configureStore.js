import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import * as R from 'ramda';
import ReduxThunk from 'redux-thunk'
import  appReducer from './appReducer';
import {APP_INITIAL_STATE} from "../constants/appConstants";

// if you're also using redux-thunk, add it as a middleware

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const createStoreWithMiddleware = composeEnhancers(applyMiddleware(ReduxThunk))(createStore);

const rootReducer = combineReducers({
    app: appReducer
});

export default function configureStore(initialState) {
    if (R.isNil(initialState) || R.isEmpty(initialState)) {
        initialState = APP_INITIAL_STATE;
    }
    return createStoreWithMiddleware(rootReducer, initialState);
};
