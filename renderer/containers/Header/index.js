import React from "react";
import {connect} from 'react-redux'
import Header from "../../components/Header";
import { changeModule, REDUCER_NAME } from "../../reducers/assembly";
import PropTypes from "prop-types";

class HeaderContainer extends React.Component {
  static propTypes = {
    currentModule: PropTypes.string,
    initModule: PropTypes.func
  };

  constructor() {
    super();
    this.state = {
      currentModule: ""
    };
  }

  componentWillMount() {
    this._loadCurrentModule();
  }

  _loadCurrentModule() {
    let currentModule = localStorage.getItem("CurrentModule");
    if(!currentModule){
        currentModule = 'Home',
        localStorage.setItem('currentModule', currentModule);
    }
    this.props.initModule(currentModule);
  }

  render() {
    return <Header currentModule={this.props.currentModule} />;
  }
}

const mapStateToProps = (state) => {
  return {
    currentModule: state[REDUCER_NAME].currentModule
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initModule: currentModule => {
      dispatch(changeModule(currentModule));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);
