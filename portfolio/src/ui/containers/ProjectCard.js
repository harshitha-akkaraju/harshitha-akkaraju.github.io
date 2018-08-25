import React, { Component } from 'react';
import './ProjectCard.css';

/// Template for project cards on the landing page
class ProjectCard extends Component {
	render() {
		return(
			<div className={"card projectCard"}>
				<div id={"cardTop"}>
					<img id={"img"}
							 src={this.props.imgURL}
							 alt={this.props.title}
					/>
				</div>
				<div className="card-body">
					<p id={"title"}>{this.props.title}</p>
					<p className="date"><i>{this.props.when}</i></p>
					<p id={"blurb"}>{this.props.blurb}</p>
				</div>
			</div>
		);
	}
}

export default ProjectCard;