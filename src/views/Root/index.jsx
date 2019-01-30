import Row from "antd/lib/row";
import React from "react";
import { connect } from "react-redux";
import { history } from "react-router-prop-types";
import PropTypes from "prop-types";
import DashBoard from "../DashBoard/index.jsx";
import Header from "../../components/Header/index.jsx";
import SliderMenu from "../../components/SliderMenu/index.jsx";

import { menuSizes } from "../../common/commons.js";
import "./style.less";

class Root extends React.Component {
    static propTypes = {
        history: history.isRequired,
        user: PropTypes.string
    };

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
        const { user } = this.props;
        return (
            <div className="v-Root">
                <Row>
                    <Header
                        handleMenuToggle={this.handleMenuToggle}
                        showMenu={this.state.showMenu}
                        user={user}
                    />
                </Row>
                <Row>
                    <div className="v-Workarea">
                        {this.renderSliderMenu()}
                        {this.renderWorkAreaContent()}
                    </div>
                </Row>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.login.user
    };
}

export default connect(
    mapStateToProps,
    null
)(Root);
