import React, { Component } from 'react';
import './Project.css';
import Demo from '../containers/Demo';

class Ohana extends Component {
	render() {
		return(
				<div>
					<div className={'projHeader'}>
						<div className={'projDesc'}>
							<p className={'projTitle'}>Ohana</p>
							<p className={'when'}><em>Spring 2018</em></p>
							<p className={'projSummary'}>
								In Spring 2018, I took Cooperative Software Development taught by
								Microsoft Senior Researcher Andrew Begel. Spanning over 10 weeks,
								our project involved developing a web application and an Amazon
								Alexa skill to manage chores among roommates.
							</p>
							<div className={'projLinks'}>
								<button className={'projButton'}>Website</button>
								<button className={'projButton'}>Demo</button>
							</div>
						</div>
						<img className={'projImg'}
								 alt={'project illustration'}
								 src={'https://raw.githubusercontent.com/harshitha-akkaraju/harshitha-akkaraju.github.io/master/portfolio/src/images/ohana.png'}/>
					</div>


					<div className={'projBody'}>
						<div>
							<p className={'sectionHeading'}>Role</p>
							<p className={'sectionText'}>
								For this project, I owned the <span className={'standout bolder'}> voice interaction design and the
								development of the Alexa skill</span>. I also contributed to the <span className={'standout bolder'}>design
								of the data schema and the web app</span>.
								<br/>
								During the first 3 weeks we spent working on the project, I
								contributed to the user experience design of the web app so that
								it is consistent with the voice interaction model of the Alexa
								skill. I also designed the user data schema such that it is easy
								to read and change upon user’s request through the Alexa skill.
								I spent the remaining 7 weeks linking the Alexa skill with the user
								accounts on the web app, designing the voice interaction model, and
								implementing the task rotation loop among roommates.
								<br/>
								Within this team, my biggest assets were my ability to
								<span className={'bolder standout'}> design for consistency
								across two different interfaces </span> and <span className={'bolder standout'}> being
								resourceful to build the Alexa skill</span> which was originally a
								stretch goal to be part of our MVP.
							</p>
						</div>

						<div>
							<p className={'sectionHeading'}>Challenges</p>
							<p className={'sectionText'}>
								The most challenging part was figuring out how to pair some of
								the different technologies. Connecting the Amazon tech stack
								together was very developer friendly. However, we decided to use
								Google’s Firebase platform for user authentication and storing
								user data. Since we implemented Amazon authentication to get the
								skill, we only had access to the email address associated with
								the Echo device. Hence we had to come up with a clever way to
								read data from and write data to the Firebase database.
								<br/>
								Other challenges included designing a robust voice interaction
								model, testing the functionality of the Alexa skill, scoping
								our project for 10 weeks.
							</p>
						</div>

						<div>
							<p className={'sectionHeading'}>Learnings</p>
							<p className={'sectionText'}>
								<b>Know your tech-stack</b>
								<br/>
								We decided to use Firebase for user authentication and storing
								user generated data. In retrospect, I think we would have been
								able to provide a much more consistent experience if we had used
								Amazon Cognito for user authentication and Amazon DynamoDB for
								storing user data.

								<br/>

								<b>Don’t hesitate to explore new things</b>
								<br/>
								I wanted to use this class as an opportunity to learn new
								technologies (AWS Lambda, Amazon S3, ASK). Inspite of the initial
								friction I faced exploring these tools, seeing the value these
								tools offered sparked my interest in Cloud Computing and
								distributed systems.
							</p>
						</div>
					</div>
				</div>
		);
	}
}

export default Ohana;