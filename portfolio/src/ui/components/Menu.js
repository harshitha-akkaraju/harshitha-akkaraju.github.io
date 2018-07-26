import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Routes from './../../data/Constants';

class Menu extends Component {
	render() {
		return(
				<nav id={"menu"}>
					<ul>
						<li><a href="#">Projects</a></li>
						<li><a href="#">Sandbox</a></li>
						<li><a href="#">About</a></li>
						<li><a href="#">Resume</a></li>
					</ul>
				</nav>
		);
	}
}