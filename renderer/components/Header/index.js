import React from "react";
import { Row, Col } from "antd";
import "./index.less";
import Util from "../../utils/until";
import PropTypes from "prop-types";

export default class Header extends React.Component {
  static propTypes = {
    currentModule: PropTypes.string
  };

  constructor() {
    super();
    this.state = {};
    setInterval(() => {
      let date = Util.formatDate(new Date().getTime());
      this.setState({
        date
      });
    }, 1000);
  }

  render() {
    return (
      <div className="header">
        <Row className="header__header-top header-top">
          <Col span="24">
            <span className="header-top__account">Welcome, Duxianpeng</span>
            <span className="header-top__logout">Logout</span>
          </Col>
        </Row>
        <Row className="header__breadcrumb breadcrumb">
          <Col span="4" className="breadcrumb__title">
            {this.props.currentModule}
          </Col>
          <Col span="20" className="breadcrumb__date">
            {this.state.date}
          </Col>
        </Row>
      </div>
    );
  }
}
