import React from "react";
import { VictoryPie } from "victory";

import "./style.less";

class DashBoard extends React.Component {
    render() {
        return (
            <div className="v-DashBoard">
                <VictoryPie />
            </div>
        );
    }
}

export default DashBoard;
