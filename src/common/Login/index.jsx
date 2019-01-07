import { connect } from "react-redux";
import React from "react";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { login } from "../../common/Login/actions";

import LoginForm from "../../components/LoginForm";

class Login extends React.Component {
    static propTypes = {
        login: PropTypes.func.isRequired
    };

    handleSubmit = () => {
        const { login } = this.props;
        login();
    };

    render() {
        const { children } = this.props;
        return this.props.logged === false ? (
            <LoginForm onSubmit={this.handleSubmit} />
        ) : (
            children
        );
    }
}

function mapStateToProps(state) {
    return {
        logged: state.login.logged
    };
}

function mapDispatchToProps(dispatch) {
    return {
        login: bindActionCreators(login, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
