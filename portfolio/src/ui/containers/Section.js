import React, { Component } from 'react';
import Orgs from './../../data/Organizations';
import ProjectCard from './ProjectCard';
import './Section.css';

class Section extends Component {
	render() {
		let content = [];
		// TODO: Add info for projects
		if (this.props.title === 'Organizations') {
			content = Orgs;
		}
		return(
			<div id={"sectionBody"} className={"container"}>
				<p id={"heading"}>{this.props.title}</p>
				<div id={"cards"}>
					{
						Object.keys(content).map((key, index) => {
							let item = content[key];
							return (<ProjectCard key={index} title={item.name}
																			imgURL={item.imgURL}
																			blurb={item.position}/>)
						})
					}
				</div>
			</div>
		);
	}
}

export default Section;