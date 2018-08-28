import React, { Component } from 'react';
import './LargeCard.css';

class LargeCard extends Component {
	render() {
		return (
				<div className={"row"}>
					<div className={"shell"}>
						<img className={"image"} src={this.props.imgURL}/>
					</div>
					<div className="card-body descShell">
						<p className={"title"}>{this.props.title}</p>
						<p className={"spDescription"}>{this.props.description}</p>
						<p className="completed">{this.props.completed}</p>
					</div>
				</div>
		);
	}
}

export default LargeCard;