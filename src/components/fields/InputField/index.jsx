import { Input } from "antd";
import React from "react";

export default class InputField extends React.Component {
    render() {
        const { input } = this.props;
        return <Input {...input} />;
    }
}
