import Icon from "antd/lib/icon";
import Menu from "antd/lib/menu";
import classNames from "classnames";
import React from "react";

import { menuSizes } from "../../common/commons.js";
import "./style.less";

const resources = [
    { name: "Tickets", icon: "tags" },
    { name: "Costumers", icon: "smile" },
    { name: "Users", icon: "team" }
];

class SliderMenu extends React.Component {
    renderMenuItem(resource) {
        const { size } = this.props;
        return size === menuSizes.extended ? (
            <span>{resource.name}</span>
        ) : null;
    }

    renderMenuItems() {
        const menuItems = resources.map((resource, index) => {
            return (
                <Menu.Item key={index}>
                    <Icon type={resource.icon} />
                    {this.renderMenuItem(resource)}
                </Menu.Item>
            );
        });
        menuItems.unshift(
            <Menu.Item key={menuItems.length}>
                <Icon type="area-chart" />
                {this.renderMenuItem({ name: "DashBoard" })}
            </Menu.Item>
        );
        return menuItems;
    }

    render() {
        const { size } = this.props;
        return (
            <span className={classNames("c-Slider-Menu", size)}>
                <Menu
                    defaultSelectedKeys={["1"]}
                    defaultOpenKeys={["sub1"]}
                    mode="inline"
                    theme="dark"
                >
                    {this.renderMenuItems()}
                </Menu>
            </span>
        );
    }
}

export default SliderMenu;
