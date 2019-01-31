// fake generated data
import { customers } from "../../common/mock-data";

export const FETCH_CUSTOMERS_START = "FETCH_CUSTOMERS_START";
export const FETCH_CUSTOMERS_SUCCESS = "FETCH_CUSTOMERS_SUCCESS";
export const FETCH_CUSTOMERS_ERROR = "FETCH_CUSTOMERS_ERROR";

export const fetchCustomers = () => async dispatch => {
    try {
        dispatch({ type: FETCH_CUSTOMERS_START });
        // fetch the customers data like, for now simulate a call's delay
        // const { data } = await axios.get(`API_URL/customers);
        setTimeout(() => {
            dispatch({
                type: FETCH_CUSTOMERS_SUCCESS,
                payload: customers
            });
        }, 1500);
    } catch (err) {
        dispatch({
            type: FETCH_CUSTOMERS_ERROR,
            payload: err
        });
    }
};
