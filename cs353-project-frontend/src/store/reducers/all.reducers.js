import * as Actions from "../actions/actions.js";
const initialState = {
    bringAllUsers: [],
    libraryItems: [],
};

const all = function(state = initialState, action) {
    switch (action.type) {
        case Actions.BRING_ALL_USERS: {
            return {
                ...state,
                bringAllUsers: action.payload,
            };
        }
        case Actions.BRING_ALL_LIBRARY_ITEMS: {
            return {
                ...state,
                libraryItems: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};

export default all;
