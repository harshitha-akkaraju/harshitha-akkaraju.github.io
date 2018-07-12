import React, { Component } from 'react';
import NavBar from './../components/NavBar';
import Ohana from './../components/Ohana';
import Coino from './../components/Coino';
import Footer from './../components/Footer';

class ProjectView extends Component {
	render() {
		let pathName = this.props.history.location.pathname;
		let component = undefined;
		if (pathName.includes('Ohana')) {
			component = <Ohana/>;
		} else if (pathName.includes('Coino')) {
			component = <Coino/>;
		}
		return(
				<div>
					<NavBar history={this.props.history}/>
					{component}
					<Footer/>
				</div>
		);
	}
}

export default ProjectView;