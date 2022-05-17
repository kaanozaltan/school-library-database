import { combineReducers } from "redux";
import settings from "./settings.reducer";
import login from "./login.reducer.js";
import all from "./all.reducers";

const createReducer = (asyncReducers) =>
    combineReducers({
        settings,
        login,
        all,
        ...asyncReducers,
    });

export default createReducer;
