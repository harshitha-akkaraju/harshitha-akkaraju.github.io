import React, { Component } from 'react';
import NavBar from './../components/NavBar';
import Footer from './../components/Footer';
import './SandboxView.css';
import Card from './../components/Card';
import schema from './../../data/projects.json';

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
		let projects = schema.projects;
		let cards = [];
		projects.forEach((project, index) => {
			cards.push(
			<div key={"card" + index} style={{margin: "1.5% 0%"}}><Card title={project.title} date={project.date} tools={project.tools} links={project.links} description={project.description} thumbnail={project.thumbnail} disabled={false}/></div>);
		});

		return (
			<div>
				<NavBar history={this.props.history} />
				<div className={"sandbox-body"}>
					{cards}
				</div>
				<Footer />
				<div id={"chevron"} className={"chevronbg"} onClick={() => this.scrollToTop()}><i className="fas fa-chevron-up chevron" /></div>
			</div>
		);
	}
}

export default SandboxView;