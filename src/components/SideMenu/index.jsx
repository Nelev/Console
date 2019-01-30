import Icon from "antd/lib/icon";
import Menu from "antd/lib/menu";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import { menuSizes, resources } from "../../common/commons.js";
import "./style.less";

class SideMenu extends React.Component {
    static propTypes = {
        handleMenuClick: PropTypes.func.isRequired,
        resource: PropTypes.string,
        size: PropTypes.string
    };

    handleClick = item => {
        const { handleMenuClick } = this.props;
        handleMenuClick(item.key);
    };
    renderMenuItem(resource) {
        const { size } = this.props;
        return size === menuSizes.extended ? (
            <span>{resource.name}</span>
        ) : null;
    }

    renderMenuItems() {
        const menuItems = resources.map((resource, index) => {
            return (
                <Menu.Item key={index} onClick={this.handleClick}>
                    <Icon type={resource.icon} />
                    {this.renderMenuItem(resource)}
                </Menu.Item>
            );
        });
        return menuItems;
    }

    render() {
        const { size } = this.props;
        return (
            <span className={classNames("c-Slider-Menu", size)}>
                <Menu defaultSelectedKeys={["0"]} mode="inline" theme="dark">
                    {this.renderMenuItems()}
                </Menu>
            </span>
        );
    }
}

export default SideMenu;
