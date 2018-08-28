import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Routes from './../../data/Constants';
import './NavBar.css';
import Divider from './Divider';

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

		// current tab
		let currentLocation = this.props.history.location.pathname;
		currentLocation = currentLocation.substring(1);
		let activeStyles = [{}, {}, {}, {}];
		if (currentLocation === 'about') {
			activeStyles[2] = {color: 'color: #b1769b'};
		} else if (currentLocation === 'sandbox') {
			activeStyles[1] = {color: 'color: #b1769b'};
		}

		return(
				<div>
					<div id={"navBarBody"}>
						<div className={"navBarHeader"}>
							<Link to={Routes.home} id={"nameLg"}>Harshitha Akkaraju</Link>
							<Link to={Routes.home} id={"nameSm"}>Harshitha</Link>
							<div className={"links"} style={styles}>
								<Link to={Routes.sandbox} className={"link"}>Sandbox</Link>
								<Link to={Routes.about} className={"link"}>About</Link>
								<Link to={Routes.home} className={"link"}>Resume</Link>
							</div>
						</div>
					</div>
					<Divider width={'70%'}/>
				</div>
		);
	}
}

export default NavBar;