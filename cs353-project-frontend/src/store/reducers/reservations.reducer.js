import * as Actions from "../actions/actions.js";
const initialState = {
    bringedSportActivities: {},
    bringedSportActivitiesLeftCapacities: {},
    reserveServerResponse: {},
    myReservations: {},
    cancelReservationServerResponse: {},
};

const reservation = function (state = initialState, action) {
    switch (action.type) {
        case Actions.BRING_SPORT_ACTIVITIES: {
            return { ...state, bringedSportActivities: action.payload };
        }
        case Actions.BRING_BRING_SPORT_ACTIVITIES_LEFT_CAPACITIES: {
            return {
                ...state,
                bringedSportActivitiesLeftCapacities: action.payload,
            };
        }
        case Actions.RESERVE_SERVER_RESPONSE_MSG: {
            return {
                ...state,
                reserveServerResponse: action.payload,
            };
        }
        case Actions.MY_RESERVATIONS: {
            return {
                ...state,
                myReservations: action.payload,
            };
        }
        case Actions.CANCEL_RESERVATION_SERVER_RESPONSE_MSG: {
            return {
                ...state,
                cancelReservationServerResponse: action.payload,
            };
        }

        default: {
            return state;
        }
    }
};

export default reservation;
