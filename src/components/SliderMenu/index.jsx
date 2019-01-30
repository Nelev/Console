import Icon from "antd/lib/icon";
import Menu from "antd/lib/menu";
import classNames from "classnames";
import React from "react";

import { menuSizes, resources } from "../../common/commons.js";
import "./style.less";

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
                <Menu.Item key={index} onClick={() => alert("clicked")}>
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

export default SliderMenu;
