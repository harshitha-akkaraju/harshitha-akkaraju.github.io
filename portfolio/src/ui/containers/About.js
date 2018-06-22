import React, { Component } from 'react';
import NavBar from './../components/NavBar';

class About extends Component {
	render() {
		return(
			<NavBar history={this.props.history}/>
		);
	}
}

export default About;