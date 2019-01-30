import Icon from "antd/lib/icon";
import Tooltip from "antd/lib/tooltip";
import PropTypes from "prop-types";
import React from "react";

import "./style.less";

class Header extends React.Component {
    static propTypes = {
        currentResource: PropTypes.string,
        handleMenuToggle: PropTypes.func.isRequired,
        logout: PropTypes.func.isRequired,
        showMenu: PropTypes.bool,
        user: PropTypes.string.isRequired
    };

    handleLogout = () => {
        const { logout } = this.props;
        logout();
    };

    handleProfileOpen = () => {
        const { handleProfileOpen } = this.props;
        handleProfileOpen();
    };

    renderCurrentResource() {
        const { resource } = this.props;

        return <span className="c-Header-Resource">{resource}</span>;
    }

    renderWelcome() {
        const { user } = this.props;
        return (
            <div>
                <span
                    className="c-Header-Profile-Icon"
                    onClick={this.handleProfileOpen}
                >
                    <Tooltip title="profile">
                        <Icon type="user" />
                    </Tooltip>
                </span>
                <span className="c-Welcome-Message">
                    Welcome <b> {user} </b>
                </span>
                <span
                    className="c-Header-Logout-Icon"
                    onClick={this.handleLogout}
                >
                    <Tooltip title="logout">
                        <Icon type="poweroff" />
                    </Tooltip>
                </span>
            </div>
        );
    }

    render() {
        const { handleMenuToggle, showMenu } = this.props;
        return (
            <div className="c-Main-Header">
                <span className="c-Header-Toggle" onClick={handleMenuToggle}>
                    <Icon type={showMenu === false ? "bars" : "close"} />
                </span>
                {this.renderCurrentResource()}
                <span className="c-Header-Welcome">{this.renderWelcome()}</span>
            </div>
        );
    }
}

export default Header;
