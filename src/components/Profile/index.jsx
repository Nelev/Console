import Button from "antd/lib/button";
import Icon from "antd/lib/icon";
import Modal from "antd/lib/modal";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import React from "react";

import { fetchUserInfo } from "./actions";
import "./style.less";

class Profile extends React.Component {
    static propTypes = {
        fetchUserInfo: PropTypes.func,
        handleProfileOpen: PropTypes.func.isRequired,
        user: PropTypes.string,
        visible: PropTypes.bool.isRequired
    };

    state = { userInfo: null };

    componentDidMount() {
        const { fetchUserInfo, user } = this.props;
        fetchUserInfo(user);
    }

    handleVisible = () => {
        const { handleProfileOpen, user } = this.props;
        handleProfileOpen(user);
    };

    renderProfileContent() {}

    renderTitle() {
        const { user } = this.props;

        return (
            <div>
                <Icon type="smile" theme="twoTone" twoToneColor="#7546c9" />
                <span>{user} profile</span>
            </div>
        );
    }
    render() {
        const { visible } = this.props;
        return (
            <Modal
                closable={false}
                title={this.renderTitle()}
                visible={visible}
                onOk={this.handleVisible}
                onCancel={this.handleVisible}
                footer={[
                    <Button
                        type="primary"
                        key="back"
                        onClick={this.handleVisible}
                    >
                        Return
                    </Button>
                ]}
            >
                {this.renderProfileContent()}
            </Modal>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.login.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchUserInfo: bindActionCreators(fetchUserInfo, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);
