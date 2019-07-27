import React, { Component } from 'react';
import {HashRouter as Router, Switch, Redirect, Route} from 'react-router-dom';
import Routes from './../../data/Constants';
import HomeScreen from './HomeScreen';
import SandboxView from './SandboxView';
import Experience from './Experience';
import './App.css';

/// All the other components are wrapped in this class
class App extends Component {

  render() {
    return (
				<Router>
					<Switch>
						<Route exact path={Routes.home} component={HomeScreen} />
						<Route exact path={Routes.sandbox} component={SandboxView} />
						<Route exact path={Routes.about} component={Experience} />	
						<Redirect to="/" />
					</Switch>
				</Router>
    );
  }
}

export default App;
