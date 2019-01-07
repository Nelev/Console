import Input from "antd/lib/input";
import React from "react";

export default class InputField extends React.Component {
    render() {
        const { input } = this.props;
        return <Input {...input} />;
    }
}
