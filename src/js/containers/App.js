import React, { Component } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';

import * as appActions from '../actions/appActions';

import Home from '../components/Home';
import About from '../components/About';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        <div>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ currentStore }) => ({
  currentStore: currentStore,
});

const mapDispatchToProps = (dispatch) => ({
  appActions: bindActionCreators(appActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: false,
})(App);
