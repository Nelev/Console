import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./common/Login";
import Root from "./views/Root";

import store from "./store";
import "./index.css";

const App = (
    <IntlProvider locale="en">
        <Provider store={store}>
            <Login>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Root} />
                    </Switch>
                </BrowserRouter>
            </Login>
        </Provider>
    </IntlProvider>
);

ReactDOM.render(App, document.getElementById("root"));
