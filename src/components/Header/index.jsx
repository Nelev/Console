import React from "react";
import Icon from "antd/lib/icon";
import "./style.css";

class Header extends React.Component {
    handleMenuToggle = () => {
        alert("TOGGLE MENU");
    };

    render() {
        return (
            <div className="c-Main-Header">
                <div
                    className="c-Header-Toggle"
                    onClick={this.handleMenuToggle}
                >
                    <Icon type="bars" />
                </div>
                <div className="c-Header-Title">t-Console</div>
            </div>
        );
    }
}

export default Header;
