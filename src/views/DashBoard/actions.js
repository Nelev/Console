import axios from "axios";

export const INIT_START = "LOGIN_START";
export const INIT_SUCCESS = "LOGIN_SUCCESS";
export const INIT_ERROR = "LOGIN_ERROR";

export const init = () => async dispatch => {
    try {
        dispatch({ type: INIT_START });

        // do something with your login
        // const { data } = await axios.get(`https://picsum.photos/list`);
        dispatch({
            type: INIT_SUCCESS,
            payload: null
        });
    } catch (err) {
        dispatch({
            type: INIT_ERROR,
            payload: err
        });
    }
};
