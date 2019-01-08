import "@babel/polyfill";

import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./common/Login/index.jsx";
import Root from "./views/Root/index.jsx";

import "./index.css";
import store from "./store";

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
