import React, { Component } from 'react';
import NavBar from './../components/NavBar';
import Headshot from './../components/Headshot';

import Footer from './../components/Footer';
import './HomeScreen.css';



class HomeScreen extends Component {
	render() {
		return(
				<div>
					<NavBar history={this.props.history}/>
					<div>
						{/* <div className="home-headshot"><Headshot /></div> */}
						<p className={"pitch"}>

							This webpage is currently under construction. Please check back in later!

						
						</p>
					</div>
					<Footer/>
				</div>
		)
	}
}

export default HomeScreen;