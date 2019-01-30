import React from "react";
import Icon from "antd/lib/icon";
import PropTypes from "prop-types";

import "./style.less";

class Header extends React.Component {
    static propTypes = {
        handleMenuToggle: PropTypes.func.isRequired,
        logout: PropTypes.func.isRequired,
        showMenu: PropTypes.bool,
        user: PropTypes.string.isRequired
    };

    handleLogout = () => {
        const { logout } = this.props;
        logout();
    };

    renderWelcome() {
        const { user } = this.props;
        return (
            <div>
                <span>
                    Welcome <b> {user} </b>
                </span>
                <span
                    className="c-Header-Logout-Icon"
                    onClick={this.handleLogout}
                >
                    <Icon type="poweroff" />
                </span>
            </div>
        );
    }

    render() {
        console.log(this.props);
        const { handleMenuToggle, showMenu } = this.props;
        return (
            <div className="c-Main-Header">
                <span className="c-Header-Toggle" onClick={handleMenuToggle}>
                    <Icon type={showMenu === false ? "bars" : "close"} />
                </span>
                <span className="c-Header-Welcome">{this.renderWelcome()}</span>
            </div>
        );
    }
}

export default Header;
