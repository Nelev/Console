import React from "react";
import Icon from "antd/lib/icon";
import PropTypes from "prop-types";

import "./style.less";

class Header extends React.Component {
    static propTypes = {
        handleMenuToggle: PropTypes.func,
        showMenu: PropTypes.bool,
        user: PropTypes.string
    };

    renderWelcome() {
        const { user } = this.props;
        return (
            <div>
                <span>
                    Welcome <b>{user}</b>
                </span>
                <span className="c-Header-Logout-Icon">
                    <Icon type="poweroff" />
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
                <span className="c-Header-Welcome">{this.renderWelcome()}</span>
            </div>
        );
    }
}

export default Header;
