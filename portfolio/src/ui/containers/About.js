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
								I am an aspiring software engineer. I would like to shape the design and development of customer facing software. I have experience with full-stack web development and
								data analysis. I am studying Informatics with a focus in CS fundamentals, HCI and Data Science at the University of Washington in Seattle. I avidly follow tech podcasts; my favorite ones are <a href="https://softwareengineeringdaily.com">Software Engineering Daily </a>
								and <a href="https://thewomenintechshow.com/">The Women in Tech Show</a>.


								<br/><br/>

								 I feel strongly 
								about improving equity in STEM and computing education. 
								As a student leader in the <a href="https://www.uwswe.com/">UW Society of Women Engineers </a>
								and <a href="https://winfo.ischool.uw.edu">Women in Informatics</a>, I help organize several events including
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