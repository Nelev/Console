import Icon from "antd/lib/icon";
import Menu from "antd/lib/menu";
import React from "react";

import "./style.less";

export const menuSizes = { small: "SMALL", extended: "EXTENDED" };

const resources = [
    { name: "Tickets", icon: "tags" },
    { name: "Costumers", icon: "smile" },
    { name: "Users", icon: "team" }
];

class SliderMenu extends React.Component {
    renderMenuItem(resource) {
        const { size } = this.props;
        console.log(size);
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
        return (
            <div className={"c-Slider-Menu"}>
                <Menu
                    defaultSelectedKeys={["1"]}
                    defaultOpenKeys={["sub1"]}
                    mode="inline"
                    theme="dark"
                >
                    {this.renderMenuItems()}
                </Menu>
            </div>
        );
    }
}

export default SliderMenu;
