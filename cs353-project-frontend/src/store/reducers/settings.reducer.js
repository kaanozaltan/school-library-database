import * as Actions from "../actions/actions.js";
const initialState = {
    layout: {
        loading: false,
        navbar: true,
    },
};

const settings = function (state = initialState, action) {
    switch (action.type) {
        case Actions.SET_LOADING: {
            return {
                ...state,
                layout: {
                    ...state.layout,
                    loading: action.payload.loading,
                },
            };
        }
        case Actions.SET_NAVBAR: {
            return {
                ...state,
                layout: {
                    ...state.layout,
                    navbar: action.payload,
                },
            };
        }
        default: {
            return state;
        }
    }
};

export default settings;
