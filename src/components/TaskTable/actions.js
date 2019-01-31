// fake generated data
import { ticketsInfo } from "../../common/mock-data";

export const FETCH_TICKETS_STATUS_START = "FETCH_TICKETS_STATUS_START";
export const FETCH_TICKETS_STATUS_SUCCESS = "FETCH_TICKETS_STATUS_SUCCESS";
export const FETCH_TICKETS_STATUS_ERROR = "FETCH_TICKETS_STATUS_ERROR";

export const fetchTicketsInfo = () => async dispatch => {
    try {
        dispatch({ type: FETCH_TICKETS_STATUS_START });
        // fetch the user data like, for now simulate a call's delay
        // const { data } = await axios.get(`API_URL/tickets);
        setTimeout(() => {
            dispatch({
                type: FETCH_TICKETS_STATUS_SUCCESS,
                payload: ticketsInfo
            });
        }, 1500);
    } catch (err) {
        dispatch({
            type: FETCH_TICKETS_STATUS_ERROR,
            payload: err
        });
    }
};
