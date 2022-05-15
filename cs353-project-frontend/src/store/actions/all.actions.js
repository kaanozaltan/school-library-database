import axios from "axios";
import * as Actions from "./actions.js";

export function registerLibraryItem(data) {
    return (dispatch) => {
        axios
            .post("http://localhost:8080/registerLibraryItem", data)
            .then((res) => {
                console.log("reserve response ", res.data);
                // dispatch({
                //     type: Actions.RESERVE_SERVER_RESPONSE_MSG,
                //     payload: res.data,
                // });
                if ("msg" in res.data) {
                    alert(res.data.msg);
                }
            })
            .catch((err) => {
                alert("Error");
                console.log(err);
            });
    };
}

export function bringAllUsers() {
    return (dispatch) => {
        axios
            .post("http://localhost:8080/bringAllUsers")
            .then((res) => {
                console.log("reserve response ", res.data);
                dispatch({
                    type: Actions.BRING_ALL_USERS,
                    payload: res.data,
                });
                if ("msg" in res.data) {
                    alert(res.data.msg);
                }
            })
            .catch((err) => {
                alert("Error");
                console.log(err);
            });
    };
}

export function bringFilteredUsers(filter) {
    return (dispatch) => {
        axios
            .post("http://localhost:8080/bringFilteredUsers", filter)
            .then((res) => {
                console.log("reserve response ", res.data);
                dispatch({
                    type: Actions.BRING_ALL_USERS,
                    payload: res.data,
                });
                if ("msg" in res.data) {
                    alert(res.data.msg);
                }
            })
            .catch((err) => {
                alert("Error");
                console.log(err);
            });
    };
}

export function bringAllLibraryItems() {
    return (dispatch) => {
        axios
            .post("http://localhost:8080/bringAllLibraryItems")
            .then((res) => {
                console.log("reserve response ", res.data);
                dispatch({
                    type: Actions.BRING_ALL_LIBRARY_ITEMS,
                    payload: res.data,
                });
                if ("msg" in res.data) {
                    alert(res.data.msg);
                }
            })
            .catch((err) => {
                alert("Error");
                console.log(err);
            });
    };
}

export function holdALibraryItem(data) {
    return (dispatch) => {
        axios
            .post("http://localhost:8080/holdALibraryItem", data)
            .then((res) => {
                console.log("reserve response ", res.data);
                if ("msg" in res.data) {
                    alert(res.data.msg);
                }
            })
            .catch((err) => {
                alert("Error");
                console.log(err);
            });
    };
}
