import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Routes from './../../data/Constants';
import './IntroBar.css';

/// Component for the navigation bar + brief intro on the landing page
class IntroBar extends Component {
	render() {
		return(
				<div id={"introBody"}>
					<div id={"introBarHeader"}>
						<Link to={Routes.home} id={"nameLg"}>Harshitha Akkaraju</Link>
						<Link
								to={Routes.home} id={"nameSm"}>Harshitha</Link>
						<div className={"links"}>
							<Link to={Routes.about} className={'link'}>About</Link>
							<Link to={Routes.home} className={'link'}>Resume</Link>
						</div>
					</div>

					<div className={"text"}>
						<p className={"pitch"}>
							I am a design-literate developer studying <span>Software Engineering </span>
							and <span>Human Computer Interaction</span> at the University of Washington in Seattle.
						</p>
						<p className={"currRole"}>
							I am currently developing research tools at the
							<a href={'http://faculty.washington.edu/ajko/students'}> Code and Cognition Lab</a>.
							In the past, I worked with the
							<a href={'https://tcat.cs.washington.edu/'}> Taskar Center for Accessible Technology </a>
							in the Paul G. Allen School of Computer Science.
						</p>
					</div>

				</div>
		);
	}
}

export default IntroBar;