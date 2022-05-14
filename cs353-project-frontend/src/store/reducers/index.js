import { combineReducers } from "redux";
import settings from "./settings.reducer";
import reservations from "./reservations.reducer.js";
import login from "./login.reducer.js";

const createReducer = (asyncReducers) =>
    combineReducers({
        settings,
        reservations,
        login,
        ...asyncReducers,
    });

export default createReducer;
