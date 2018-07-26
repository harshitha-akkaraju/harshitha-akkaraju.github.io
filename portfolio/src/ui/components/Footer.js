import React, { Component } from 'react';
import Routes from './../../data/Constants';
import './Footer.css';

/// Footer component
class Footer extends Component {
	render() {
		return(
				<div id={"component"}>
					<div id={"footerContent"}>
						<p className={"center"}>Built from scratch by Harshitha Akkaraju</p>
						<div className={"footerLinks"}>
							<a href={Routes.github}>
								<i className="fab fa-github icon"/>
							</a>
							<a href={Routes.linkedin}>
								<i className="fab fa-linkedin-in icon"/>
							</a>
							<a href={Routes.email}>
								<i className="fas fa-paper-plane icon"/>
							</a>
						</div>
					</div>
				</div>
		);
	}
}

export default Footer;