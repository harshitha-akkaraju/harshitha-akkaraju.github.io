import React, { Component } from 'react';
import NavBar from './../components/NavBar';
import Footer from './../components/Footer';
import './SandboxView.css';
import Section from './Section';
import Routes from './../../data/Constants';

class SandboxView extends Component {
	componentDidMount() {
		window.addEventListener('scroll', this.renderChevron);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.renderChevron);
	}

	renderChevron() {
		if (document.documentElement.scrollTop > 350) {
			document.querySelector("#chevron").style.display = 'block';
		} else {
			document.querySelector("#chevron").style.display = 'none';
		}
	}

	scrollToTop() {
		window.scrollTo(0, 0)
	}

	render() {
		return(
				<div>
					<NavBar history={this.props.history} />
					<div id={"chevron"} className={"chevronbg"} onClick={() => this.scrollToTop()}><i className="fas fa-chevron-up chevron"/></div>
					<p className={'description'}>
						I like to delve into code and algorithms in my free time.
						<br/>
						Here are some of my recent side projects. Visit my <a href={Routes.github}>Github</a> page to see more.
					</p>
					<div className={'projects'}>
						<Section title={'Sandbox'} props={this.props.history}/>
					</div>
					<Footer/>
				</div>
		);
	}
}

export default SandboxView;