import Card from "antd/lib/card";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchCustomers } from "./actions";
import CustomersTable from "../../components/CustomersTable/index.jsx";
import { statePropType } from "./reducer";

class Customers extends React.Component {
    static propTypes = {
        ...statePropType,
        fetchUsers: PropTypes.func
    };

    componentDidMount() {
        const { fetchCustomers } = this.props;
        fetchCustomers();
    }

    render() {
        const { customers, isFetchingCustomers } = this.props;
        return (
            <div className="v-Customers">
                <Card>
                    <CustomersTable
                        datasource={customers}
                        loading={isFetchingCustomers}
                    />
                </Card>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        isFetchingCustomers: state.views.customers.isFetchingCustomers,
        customers: state.views.customers.customers
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCustomers: bindActionCreators(fetchCustomers, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Customers);
