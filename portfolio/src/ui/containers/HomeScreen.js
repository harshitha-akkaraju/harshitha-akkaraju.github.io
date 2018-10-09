import React, { Component } from 'react';
import NavBar from './../components/NavBar';
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
					<div className={"text"}>
						<p className={"pitch"}>Hello, there!</p>
						<p className={"pitch"}>
							I am a <span>design-literate developer</span> studying <span className={"standout"}>Software Engineering </span>
							and <span className={"standout"}>Human Computer Interaction</span> at the University of Washington in Seattle.
						</p>
						<p className={"currRole"}>
							I am currently engineering research tools at the
							<a href={'http://faculty.washington.edu/ajko/students'}> Code and Cognition Lab</a> directed by Dr. Andrew J. Ko.

							<br/>

							I am also developing software for <a href={'http://depts.washington.edu/melab/projects/project-emar/'}>Project EMAR</a>.
						</p>

					</div>
					<div className={"sections"} id={"selectedProjects"}>
						<Section title={"Selected Projects"}
										 history={this.props.history}/>
						<br/>
						<div className={'sandbox'}>
							<Link to={Routes.sandbox}><button className={'btn btn-secondary'}>See Sandbox</button></Link>
						</div>
					</div>
					<Footer/>
				</div>
		)
	}
}

export default HomeScreen;