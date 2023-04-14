import { combineReducers, compose, legacy_createStore } from 'redux';
import itemsReducer from './reducers/itemsReducer';

const ReactReduxDevTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

function configureStore() {
    return legacy_createStore(
        combineReducers({
            services: itemsReducer,
        }),
        compose(ReactReduxDevTools)
    );
}

export default configureStore;
