// fake generated data
import { userInfo } from "../../common/mock-data";

export const FETCH_USER_INFO_START = "FETCH_USER_INFO_START";
export const FETCH_USER_INFO_SUCCESS = "FETCH_USER_INFO_SUCCESS";
export const FETCH_USER_INFO_ERROR = "FETCH_USER_INFO_ERROR";

export const fetchUserInfo = username => async dispatch => {
    try {
        dispatch({ type: FETCH_USER_INFO_START });

        // fetch the user data like
        // const { data } = await axios.get(`API_URL/users/${username});
        dispatch({
            type: FETCH_USER_INFO_SUCCESS,
            payload: userInfo
        });
    } catch (err) {
        dispatch({
            type: FETCH_USER_INFO_ERROR,
            payload: err
        });
    }
};
