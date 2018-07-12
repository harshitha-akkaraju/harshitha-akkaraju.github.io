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
								<img src={Github} alt={'link to github'} className={'icon'}></img>
							</a>
							<a href={Routes.linkedin}>
								<img src={Linkedin} alt={'link to linkedin page'} className={'icon'}></img>
							</a>
							<a href={Routes.home}>
								<img src={Email} alt={'email address'} className={'icon'}></img>
							</a>
						</div>
					</div>
				</div>
		);
	}
}

export default Footer;