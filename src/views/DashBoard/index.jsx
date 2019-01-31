import Card from "antd/lib/card";
import Col from "antd/lib/col";
import Icon from "antd/lib/icon";
import Row from "antd/lib/row";
import React from "react";
import TableTask from "../../components/TaskTable/index.jsx";
import TicketsProgressChart from "../../components/TicketsProgressChart/index.jsx";
import "./style.less";

class DashBoard extends React.Component {
    renderTicketsProgressTitle() {
        return (
            <span>
                <Icon
                    type="line-chart"
                    style={{ fontSize: "150%", color: "#7546c9" }}
                />
                <span className="c-Ticket-Dashboard-Title">
                    Tickets done x day
                </span>
            </span>
        );
    }
    renderTicketsTitle() {
        return (
            <span>
                <Icon
                    type="tags"
                    theme="twoTone"
                    twoToneColor="#7546c9"
                    style={{ fontSize: "150%" }}
                />
                <span className="c-Ticket-Dashboard-Title">
                    Tickets progress
                </span>
            </span>
        );
    }

    render() {
        return (
            <div className="v-Dashboard">
                <Row type="flex" gutter={16}>
                    <Col>
                        <Card
                            title={this.renderTicketsTitle()}
                            hoverable={true}
                            style={{ height: 450, width: 400 }}
                        >
                            <TableTask />
                        </Card>
                    </Col>
                    <Col>
                        <Card
                            title={this.renderTicketsProgressTitle()}
                            hoverable={true}
                            style={{ height: 450, width: 400 }}
                        >
                            <TicketsProgressChart />
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default DashBoard;
