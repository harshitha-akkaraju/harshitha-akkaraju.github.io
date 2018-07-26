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

	openMenu() {
		this.setState({openMenu: true});
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
			console.log("here")
			activeStyles[2] = {color: 'color: #b1769b'};
		} else if (currentLocation === 'sandbox') {
			activeStyles[1] = {color: 'color: #b1769b'};
		}

		return(
				<div>
					<div id={"navBarBody"}>
						<div id={"navBarHeader"}>
							<Link to={Routes.home} id={"nameLg"}>Harshitha Akkaraju</Link>
							<Link to={Routes.home} id={"nameSm"}>Harshitha</Link>
							<div className={"links"} style={styles}>
								<i className="fas fa-bars menu" onClick={() => this.openMenu()}/>
								<Link to={Routes.home} className={"link"}>Projects</Link>
								<Link to={Routes.sandbox} className={"link"}>Sandbox</Link>
								<Link to={Routes.about} className={"link"}>About</Link>
								<Link to={Routes.home} className={"link"}>Resume</Link>
							</div>
						</div>
					</div>
					<Divider width={'80%'}/>
				</div>
		);
	}
}

export default NavBar;