import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import createReducer from "./store/reducers";
import { applyMiddleware, compose, createStore } from "redux";

import PageRoutes from "./routes";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    createReducer(),
    composeEnhancers(applyMiddleware(thunk))
);

store.asyncReducers = {};

export const injectReducer = (key, reducer) => {
    if (store.asyncReducers[key]) {
        return;
    }
    store.asyncReducers[key] = reducer;
    store.replaceReducer(createReducer(store.asyncReducers));
    return store;
};

function App() {
    return (
        <>
            <Provider store={store}>
                <PageRoutes />
            </Provider>
        </>
    );
}

export default App;
