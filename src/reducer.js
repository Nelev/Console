import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import loginReducer from "./common/Login/reducer";
import profileReducer from "./components/Profile/reducer";

export default combineReducers({
    form,
    login: loginReducer,
    views: combineReducers({
        routing: routerReducer
    }),
    components: combineReducers({
        profile: profileReducer
    })
});
