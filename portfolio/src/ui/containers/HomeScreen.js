import React, { Component } from 'react';
import NavBar from './../components/NavBar';
import Section from './Section';
import Footer from './../components/Footer';
import './HomeScreen.css';

class HomeScreen extends Component {
	render() {
		return(
				<div>
					<NavBar history={this.props.history}/>
					<div className={"text"}>
						<p className={"pitch"}>
							I am a design-literate developer studying <span>Software Engineering </span>
							and <span>Human Computer Interaction</span> at the University of Washington in Seattle.
						</p>
						<p className={"currRole"}>
							I am currently developing research tools at the
							<a href={'http://faculty.washington.edu/ajko/students'}> Code and Cognition Lab</a> directed by Dr. Andy J. Ko.
						</p>
					</div>
					<div className={"sections"} id={"selectedProjects"}>
						<Section title={"Selected Projects"}
										 history={this.props.history}/>
					</div>
					<Footer/>
				</div>
		)
	}
}

export default HomeScreen;