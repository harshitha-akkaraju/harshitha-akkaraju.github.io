import React, { Component } from 'react';
// import Demo from '../containers/Demo';
import './Project.css';
import './Coino.css';

class Coino extends Component {
	render() {
		const sections = [
			"App Idea", 'User Stories',
			"Wireframes", "Demo", "Takeaways"
		];

		const figmaLink = 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/02KTRivUDa4TEsoLD7i74Emy/HiOS';
		const repoLink = 'https://github.com/carowa/hios-project';

		return(
				<div className={'projBody'}>
					{/* TODO: Add an image */}

					<div className={"projSection"}>
						<p className={"projectName"}>Coino</p>
						<p className={"caption"}>Winter 2018</p>
					</div>

					<div className={"projSection"}>
						<p className={"sectionTitle"}>Introduction</p>
						<p>
							In Winter 2018, I took iOS Development taught by
							Smartsheet Director Ted Neward. As our final project for the quarter,
							my team and I worked on designing and developing Coino,
							a simple cryptocurrency tracker.
						</p>
					</div>

					<div className={"projSection"}>
						<p className={"sectionTitle"}>Overview</p>
						<ul>
							{
								sections.map((section, index) => {
									return <li key={index}>{section}</li>
								})
							}
						</ul>
					</div>

					<div className={"projSection"}>
						<p className={"sectionTitle"}>App Idea</p>
						<p>
							Coino provides an easy way to view cryptocurrencies and get alerts
							based on price changes, without the need to login to an external
							service.
						</p>
						<p>
							Since we will not be requiring any form of user authentication on
							our app, we needed an API that did not operate on access tokens. We
							decided to go with the Coinmarketcap API.
						</p>
					</div>

					<div className={"projSection"}>
						<p className={"sectionTitle"}>User Stories</p>
						<ul>
							<li>
								As a user, I want to be able to look at the current value of
								cryptocurrencies so that I can monitor the market trends.
							</li>
							<li>
								As a user, I want to create alerts so that I can be notified
								when specific cryptocurrencies reach a certain price.
							</li>
							<li>
								As a user, I want to create alerts so that I can be notified
								when specific cryptocurrencies’ price changes by a certain
								percentage.
							</li>
							<li>
								As a user, I want to see the amount cryptocurrencies have
								changed over certain periods of time (hour, day, week).
							</li>
							<li>
								As a user, I want to be able to search and ‘favorite’ new
								cryptocurrencies so that I can keep track of new, popular
								currencies that come about.
							</li>
						</ul>
					</div>

					<div className={"projSection"}>
						<p className={"sectionTitle"}>Wireframes</p>
						<iframe className={'wireframes'} src={figmaLink}
										allowFullScreen/>
					</div>

					<div className={"projSection"}>
						<p className={"sectionTitle"}>Demo</p>
						<p>Placeholder</p>
					</div>

					<div className={"projSection"}>
						<p className={"sectionTitle"}>Takeaways</p>
						<p>Placeholder</p>

						<a href={repoLink} className={"btn btn-primary"}>View on Github</a>
					</div>
				</div>
		);
	}
}

export default Coino;