import React from "react";
import "./style.css";

class Header extends React.Component {
    state = { resources: ["users", "tickets", "costumers"] };

    renderResources() {
        const { resources } = this.state;
        return resources.map(resource => {
            return <div>{resource}</div>;
        });
    }

    render() {
        return <div className="c-Slider-Menu">{this.renderResources()}</div>;
    }
}

export default Header;
