import React, { Component } from 'react';
import NavBar from './../components/NavBar';
import './SandboxView.css';

class SandboxView extends Component {
	render() {
		return(
				<div>
					<NavBar history={this.props.history} />
					<p className={'description'}>I enjoy learning about <i>most</i> things tech. <br/> Here are a few of my side projects.</p>
				</div>
		);
	}
}

export default SandboxView;