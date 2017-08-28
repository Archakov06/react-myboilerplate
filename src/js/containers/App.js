import React, { Component } from 'react';
import axios from 'axios';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as appActions from '../actions/appActions';

class App extends Component {

  constructor(){
    super();
    this.state = {};
  }

  componentWillMount(){
  }

  render() {
    return (
      <h1>Hello, World!</h1>
    );
  }
}

const mapStateToProps = ({currentStore}) => {
  return {
    currentStore: currentStore
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    appActions: bindActionCreators(appActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
