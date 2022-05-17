import { DataArrayOutlined } from "@mui/icons-material";
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
                    dispatch(bringAllLibraryItems());
                }
            })
            .catch((err) => {
                alert("Error");
                console.log(err);
            });
    };
}

export function bringMyItems(data) {
    console.log(data);
    return (dispatch) => {
        axios
            .post("http://localhost:8080/bringMyItems", data)
            .then((res) => {
                console.log("bring my items response ", res.data);
                if ("msg" in res.data) {
                    alert(res.data.msg);
                    return;
                }
                if ("code" in res.data) {
                    if (res.data.code != "ER_BAD_FIELD_ERROR")
                        alert(res.data.code);
                    return;
                }
                dispatch({
                    type: Actions.BRING_MY_ITEMS,
                    payload: res.data,
                });
            })
            .catch((err) => {
                alert(err);
                console.log(err);
            });
    };
}

export function bringAllAvailableAndHoldedItemsForLend(data) {
    return (dispatch) => {
        axios
            .post(
                "http://localhost:8080/bringAllAvailableAndHoldedItemsForLend",
                data
            )
            .then((res) => {
                console.log("reserve response ", res.data);
                if ("msg" in res.data) {
                    alert(res.data.msg);
                    return;
                }
                if ("code" in res.data) {
                    if (res.data.code != "ER_BAD_FIELD_ERROR")
                        alert(res.data.code);
                    return;
                }
                dispatch({
                    type: Actions.BRING_ALL_AVAILABLE_AND_HOLDED_ITEMS_FOR_LEND,
                    payload: res.data,
                });
            })
            .catch((err) => {
                alert(err);
                console.log(err);
            });
    };
}

export function lendItem(data) {
    return (dispatch) => {
        axios
            .post("http://localhost:8080/lendItem", data)
            .then((res) => {
                console.log("lend item response ", res.data);
                if ("msg" in res.data) {
                    data.user_id = data.student_user_id;
                    dispatch(bringAllAvailableAndHoldedItemsForLend(data));
                    alert(res.data.msg);
                    return;
                }
                if ("code" in res.data) {
                    if (res.data.code != "ER_BAD_FIELD_ERROR")
                        alert(res.data.code);
                    return;
                }

                // dispatch({
                //     type: Actions.,
                //     payload: res.data,
                // });
            })
            .catch((err) => {
                alert(err);
                console.log(err);
            });
    };
}

export function bringAllReturnableItems(data) {
    return (dispatch) => {
        axios
            .post("http://localhost:8080/bringAllReturnableItems", data)
            .then((res) => {
                console.log("returnable items response ", res.data);
                if ("msg" in res.data) {
                    alert(res.data.msg);
                    return;
                }
                if ("code" in res.data) {
                    if (res.data.code != "ER_BAD_FIELD_ERROR")
                        alert(res.data.code);
                    return;
                }
                dispatch({
                    type: Actions.BRING_ALL_RETURNABLE_ITEMS,
                    payload: res.data,
                });
            })
            .catch((err) => {
                alert(err);
                console.log(err);
            });
    };
}

export function returnItem(data) {
    return (dispatch) => {
        axios
            .post("http://localhost:8080/returnItem", data)
            .then((res) => {
                console.log("return item response ", res.data);
                if ("msg" in res.data) {
                    dispatch(bringAllReturnableItems(data));
                    alert(res.data.msg);
                    return;
                }
                if ("code" in res.data) {
                    if (res.data.code != "ER_BAD_FIELD_ERROR")
                        alert(res.data.code);
                    return;
                }

                // dispatch({
                //     type: Actions.,
                //     payload: res.data,
                // });
            })
            .catch((err) => {
                alert(err);
                console.log(err);
            });
    };
}

export function warnUser(data) {
    return (dispatch) => {
        axios
            .post("http://localhost:8080/warnUser", data)
            .then((res) => {
                console.log("warn response ", res.data);
                if ("msg" in res.data) {
                    alert(res.data.msg);
                    return;
                }
                if ("code" in res.data) {
                    if (res.data.code != "ER_BAD_FIELD_ERROR")
                        alert(res.data.code);
                    return;
                }

                // dispatch({
                //     type: Actions.,
                //     payload: res.data,
                // });
            })
            .catch((err) => {
                alert(err);
                console.log(err);
            });
    };
}

export function bringWarnings(data) {
    return (dispatch) => {
        axios
            .post("http://localhost:8080/bringWarnings", data)
            .then((res) => {
                console.log("bring warnings response ", res.data);
                if ("msg" in res.data) {
                    alert(res.data.msg);
                    return;
                }
                if ("code" in res.data) {
                    if (res.data.code != "ER_BAD_FIELD_ERROR")
                        alert(res.data.code);
                    return;
                }

                dispatch({
                    type: Actions.BRING_WARNINGS,
                    payload: res.data,
                });
            })
            .catch((err) => {
                alert(err);
                console.log(err);
            });
    };
}

export function removeAWarning(data) {
    return (dispatch) => {
        axios
            .post("http://localhost:8080/removeAWarning", data)
            .then((res) => {
                console.log("remove warnings response ", res.data);
                if ("msg" in res.data) {
                    dispatch(bringWarnings({ user_id: data.user_id }));
                    alert(res.data.msg);
                    return;
                }
                if ("code" in res.data) {
                    if (res.data.code != "ER_BAD_FIELD_ERROR")
                        alert(res.data.code);
                    return;
                }
            })
            .catch((err) => {
                alert(err);
                console.log(err);
            });
    };
}
