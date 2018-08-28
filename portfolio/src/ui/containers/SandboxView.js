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
					<p className={'description'}>
						I like to delve into code and algorithms in my free time.
						<br/>
						Here are some of my recent side projects. For a complete list,
						visit my Github page.
					</p>
					<div className={'projects'}>
						<Section title={'Personal Projects'} props={this.props.history}/>
					</div>
					<Footer/>
				</div>
		);
	}
}

export default SandboxView;