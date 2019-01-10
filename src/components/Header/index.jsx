import React from "react";
import Icon from "antd/lib/icon";

import "./style.less";

class Header extends React.Component {
    render() {
        const { handleMenuToggle, showMenu } = this.props;
        return (
            <div className="c-Main-Header">
                <span className="c-Header-Toggle" onClick={handleMenuToggle}>
                    <Icon type={showMenu === false ? "bars" : "close"} />
                </span>
                <div className="c-Header-Welcome" />
            </div>
        );
    }
}

export default Header;
