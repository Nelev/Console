import PropTypes from "prop-types";

import { LOGIN_START } from "./actions";
import { LOGIN_SUCCESS } from "./actions";
import { LOGIN_ERROR } from "./actions";

const defaultState = {
    isLogging: false,
    errorLoggin: null,
    logged: false,
    user: null
};

export const statePropType = {
    isLogging: PropTypes.bool,
    errorLogging: PropTypes.instanceOf(Error),
    logged: PropTypes.bool,
    user: PropTypes.object
};

export default (state = defaultState, action) => {
    const { type, payload } = action;
    switch (type) {
        case LOGIN_START:
            return {
                ...state,
                isLogging: true,
                errorLogging: null,
                user: null
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLogging: false,
                logged: true,
                user: payload
            };
        case LOGIN_ERROR:
            return {
                ...state,
                isLogging: false,
                errorLogging: payload,
                user: null
            };
        default:
            return state;
    }
};
