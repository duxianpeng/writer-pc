import React from "react";
import { connect } from "react-redux";
import NavLeft from "../../components/NavLeft";
import MenuData from "../../config/MenuData";
import { changeModule, REDUCER_NAME } from "../../reducers/assembly";
import PropTypes from "prop-types";
class NavLeftContainer extends React.Component {
  static propTypes = {
    currentModule: PropTypes.string,
    changeModule: PropTypes.func
  };

  constructor() {
    super();
  }

  handleChangeModule(currentModule) {
    if (!currentModule) return;
    localStorage.setItem("currentModule", currentModule);
    if (this.props.changeModule) {
      this.props.changeModule(currentModule);
    }
  }

  render() {
    return (
      <NavLeft
        currentModule={this.props.currentModule}
        menuMode='inline'
        menuTheme='dark'
        menuData={MenuData}
        changeModule={this.handleChangeModule.bind(this)}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    module: state[REDUCER_NAME].currentModule
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeModule: currentModule => {
      dispatch(changeModule(currentModule));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavLeftContainer);
