import React, { Component } from 'react';
import IntroBar from './../components/IntroBar';
import Section from './Section';
import Footer from './../components/Footer';

class HomeScreen extends Component {
	render() {
		return(
				<div>
					<IntroBar history={this.props.history}/>
					<Section title={"Organizations"}/>
					<Section title={"Organizations"}/>
					<Section title={"Organizations"}/>
					<Footer/>
				</div>
		)
	}
}

export default HomeScreen;