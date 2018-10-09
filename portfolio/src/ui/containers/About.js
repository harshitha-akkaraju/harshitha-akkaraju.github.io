import React, { Component } from 'react';
import { Link } from "react-router-dom";
import NavBar from './../components/NavBar';
import Footer from './../components/Footer';
import Picture from './../../data/portfolio.jpg';
import './About.css';
import Routes from './../../data/Constants';
import Resume from './../../data/resume.pdf';



class About extends Component {
	render() {
		return(
				<div>
					<NavBar history={this.props.history}/>
					<div className={'aboutBody'}>
						<div className={'polaroid'}>
							<img className={"img"}
									 src={Picture}
									 alt={"Me on route to the Grand Coulee Dam in Washington"}/>
						</div>

						<div className={"about"}>
							<p>
								<span className={"quickIntro highlight"}>Hello, there! <br/> I am Harshitha. </span>

								<span className={"aboutText"}>
								<br/>
								I am a senior studying Informatics,
								combination of systems design and software engineering, at the
									<span className={"standout"}> University of Washington</span> in Seattle.
								My experience lies in web development using ReactJS and
								data science projects developed in Python. I am
								interested in contributing to
								<span className={"standout"}> distributed systems </span>
								and <span className={"standout"}> machine learning </span> applications.

								<br/><br/>

								I feel strongly about improving equity in STEM and computing
								education. As a student leader in the UW Society of Women Engineers
								and Women in Informatics, I help organize several events including
								programming workshops, networking events, and a hackathon.

								<br/><br/>

								I am always open to getting involved in interesting projects.
								Email me at <a href={Routes.email}>akkarh@uw.edu</a> if you
								want to collaborate or just want to reach out.
							</span>
							</p>

							<div className={'buttons'}>
								<a href={"#selectedProjects"}><button className={'abtButton'}>Projects</button></a>
								<a href={Resume} target={"_blank"}><button className={'abtButton'}>Resume</button></a>
							</div>
						</div>
					</div>
					<Footer/>
				</div>
		);
	}
}

export default About;