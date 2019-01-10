import Input from "antd/lib/input";
import React from "react";

export default class PasswordField extends React.Component {
    render() {
        const { input } = this.props;
        return <Input.Password {...input} />;
    }
}
