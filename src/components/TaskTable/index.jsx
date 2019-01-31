import Icon from "antd/lib/icon";
import Progress from "antd/lib/progress";
import Table from "antd/lib/table";
import Tooltip from "antd/lib/tooltip";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchTicketsInfo } from "./actions";
import { ticketStatus } from "../../common/commons";
import "./style.less";
import { statePropType } from "./reducer";

class TaskTable extends React.Component {
    static propTypes = {
        ...statePropType,
        fetchTicketsInfo: PropTypes.func
    };

    componentDidMount() {
        const { fetchTicketsInfo, ticketsInfo } = this.props;
        if (ticketsInfo === null) {
            fetchTicketsInfo();
        }
    }

    getColumns() {
        return [
            {
                title: "User",
                dataIndex: "user",
                key: "user"
            },
            {
                title: "Ticked Id",
                dataIndex: "tickedId",
                key: "tickedId"
            },
            {
                title: "Status",
                dataIndex: "status",
                key: "status",
                render: text => this.renderStatus(text)
            },
            {
                title: "Progress",
                dataIndex: "progress",
                key: "progress",
                render: percentage => (
                    <Progress type="circle" percent={percentage} width={30} />
                )
            },
            {
                key: "watch",
                render: () => (
                    <Tooltip title="Details, TO-DO">
                        <Icon type="eye" width={30} />
                    </Tooltip>
                )
            }
        ];
    }

    renderStatus(value) {
        switch (value) {
            case ticketStatus.done:
                return (
                    <Icon
                        type="check-circle"
                        theme="twoTone"
                        twoToneColor="#52c41a"
                    />
                );
            case ticketStatus.inProgress:
                return <Icon type="sync" spin style={{ color: "#1890ff" }} />;
            case ticketStatus.failed:
                return (
                    <Icon
                        type="close-circle"
                        theme="twoTone"
                        twoToneColor="red"
                    />
                );
            default:
                return;
        }
    }
    render() {
        console.log(this.props);
        const { ticketsInfo, isFetchingTickets } = this.props;
        return (
            <div>
                <Table
                    dataSource={ticketsInfo}
                    columns={this.getColumns()}
                    loading={isFetchingTickets}
                    pagination={{ pageSize: 5 }}
                    size="small"
                    rowKey="id"
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isFetchingTickets: state.components.dashboard.isFetchingTicketsInfo,
        ticketsInfo: state.components.dashboard.ticketsInfo
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchTicketsInfo: bindActionCreators(fetchTicketsInfo, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskTable);
