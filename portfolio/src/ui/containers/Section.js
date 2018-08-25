import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Projects from './../../data/Projects';
import SideProjects from './../../data/sandbox/ProjectDescriptions';
import ProjectCard from './ProjectCard';
import './Section.css';

class Section extends Component {
	constructor(props) {
		super(props);

		let content = {};
		let view = "";
		if (this.props.title === this.ProjectTypes.selected) {
			content = Projects;
			view = this.ProjectTypes.selected;
		} else if (this.props.title === this.ProjectTypes.side) {
			content = SideProjects;
			view = this.ProjectTypes.side;
		}

		this.state = {
			content: content,
			view: view
		}
	}

	ProjectTypes = {
		selected: 'Selected Projects',
		side: 'Personal Projects'
	};

	compileSelected() {
		let result = [];
		Object.keys(this.state.content).map((key, index) => {
			let item = this.state.content[key];
			result.push(
					<Link to={`/projects/${item.name}`} key={index}>
						<ProjectCard title={item.name}
												 when={item.when}
												 imgURL={item.imgURL}
												 blurb={item.position}
												 history={this.props.history}/>
					</Link>
			);
		});
		return result;
	}

	compileSide() {
		let result = [];
		Object.keys(this.state.content).map((key, index) => {
			let item = this.state.content[key];
			result.push(
					<a href={item.projectURL} key={index}>
						<ProjectCard title={item.name}
												 when={item.when}
												 imgURL={item.imgURL}
												 blurb={item.position}
												 history={this.props.history}/>
					</a>
			);
		});
		return result;
	}


	render() {
		let list = [];
		if (this.state.view === this.ProjectTypes.selected) {
			list = this.compileSelected();
		} else if (this.state.view === this.ProjectTypes.side) {
			list = this.compileSide();
		}

		return(
				<div id={"sectionBody"}>
					<p id={"heading"}>{this.props.title}</p>
					<div id={"cards"}>
						{list}
					</div>
				</div>
		);
	}
}

export default Section;