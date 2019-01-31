import Button from "antd/lib/button";
import Icon from "antd/lib/icon";
import Modal from "antd/lib/modal";
import Spin from "antd/lib/spin";
import Tag from "antd/lib/tag";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import React from "react";

import { fetchUserInfo } from "./actions";
import "./style.less";
import { statePropType } from "./reducer";

class Profile extends React.Component {
    static propTypes = {
        ...statePropType,
        fetchUserInfo: PropTypes.func,
        handleProfileOpen: PropTypes.func.isRequired,
        user: PropTypes.string,
        userInfo: PropTypes.object,
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

    renderProfileContent() {
        const { isFetchingUser, userInfo } = this.props;

        return isFetchingUser === true ? (
            <div className="c-Profile-Spinner">
                <Spin tip="Loading..." />
            </div>
        ) : (
            <div
                className="c-Profile-Content-Container"
                style={{ maringLeft: "10px" }}
            >
                <table className="c-User-Info-Tabel">
                    <tbody>
                        <tr>
                            <td>
                                <b>Name:</b>
                                {userInfo !== null ? userInfo.name : null}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>Surname:</b>
                                {userInfo !== null ? userInfo.surname : null}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>City:</b>
                                {userInfo !== null
                                    ? userInfo.address.city
                                    : null}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>Address:</b>
                                {userInfo !== null
                                    ? userInfo.address.street
                                    : null}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>Company:</b>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {userInfo !== null ? (
                                    <Tag color="purple">
                                        {userInfo.company.name}
                                    </Tag>
                                ) : null}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

    renderTitle() {
        const { user } = this.props;
        return (
            <div>
                <Icon
                    type="smile"
                    theme="twoTone"
                    twoToneColor="#7546c9"
                    style={{ fontSize: "200%" }}
                />
                <span className="c-Profile-Title-Username">{user}</span>
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
                        Close
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
        isFetchingUser: state.components.profile.isFetchingUser,
        user: state.login.user,
        userInfo: state.components.profile.userInfo
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
