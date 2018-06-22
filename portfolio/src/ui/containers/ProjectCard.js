import React, { Component } from 'react';
// import CSS from './ProjectCardCSS';
import './ProjectCard.css';

/// Template for project cards on the landing page
class ProjectCard extends Component {
	render() {
		return(
			<div className={"card"} id={"projectCard"} >
				<div id={"cardTop"}>
					<img id={"img"}
							 src={this.props.imgURL}
							 alt={this.props.title}
					/>
				</div>
				<div className="card-body">
					<h5 id={"title"}>{this.props.title}</h5>
					<p id={"blurb"}>{this.props.blurb}</p>
				</div>
			</div>
		);
	}
}

export default ProjectCard;