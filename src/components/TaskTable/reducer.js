import PropTypes from "prop-types";

import { FETCH_TICKETS_STATUS_START } from "./actions";
import { FETCH_TICKETS_STATUS_SUCCESS } from "./actions";
import { FETCH_TICKETS_STATUS_ERROR } from "./actions";

const defaultState = {
    isFetchingTicketsInfo: false,
    errorFetchingTicketsInfo: null,
    ticketsInfo: null
};

export const statePropType = {
    isFetchingTicketsInfo: PropTypes.bool,
    errorFetchingTicketsInfo: PropTypes.instanceOf(Error),
    ticketsInfo: PropTypes.array
};

export default (state = defaultState, action) => {
    const { type, payload } = action;
    switch (type) {
        case FETCH_TICKETS_STATUS_START:
            return {
                ...state,
                isFetchingTicketsInfo: true,
                errorFetchingTicketsInfo: null
            };
        case FETCH_TICKETS_STATUS_SUCCESS:
            return {
                ...state,
                isFetchingTicketsInfo: false,
                ticketsInfo: payload
            };
        case FETCH_TICKETS_STATUS_ERROR:
            return {
                ...state,
                isFetchingUser: false,
                errorFetchingUser: payload
            };
        default:
            return state;
    }
};
