import React, { Component } from 'react';
import {HashRouter as Router, Switch, Redirect, Route} from 'react-router-dom';
import Routes from './../../data/Constants';
import HomeScreen from './HomeScreen';
import About from './About';
import ProjectView from './ProjectView';

/// All the other components are wrapped in this class
class App extends Component {

  render() {
    return (
				<Router>
					<Switch>
						<Route exact path={Routes.home} component={HomeScreen} />
						<Route exact path={Routes.about} component={About} />
						<Route exact path={Routes.project} component={ProjectView} />
						<Redirect to="/" />
					</Switch>
				</Router>
    );
  }
}

export default App;
