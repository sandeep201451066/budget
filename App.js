/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import UserLogin from './src/login/UserLogin'
import { Router, Scene } from 'react-native-router-flux';
import Home from './src/Home';

export default class App extends Component {
  render() {
    return (
      <Router>
      <Scene key="root">
        <Scene key="UserLogin"
          component={UserLogin}
          title="Login"
          initial
        />
        
        <Scene key="Home"
          component={Home}
          title="Home"
          hideNavBar={true}
        />
      </Scene>
    </Router>
    );
  }
}
