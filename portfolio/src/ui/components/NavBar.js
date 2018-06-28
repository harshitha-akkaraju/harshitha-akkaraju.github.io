import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Routes from './../../data/Constants';
import './NavBar.css';

class NavBar extends Component {
	render() {
		// can't over-ride id selector
		let styles = {
			cursor: 'pointer'
		};

		return(
				<div className={"container"}>
					<div className={"body"}>
						<div id={"header"}>
							<Link to={Routes.home} id={"nameLg"}>Harshitha Akkaraju</Link>
							<Link to={Routes.home} id={"nameSm"}>Harshitha</Link>
							<div className={"links"} style={styles}>
								<Link to={Routes.home} className={"link"}>Projects</Link>
								<Link to={Routes.home} className={"link"}>About</Link>
								<Link to={Routes.home} className={"link"}>Resume</Link>
							</div>
						</div>
					</div>
				</div>
		);
	}
}

export default NavBar;