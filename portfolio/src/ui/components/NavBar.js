import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Routes from './../../data/Constants';
import './NavBar.css';
import Resume from './../../data/resume.pdf';

class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			openMenu: false
		}
	}

	render() {
		// can't over-ride id selector
		let styles = {
			cursor: 'pointer'
		};
		let project = Routes.sandbox;
		let tabName = "Sandbox";

		// current tab
		let currentLocation = this.props.history.location.pathname;
		currentLocation = currentLocation.substring(1);
		let activeStyles = [{}, {}, {}, {}];
		if (currentLocation === "") {
			activeStyles[0] = {color: '#b1769b', fontWeight: 'bold'};
		} else if (currentLocation === 'about') {
			activeStyles[2] = {color: '#b1769b', fontWeight: 'bold'};
		} else if (currentLocation === 'sandbox') {
			project = Routes.home;
			tabName = "Projects"
		}

		return(
				<div>
					{/* <div id={"navBarBody"}>
						<div className={"navBarHeader"}>
							<Link to={Routes.home} id={"nameLg"} style={activeStyles[0]}>Harshitha Akkaraju</Link>
							<Link to={Routes.home} id={"nameSm"} style={activeStyles[0]}>Harshitha</Link>
							<div className={"links"} style={styles}>
								<Link to={Routes.sandbox} className={"link"} style={activeStyles[1]}>Projects</Link>
								<Link to={Routes.about} className={"link"} style={activeStyles[2]}>Experience</Link>
								<a href={Resume} className={"link"} target={"_blank"}>Resume</a>
							</div>
						</div>
					</div> */}
				</div>
		);
	}
}

export default NavBar;