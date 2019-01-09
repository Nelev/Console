import Icon from "antd/lib/icon";
import Menu from "antd/lib/menu";
import React from "react";
import "./style.css";

const resources = [
    { name: "Tickets", icon: "tags" },
    { name: "Costumers", icon: "smile" },
    { name: "Users", icon: "team" }
];

class SliderMenu extends React.Component {
    renderMenuItems() {
        const menuItems = resources.map((resource, index) => {
            return (
                <Menu.Item key={index}>
                    <Icon type={resource.icon} />
                    <span>{resource.name}</span>
                </Menu.Item>
            );
        });

        menuItems.unshift(
            <Menu.Item key={menuItems.length}>
                <Icon type="area-chart" />
                <span>DashBoard</span>
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
