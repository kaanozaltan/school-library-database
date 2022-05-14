import * as Actions from "../actions/actions.js";
const initialState = {
    user: null,
};

const user = function (state = initialState, action) {
    switch (action.type) {
        case Actions.SET_USER: {
            return {
                ...state,
                user: action.user,
            };
        }
        default: {
            return state;
        }
    }
};

export default user;
