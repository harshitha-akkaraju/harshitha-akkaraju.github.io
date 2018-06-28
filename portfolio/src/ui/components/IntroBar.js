import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Routes from './../../data/Constants';
import Intro from './../../data/BriefIntro';
import './IntroBar.css';

/// Component for the navigation bar + brief intro on the landing page
class IntroBar extends Component {
	render() {
		return(
				<div className={"container body"}>
					<div id={"header"}>
						<Link to={Routes.home} id={"nameLg"}>Harshitha Akkaraju</Link>
						<Link
								to={Routes.home} id={"nameSm"}>Harshitha</Link>
						<div className={"links"}>
							<Link to={Routes.about} className={'link'}>About</Link>
							<Link to={Routes.home} className={'link'}>Resume</Link>
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