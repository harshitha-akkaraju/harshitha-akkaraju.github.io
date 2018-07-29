import React, { Component } from 'react';
import NavBar from './../components/NavBar';
import Footer from './../components/Footer';
import './SandboxView.css';
import Section from './Section';

class SandboxView extends Component {
	render() {
		return(
				<div>
					<NavBar history={this.props.history} />
					<p className={'description'}>I enjoy learning about <i>most</i> things tech. <br/> Here are a few of my side projects.</p>
					<div className={'projects'}>
						<Section title={'Personal Projects'} props={this.props.history}/>
					</div>
					<Footer/>
				</div>
		);
	}
}

export default SandboxView;