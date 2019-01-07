import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import loginReducer from "./common/Login/reducer";

export default combineReducers({
    form,
    views: combineReducers({
        routing: routerReducer,
        login: loginReducer
    })
});
