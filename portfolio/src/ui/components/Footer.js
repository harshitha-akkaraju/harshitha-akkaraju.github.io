import React, { Component } from 'react';
import { Link } from "react-router-dom";
// TODO: Delete routes later is a placeholder for now
import Routes from './../../data/Constants';
import './Footer.css';

/// Footer component
class Footer extends Component {
	render() {
		return(
				<div id={"component"} className={"sticky-bottom"}>
					<p className={"center"}>© 2018 Harshitha Akkaraju All Rights Reserved</p>
					<div className={"links"}>
						<Link to={Routes.home}><img className={"icon"}
																				src={require('./../../data/footer/github.png')}></img></Link>
						<Link to={Routes.home}><img className={"icon"}
																				src={require('./../../data/footer/linkedin.png')}></img></Link>
						<Link to={Routes.home}><img className={"icon"}
																				src={require('./../../data/footer/email.png')}></img></Link>
					</div>
				</div>
		);
	}
}

export default Footer;