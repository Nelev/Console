import { VictoryChart, VictoryBar, VictoryTheme } from "victory";
import React from "react";

class TicketsProgressChart extends React.Component {
    render() {
        return (
            <VictoryChart theme={VictoryTheme.material} domainPadding={10}>
                <VictoryBar
                    animate={{
                        duration: 2000,
                        onLoad: { duration: 1000 }
                    }}
                    style={{ data: { fill: "#7546c9" } }}
                    // mock data for testing purpose
                    data={[
                        { x: "Monday", y: 2 },
                        { x: "Tuesday", y: 3 },
                        { x: "Wedn", y: 5 },
                        { x: "Thursday", y: 4 },
                        { x: "Friday", y: 6 }
                    ]}
                />
            </VictoryChart>
        );
    }
}

export default TicketsProgressChart;
