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
							<Link to={Routes.home}><p id={"nameLg"}>Harshitha Akkaraju</p></Link>
							<Link to={Routes.home}><p id={"nameSm"}>Harshitha</p></Link>
							<div className={"links"} style={styles}>
								<Link to={Routes.home}><p className={"link"}>Projects</p></Link>
								<Link to={Routes.home}><p className={"link"}>About</p></Link>
								<Link to={Routes.home}><p className={"link"}>Resume</p></Link>
							</div>
						</div>
					</div>
				</div>
		);
	}
}

export default NavBar;