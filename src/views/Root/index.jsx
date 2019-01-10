import Row from "antd/lib/row";
import React from "react";

import Header from "../../components/Header/index.jsx";
import SliderMenu from "../../components/SliderMenu/index.jsx";
import WorkArea from "../../components/WorkArea/index.jsx";

import { menuSizes } from "../../common/commons.js";
import "./style.less";

class Root extends React.Component {
    state = { showMenu: false };

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
                        <WorkArea />
                    </div>
                </Row>
            </div>
        );
    }
}

export default Root;
