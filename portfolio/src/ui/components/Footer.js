import React, { Component } from 'react';
import { Link } from "react-router-dom";
// TODO: Delete routes later is a placeholder for now
import Routes from './../../data/Constants';
import './Footer.css';
import Github from './../../data/footer/github.svg';
import Linkedin from './../../data/footer/linkedin.svg';
import Email from './../../data/footer/email.svg';

/// Footer component
class Footer extends Component {
	render() {
		return(
				<div id={"component"}>
					<div id={"footerContent"}>
						<p className={"center"}>© 2018 Harshitha Akkaraju All Rights Reserved</p>
						<div className={"links"}>
							<a href={Routes.github}>
								<i className="fab fa-github icon"></i>
							</a>
							<a href={Routes.linkedin}>
								<i className="fab fa-linkedin-in icon"></i>
							</a>
							<a href={Routes.home}>
								<i className="fas fa-paper-plane icon"></i>
							</a>
						</div>
					</div>
				</div>
		);
	}
}

export default Footer;