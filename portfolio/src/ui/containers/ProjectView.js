import React, { Component } from 'react';
import NavBar from './../components/NavBar';
import Ohana from './../components/Ohana';

import Footer from './../components/Footer';

class ProjectView extends Component {
	render() {
		return(
				<div>
					<NavBar history={this.props.history}/>
					<Ohana/>
					<Footer/>
				</div>
		);
	}
}

export default ProjectView;