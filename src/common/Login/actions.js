import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const LOGOUT = "LOGOUT";

export const login = values => async dispatch => {
    try {
        dispatch({ type: LOGIN_START });

        // do something with your login
        // const { data } = await axios.get(`https://picsum.photos/list`);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: values.username
        });
    } catch (err) {
        dispatch({
            type: LOGIN_ERROR,
            payload: err
        });
    }
};

export const logout = () => ({
    type: LOGOUT,
    payload: null
});
