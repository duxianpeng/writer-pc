import React from "react";
import { Layout, Icon } from "antd";
import Header from "../../containers/Header";
import Footer from "../../components/Footer";
import NavLeft from "../../containers/NavLeft";
import "./index.less";
import Home from "../home";
import Logo from "../../images/logo.png";
import { TitleBar } from "electron-react-titlebar";
import "electron-react-titlebar/assets/style.css";

class Title extends React.Component {
  render() {
    return <span className="titlebar__title">Meridian</span>;
  }
}



const { Sider, Content } = Layout;
export default class App extends React.Component {
  state = {
    collapsed: false,
    mode: "inline"
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
      mode: this.state.collapsed ? "vertical" : "inline"
    });
  };

  render() {
    return (
      <Layout className="l-app">
        <TitleBar icon={Logo} className="l-app__titlebar" children={<Title />} />
        <Layout>
          <Sider className="l-app__sider" collapsed={this.state.collapsed}>
            <Icon
              className="sider__btn"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
            <NavLeft menuMode={this.state.mode} />
            <div className="sider__footer">
              <Icon className="sider__btn" type="setting" />
            </div>
          </Sider>
          <Layout className="l-app__main l-main">
            <Header />
            <Content className="l-main__content">
                {this.props.children}
            </Content>
            <Footer />
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
