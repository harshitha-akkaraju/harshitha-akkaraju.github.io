import React, { Component } from 'react';
import { Link } from "react-router-dom";
import NavBar from './../components/NavBar';
import Footer from './../components/Footer';
import Picture from './../../data/portfolio.jpg';
import './About.css';
import Routes from './../../data/Constants';


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

						<p className={"about"}>
							<span className={"quickIntro"}>Hello, there! <br/> I am Harshitha. </span>

							<span className={"aboutText"}>
								<br/>
								I am a senior studying Informatics,
								combination of systems design and software engineering, at the
								University of Washington in Seattle. I am driven by the
								potential technology offers to create new affordances. I am
								interested in full-stack development and creating solutions using
								the cloud.

								<br/><br/>

								I am passionate about improving equity in STEM and computing
								education. As the Outreach Program Director of <Link to={Routes.project}>UW Society of
								Women Engineers</Link> and the Director of Diversity Efforts of <Link to={Routes.project}>Women in
								Informatics</Link>, I helped organize several events including
								programming workshops, networking events, and a hackathon.

								<br/><br/>

								If you are interested in collaborating with SWE, WINFO or just
								want to reach out email me at <Link to={Routes.email}>akkarh@uw.edu</Link>.
							</span>
						</p>
					</div>
					<Footer/>
				</div>
		);
	}
}

export default About;