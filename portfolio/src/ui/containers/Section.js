import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Orgs from './../../data/Organizations';
import Projects from './../../data/Projects';
import ProjectCard from './ProjectCard';
import './Section.css';

class Section extends Component {
	render() {
		let content = [];
		if (this.props.title === 'Organizations') {
			content = Orgs;
		} else if (this.props.title === 'Projects') {
			content = Projects;
		}
		return(
			<div id={"sectionBody"} className={"container"}>
				<p id={"heading"}>{this.props.title}</p>
				<div id={"cards"}>
					{
						Object.keys(content).map((key, index) => {
							let item = content[key];
							return (
									<Link to={`/projects/${item.name}`} key={index}>
										<ProjectCard title={item.name}
																 imgURL={item.imgURL}
																 blurb={item.position}
																 history={this.props.history}/>
									</Link>
							)
						})
					}
				</div>
			</div>
		);
	}
}

export default Section;