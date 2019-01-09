import React from "react";

import Header from "../../components/Header/index.jsx";

import "./style.less";

class Root extends React.Component {
    render() {
        return (
            <div className="v-Root">
                <Header />
            </div>
        );
    }
}

export default Root;
