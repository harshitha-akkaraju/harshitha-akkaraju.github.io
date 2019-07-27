import React, { Component } from 'react';
import NavBar from './../components/NavBar';
import Headshot from './../components/Headshot';
import Section from './Section';
import Footer from './../components/Footer';
import './HomeScreen.css';
import Routes from './../../data/Constants'
import { Link } from "react-router-dom";

class HomeScreen extends Component {
	render() {
		return(
				<div>
					<NavBar history={this.props.history}/>
					<div className="home-container">
						<div className="home-body">
							<div className="home-headshot"><Headshot /></div>
							<p className={"pitch"}>
								<span className={"greeting"}>Hello, there! My name is Harshitha.</span>
								<br/><br/>

								I am a 4th year undergraduate student at the University of Washington Seattle studying Informatics - a combination of systems design and software engineering.
								<br /><br />
								Currently, I am a TA for <a href={"https://jmankoff.github.io/interaction/"}>CSE 340</a> (Android Development). 
								
								I am also developing research tools at the
								<a href={'http://faculty.washington.edu/ajko/students'}> Code and Cognition Lab</a> directed by Dr. Andrew J. Ko.

								During Summer 2019, I will be working with PayPal as a Software Engineering Intern in the Bay Area.

								<br /><br />

								I feel strongly about improving equity in STEM and computing education. I take part in outreach work through Society of Women Engineers (SWE) and Women in Informatics. In my free time, I enjoy cooking and being outdoors.
							</p>
						</div>
					</div>
					<Footer/>
				</div>
		)
	}
}

export default HomeScreen;