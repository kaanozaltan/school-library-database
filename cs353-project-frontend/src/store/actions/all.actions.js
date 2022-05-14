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
