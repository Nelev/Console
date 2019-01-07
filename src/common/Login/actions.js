import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const login = () => async dispatch => {
    try {
        dispatch({ type: LOGIN_START });
        const { data } = await axios.get(`https://picsum.photos/list`);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: true
        });
    } catch (err) {
        dispatch({
            type: LOGIN_ERROR,
            payload: err
        });
    }
};
