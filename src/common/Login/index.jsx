import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { login } from "../../common/Login/actions";

import LoginForm from "../../components/LoginForm/index.jsx";

import "./style.less";

class Login extends React.Component {
    static propTypes = {
        login: PropTypes.func.isRequired,
        user: PropTypes.string
    };

    handleSubmit = formValues => {
        const { login } = this.props;
        login(formValues);
    };

    renderTitle() {
        return <div className="c-Login-Title">t-Console</div>;
    }

    render() {
        const { children } = this.props;
        return this.props.logged === false ? (
            <div>
                {this.renderTitle()}
                <LoginForm onSubmit={this.handleSubmit} />
            </div>
        ) : (
            children
        );
    }
}

function mapStateToProps(state) {
    return {
        logged: state.login.logged,
        user: state.login.user
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
