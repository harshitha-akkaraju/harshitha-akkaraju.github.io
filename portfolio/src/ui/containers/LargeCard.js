import React, { Component } from 'react';
import './LargeCard.css';

class LargeCard extends Component {
	render() {
		return (
				<div className={"row"}>
					<div className={"shell"}>
						{/*style={{backgroundImage: `url(${this.props.imgURL})`, backgroundSize: 'cover'}}*/}
						<img className={"image"} src={this.props.imgURL} alt={this.props.title}/>
					</div>
					<div className="card-body descShell">
						<p className={"title"}>{this.props.title}</p>
						<div className={"clamp"}>
							<p className={"spDescription"}>{this.props.description}</p>
							<p className="completed">{this.props.completed}</p>
						</div>
					</div>
				</div>
		);
	}
}

export default LargeCard;