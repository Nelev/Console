import PropTypes from "prop-types";

import { FETCH_CUSTOMERS_START } from "./actions";
import { FETCH_CUSTOMERS_SUCCESS } from "./actions";
import { FETCH_CUSTOMERS_ERROR } from "./actions";

const defaultState = {
    isFetchingCustomers: false,
    errorFetchingCustomers: null,
    customers: null
};

export const statePropType = {
    isFetchingCustomers: PropTypes.bool,
    errorFetchingCustomers: PropTypes.instanceOf(Error),
    customers: PropTypes.array
};

export default (state = defaultState, action) => {
    const { type, payload } = action;
    switch (type) {
        case FETCH_CUSTOMERS_START:
            return {
                ...state,
                isFetchingCustomers: true,
                errorFetchingCustomers: null
            };
        case FETCH_CUSTOMERS_SUCCESS:
            return {
                ...state,
                isFetchingCustomers: false,
                customers: payload
            };
        case FETCH_CUSTOMERS_ERROR:
            return {
                ...state,
                isFetchingCustomers: false,
                errorFetchingCustomers: payload
            };
        default:
            return state;
    }
};
