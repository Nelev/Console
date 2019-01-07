import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import loginReducer from "./common/Login/reducer";

export default combineReducers({
    form,
    login: loginReducer,
    views: combineReducers({
        routing: routerReducer
    })
});
