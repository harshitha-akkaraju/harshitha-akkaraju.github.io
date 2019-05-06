import React, { Component } from 'react';
import NavBar from './../components/NavBar';
import Footer from './../components/Footer';
import './SandboxView.css';
import Card from './../components/Card';
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
		return (
			<div>
				<NavBar history={this.props.history} />
				<div style={{width: "75%", margin: "auto"}}>
					<Card />
				</div>
				<Footer />
				<div id={"chevron"} className={"chevronbg"} onClick={() => this.scrollToTop()}><i className="fas fa-chevron-up chevron" /></div>
			</div>
		);
	}
}

export default SandboxView;