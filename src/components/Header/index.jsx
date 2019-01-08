import React from "react";
import Icon from "antd/lib/icon";

import SliderMenu from "../SliderMenu/index.jsx";
import "./style.css";

class Header extends React.Component {
    state = { showMenu: false };

    handleMenuToggle = () => {
        this.setState({ showMenu: !this.state.showMenu });
    };

    renderSlider() {
        return this.state.showMenu === true ? <SliderMenu /> : null;
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
