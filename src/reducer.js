import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import customerReducer from "./views/Customers/reducer";
import loginReducer from "./common/Login/reducer";
import profileReducer from "./components/Profile/reducer";
import taskTableReducer from "./components/TaskTable/reducer";

export default combineReducers({
    form,
    login: loginReducer,
    views: combineReducers({
        routing: routerReducer,
        customers: customerReducer
    }),
    components: combineReducers({
        profile: profileReducer,
        dashboard: taskTableReducer
    })
});
