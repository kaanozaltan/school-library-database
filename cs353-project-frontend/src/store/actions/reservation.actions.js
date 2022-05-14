import axios from "axios";
import * as Actions from "./actions.js";

export function reserve(data, navigate) {
    return (dispatch) => {
        axios
            .post("http://localhost:8080/reserve", data)
            .then((res) => {
                console.log("reserve response ", res.data);
                dispatch({
                    type: Actions.RESERVE_SERVER_RESPONSE_MSG,
                    payload: res.data,
                });
            })
            .catch((err) => {
                alert("Activities times Couldnt bringed");
                console.log(err);
            });
    };
}
export function cancelReservation(data) {
    return (dispatch) => {
        axios
            .post("http://localhost:8080/cancelReservation", data)
            .then((res) => {
                console.log("cancel reservation response ", res.data);
                dispatch({
                    type: Actions.CANCEL_RESERVATION_SERVER_RESPONSE_MSG,
                    payload: res.data,
                });
            })
            .catch((err) => {
                alert("cancel reservation error");
                console.log(err);
            });
    };
}
export function bringMyReservations(data) {
    console.log(data);
    return (dispatch) => {
        axios
            .post("http://localhost:8080/myReservations", data)
            .then((res) => {
                console.log("my Reservations", res.data);
                dispatch({
                    type: Actions.MY_RESERVATIONS,
                    payload: res.data,
                });
            })
            .catch((err) => {
                alert("Your reservations couldn be gathered!");
                console.log(err);
            });
    };
}

export function bringSportActivityTimes(data) {
    return (dispatch) => {
        //dispatch(setField("login_user", true));
        axios
            .post("http://localhost:8080/getSportActivityTimes", data)
            .then((res) => {
                // localStorage.setItem("token", res.data.token);
                dispatch({
                    type: Actions.BRING_BRING_SPORT_ACTIVITIES_LEFT_CAPACITIES,
                    payload: res.data,
                });
            })
            .catch((err) => {
                alert("Activities times Couldnt bringed");
                console.log(err);
            });
    };
}
