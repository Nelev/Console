import Row from "antd/lib/row";
import React from "react";

import DashBoard from "../DashBoard/index.jsx";
import Header from "../../components/Header/index.jsx";
import SliderMenu from "../../components/SliderMenu/index.jsx";

import { menuSizes } from "../../common/commons.js";
import "./style.less";

class Root extends React.Component {
    state = { showMenu: false, currentView: "DASHBOARD" };

    handleMenuClick = resource => {
        switch (resource) {
            case "case 1": {
                return 1;
            }
            default:
                return;
        }
    };

    handleMenuToggle = () => {
        this.setState({ showMenu: !this.state.showMenu });
    };

    renderSliderMenu() {
        return this.state.showMenu === true ? (
            <SliderMenu show={this.state.showMenu} size={menuSizes.extended} />
        ) : (
            <SliderMenu show={this.state.showMenu} size={menuSizes.small} />
        );
    }

    renderWorkAreaContent() {
        return (
            <div>
                <DashBoard />
            </div>
        );
    }

    render() {
        return (
            <div className="v-Root">
                <Row>
                    <Header
                        handleMenuToggle={this.handleMenuToggle}
                        showMenu={this.state.showMenu}
                    />
                </Row>
                <Row>
                    <div className="v-Workarea">
                        {this.renderSliderMenu()}
                        <div className="v-Workarea-Content">
                            {this.renderWorkAreaContent()}
                        </div>
                    </div>
                </Row>
            </div>
        );
    }
}

export default Root;
