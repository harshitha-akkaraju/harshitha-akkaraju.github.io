import React, { Component } from 'react';
import Routes from './../../data/Constants';
import Intro from './../../data/BriefIntro';
import './IntroBar.css';

/// Component for the navigation bar + brief intro on the landing page
class IntroBar extends Component {
	switchTab(tabName) {
		if (tabName === "about") {
			this.props.history.push(Routes.about);
		} else if (tabName === "home") {
			this.props.history.push(Routes.home);
		}
	}

	render() {
		// can't over-ride id selector
		let styles = {
			cursor: 'pointer'
		};

		return(
				<div className={"container body"}>
					<div id={"header"}>
						<a id={"nameLg"}
							 style={styles}
							 onClick={() => this.switchTab("home")}>
							Harshitha Akkaraju
						</a>
						<a id={"nameSm"}
							 onClick={() => this.switchTab("home")}>
							Harshitha
						</a>
						<div className={"links"}
								 style={styles}>
							<a className={"link"}
								 onClick={() => this.switchTab("about")}>About</a>
							<a className={"link"}>Resume</a>
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