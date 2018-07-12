import React, { Component } from 'react';
import './Demo.css'

class Demo extends Component {
	render() {
		const youtube = 'https://www.youtube.com/embed/';
		let videoSrc = youtube + this.props.embedCode;
		return(

				<div className={"demo"}>
					<iframe src={videoSrc} className={"frame"} title={"demo"}></iframe>
				</div>
		)
	}
}

export default Demo;