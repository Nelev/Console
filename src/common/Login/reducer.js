import PropTypes from "prop-types";

import { LOGIN_START } from "./actions";
import { LOGIN_SUCCESS } from "./actions";
import { LOGIN_ERROR } from "./actions";

const defaultState = {
    isLogging: false,
    errorLoggin: null,
    logged: false
};

export const statePropType = {
    isLogging: PropTypes.bool,
    errorLogging: PropTypes.instanceOf(Error),
    logged: false
};

export default (state = defaultState, action) => {
    const { type, payload } = action;
    switch (type) {
        case LOGIN_START:
            return {
                ...state,
                isLogging: true,
                errorLogging: null
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLogging: false,
                logged: true
            };
        case LOGIN_ERROR:
            return {
                ...state,
                isLogging: false,
                errorLogging: payload
            };
        default:
            return state;
    }
};
