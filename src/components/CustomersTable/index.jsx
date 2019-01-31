import Icon from "antd/lib/icon";
import Table from "antd/lib/table";
import Tooltip from "antd/lib/tooltip";
import PropTypes from "prop-types";
import React from "react";

class TaskTable extends React.Component {
    static propTypes = {
        fetchTicketsInfo: PropTypes.func
    };

    getColumns() {
        return [
            {
                title: "Vatin",
                dataIndex: "vatin",
                key: "vatin"
            },
            {
                title: "Name",
                dataIndex: "name",
                key: "name"
            },
            {
                title: "Email",
                dataIndex: "email",
                key: "email"
            },
            {
                title: "Active tickets",
                dataIndex: "activeTickets",
                key: "activeTickets"
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

    render() {
        const { datasource, loading } = this.props;
        return (
            <div>
                <Table
                    dataSource={datasource}
                    columns={this.getColumns()}
                    loading={loading}
                    pagination={{ pageSize: 10 }}
                    rowKey="id"
                />
            </div>
        );
    }
}

export default TaskTable;
