import React, { Component } from 'react';
import Routes from './../../data/Constants';
import Intro from '../../data/BriefIntro';
import './NavBar.css';

class NavBar extends Component {
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
				<div className={"container"}>
					<div className={"body"}>
						<div id={"header"}>
							<a id={"nameLg"}
								 onClick={() => this.switchTab("home")}>
								Harshitha Akkaraju
							</a>
							<a id={"nameSm"}
								 onClick={() => this.switchTab("home")}>
								Harshitha
							</a>

							<div className={"links"} style={styles}>
								<span className={"link"}
									 onClick={() => this.switchTab("home")}>Projects</span>
								<span className={"link"}>About</span>
								<span className={"link"}>Resume</span>
							</div>
						</div>
					</div>
				</div>
		);
	}
}

export default NavBar;