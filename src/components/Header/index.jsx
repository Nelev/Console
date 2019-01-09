import React from "react";
import Icon from "antd/lib/icon";

import SliderMenu from "../SliderMenu/index.jsx";
import "./style.less";

export const menuSizes = { small: "SMALL", extended: "EXTENDED" };

class Header extends React.Component {
    state = { showMenu: false };

    handleMenuToggle = () => {
        this.setState({ showMenu: !this.state.showMenu });
    };

    renderSlider() {
        return this.state.showMenu === true ? (
            <SliderMenu show={this.state.showMenu} size={menuSizes.extended} />
        ) : (
            <SliderMenu show={this.state.showMenu} size={menuSizes.small} />
        );
    }

    render() {
        return (
            <div>
                <div className="c-Main-Header">
                    <span
                        className="c-Header-Toggle"
                        onClick={this.handleMenuToggle}
                    >
                        <Icon
                            type={
                                this.state.showMenu === false ? "bars" : "close"
                            }
                        />
                    </span>
                    <div className="c-Header-Title">t-Console</div>
                </div>
                {this.renderSlider()}
            </div>
        );
    }
}

export default Header;
