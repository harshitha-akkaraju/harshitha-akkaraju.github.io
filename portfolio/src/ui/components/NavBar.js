import React, { Component } from 'react';
import Routes from './../../data/Constants';
import Intro from '../../data/BriefIntro';

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
							<p className={"nameLg"}>Harshitha Akkaraju</p>
							<div className={"links"} style={styles}>
								<span className={"link"}
									 onClick={() => this.props.history.push(Routes.home)}>Projects</span>
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