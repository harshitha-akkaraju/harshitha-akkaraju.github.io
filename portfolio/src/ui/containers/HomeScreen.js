import React, { Component } from 'react';
import IntroBar from './../components/IntroBar';
import Section from './Section';

class HomeScreen extends Component {
	render() {
		return(
				<div>
					<IntroBar history={this.props.history}/>
					<Section title={"Organizations"}/>
					<Section title={"Organizations"}/>
					<Section title={"Organizations"}/>
				</div>
		)
	}
}

export default HomeScreen;