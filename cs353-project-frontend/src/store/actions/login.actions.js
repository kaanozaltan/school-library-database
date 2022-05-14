import axios from "axios";

import * as Actions from "../actions/actions.js";

export function userLogin(user, navigate) {
    return (dispatch) => {
        //dispatch(setField("login_user", true));
        axios
            .post("http://localhost:8080/login", user)
            .then((res) => {
                console.log("login actions", res.data);
                localStorage.setItem("token", res.data.token);
                dispatch({
                    type: Actions.SET_USER,
                    user: res.data.user,
                });
                navigate("/home");
            })
            .catch((err) => {
                alert("you could not logged in");
                console.log(err);
            });
    };
}

export function userRegister(user, navigate) {
    return (dispatch) => {
        //dispatch(setField("login_user", true));
        axios
            .post("http://localhost:8080/register", user)
            .then((res) => {
                console.log("login actions", res.data);
                // localStorage.setItem("token", res.data.token);
                dispatch({
                    type: Actions.REGISTER_USER,
                    user: user,
                });
                navigate("/login");
            })
            .catch((err) => {
                alert("you could not sign up");
                console.log(err);
            });
    };
}
