import React, { Component } from 'react';
import NavBar from './../components/NavBar';
import Footer from './../components/Footer';

class About extends Component {
	render() {
		return(
				<div>
					<NavBar history={this.props.history}/>
					<Footer/>
				</div>
		);
	}
}

export default About;