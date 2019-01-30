import PropTypes from "prop-types";

import { FETCH_USER_INFO_START } from "./actions";
import { FETCH_USER_INFO_SUCCESS } from "./actions";
import { FETCH_USER_INFO_ERROR } from "./actions";

const defaultState = {
    isFetchingUser: false,
    errorFetchingUSer: null,
    userInfo: null
};

export const statePropType = {
    isFetchingUser: PropTypes.bool,
    errorFetchingUser: PropTypes.instanceOf(Error),
    userInfo: PropTypes.object
};

export default (state = defaultState, action) => {
    const { type, payload } = action;
    switch (type) {
        case FETCH_USER_INFO_START:
            return {
                ...state,
                isFetchingUser: true,
                errorFetchingUser: null
            };
        case FETCH_USER_INFO_SUCCESS:
            return {
                ...state,
                isFetchingUser: false,
                userInfo: payload
            };
        case FETCH_USER_INFO_ERROR:
            return {
                ...state,
                isFetchingUser: false,
                errorFetchingUser: payload,
                user: null
            };
        default:
            return state;
    }
};
