import React from "react";
import { Layout, Menu, Icon } from "antd";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./index.less";
import Logo from "../../images/logo.png";
const SubMenu = Menu.SubMenu;

export default class NavLeft extends React.Component {
  static propTypes = {
    menuMode: PropTypes.string,
    menuTheme: PropTypes.string,
    menuData: PropTypes.array,
    currentModule: PropTypes.string,
    changeModule: PropTypes.func
  };

  constructor() {
    super();
    this.state = {
      currentModule: "",
      menuNodes: []
    };
  }
  componentWillMount() {
    const menuNodes = this.renderMenu(this.props.menuData);
    this.setState({
      menuNodes: menuNodes
    });
  }

  createMenuTitle = (key, icon) => {
    return (
      <span>
        <Icon type={icon} />
        <span className="nav-text">{key}</span>
      </span>
    );
  };

  handleClick({item, key}) {
    if (key === this.state.currentModule) return false;
    if (this.props.changeModule) {
      this.props.changeModule(key);
      this.setState({
        currentModule: key
      });
    }
  }

  renderMenu = data => {
    return data.map(item => {
      let tempTitle = this.createMenuTitle(item.key, item.icon);
      if (item.children) {
        return (
          <SubMenu title={tempTitle} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item
          key={item.key}
          style={{ margin: 0 }}
          selectedKeys={[this.state.currentModule]}
        >
          <NavLink to={item.path}>{tempTitle}</NavLink>
        </Menu.Item>
      );
    });
  };

  render() {
    return (
      <div className="nav">
        <Menu
          theme={this.props.menuTheme}
          mode={this.props.menuMode}
          onClick={this.handleClick.bind(this)}
        >
          {this.state.menuNodes}
        </Menu>
      </div>
    );
  }
}
