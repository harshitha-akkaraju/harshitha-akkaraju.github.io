import React, { Component } from 'react';
import IntroBar from './../components/IntroBar';
import Section from './Section';
import Footer from './../components/Footer';
import './HomeScreen.css'

class HomeScreen extends Component {
	render() {
		return(
				<div>
					<IntroBar history={this.props.history}/>
					<div className={"sections"}>
						<Section title={"Selected Projects"}
										 history={this.props.history}/>
					</div>
					<Footer/>
				</div>
		)
	}
}

export default HomeScreen;