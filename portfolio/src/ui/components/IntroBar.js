import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Routes from './../../data/Constants';
import Intro from './../../data/BriefIntro';
import './IntroBar.css';

/// Component for the navigation bar + brief intro on the landing page
class IntroBar extends Component {
	render() {
		// can't over-ride id selector
		let styles = {
			cursor: 'pointer'
		};

		return(
				<div className={"container body"}>
					<div id={"header"}>
						<Link to={Routes.home}><p id={"nameLg"} style={styles}>Harshitha Akkaraju</p></Link>
						<Link
								to={Routes.home}><p id={"nameSm"}>Harshitha</p></Link>
						<div className={"links"}
								 style={styles}>
							<Link to={Routes.about}><p className={"link"}>About</p></Link>
							<Link to={Routes.home}><p className={"link"}>Resume</p></Link>
						</div>
					</div>
					<p className={"pitch"}>
						{Intro.elevatorPitch}
					</p>
				</div>
		);
	}
}

export default IntroBar;