import React from "react";
import { VictoryAxis, VictoryTheme } from "victory";
import PropTypes from "prop-types";
import { history } from "react-router-prop-types";
import "./style.less";

class DashBoard extends React.Component {
    static propTypes = {
        init: PropTypes.func.isRequired,
        history: history.isRequired
    };

    render() {
        return (
            <div className="v-DashBoard">
                <svg width={400} height={400}>
                    <VictoryAxis
                        crossAxis
                        width={400}
                        height={400}
                        domain={[-10, 10]}
                        theme={VictoryTheme.material}
                        offsetY={200}
                        standalone={false}
                    />
                    <VictoryAxis
                        dependentAxis
                        crossAxis
                        width={400}
                        height={400}
                        domain={[-10, 10]}
                        theme={VictoryTheme.material}
                        offsetX={200}
                        standalone={false}
                    />
                </svg>
            </div>
        );
    }
}

export default DashBoard;
