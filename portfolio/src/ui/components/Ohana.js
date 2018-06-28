import React, { Component } from 'react';
import './Ohana.css';
import Demo from '../containers/Demo';

class Ohana extends Component {
	render() {
		const sections = [
			"Problem", "Solution",
			"Architectural Decisions", "Demo", "Takeaways"
		];
		const repoLink = 'https://github.com/INFO461-Team-Go/ohana';

		return(
				<div id={"body"}>
					{/* TODO: Add an image */}

					<div className={"pageHeading"}>
						<p className={"projectName"}>Ohana</p>
						<p className={"caption"}>Spring 2018</p>
					</div>

					<div>
						<p className={"sectionTitle"}>Overview</p>
						<ul>
							{
								sections.map((section, index) => {
									return <li key={index}>{section}</li>
								})
							}
						</ul>
					</div>

					<div>
						<p className={"sectionTitle"}>Problem</p>
						<p>
							As young adults begin to share living spaces away from their
							parents, household chores and tasks can begin to pile up.
							Responsibility starts to wean and finger pointing can start
							to occur. The current methods of house chore and task management
							within roommates is tedious and performed through inconvenient mediums.
							<br/> <br/>
							We set out to reimagine the mundane task of chore management
							as an Amazon Alexa Skill. With our product Ohana, we aimed to
							seamlessly integrate chore management into the lives of young adults.
						</p>
					</div>

					<div>
						<p className={"sectionTitle"}>Solution</p>
						<p>
							Ohana is an Amazon Alexa skill that offers a refreshing way of
							managing chores among roommates. The Ohana web app can be used to
							distribute tasks among roommates. Users can then ask the Alexa
							skill for quick reminders on what to do and record their completed
							tasks.
						</p>
					</div>

					<div>
						<p className={"sectionTitle"}>Architectural Decisions</p>
						<div>
							<p className={"subHeading"}>User Accounts</p>
							<p>
								One of the core requirements for our product include user
								account creation and management. Since my team and I are
								well-versed with Firebase, we were strongly inclined to move
								forward with a Firebase backend for the product. However,
								this posed an additional challenge as I tried associate
								the Ohana user account with a user’s Alexa device.
							</p>
							{/* TODO: Add an Information flow img */}
							<img src={require('./../../data/projects/Ohana/information-flow.png')}
									 alt={'Information flow in Ohana'}
									 className={"inlineFigure"}></img>
							<p>
								I solved this concern by enabling users to link the Ohana skill
								to their Amazon email address. Then they would create an account
								on Ohana web app using their Amazon email address. After
								considering multiple alternatives, I found this to be the
								smoothest, cost-efficient, and user-friendly way to link an
								Alexa device to a user’s account.
							</p>
						</div>

						<div>
							<p className={"subHeading"}>Database Schema</p>
							<p>
								The primary logic for task rotation among roommates is one of
								the crucial functionalities of the app. Given the voice
								interaction model of our app, both retrieving data from Firebase
								and writing data to firebase had to be pretty fast. After much
								deliberation, we designed the following database schema
								for our product.
							</p>
							{/* TODO: Add an Information flow img */}
							<img src={require('./../../data/projects/Ohana/firebase-data-structure.png')}
									 alt={'Firebase database schema'}
									 className={"inlineFigure"}></img>
							<p>
								I reasoned that it would be best to make a separate module to
								handle all the Firebase function calls on for the Alexa skill.
								Although a minor decision, it proved to be a beneficial design
								decision. This made our code a lot more readable and robust
								to handle change.
							</p>
						</div>

						<div>
							<p className={"sectionTitle"}>Demo</p>
							<Demo embedCode={'i6oRzw1Durs?ecver=1'}/>
						</div>

						<div>
							<p className={"sectionTitle"}>Takeaways</p>
							<p>
								Designing and implementing a software project from the ground-up
								taught me several things; here are a few notable takeaways.
							</p>
							{/* TODO: Change the styles on the takeaway and expand on this */}
							<p className={"takeaway"}>
								Well-defined requirements go a long way
							</p>
							<p>
								I learned that having well-defined requirements is key to a
								successful project. I like to think of product requirements as
								a contract among teammates as we are working on the project.
								Thus, having thorough requirements will ensure that everyone on
								the team is working towards the same goal. I found the following
								criteria to be helpful for writing good requirements.
							</p>

							<ul>
								<li>Complete</li>
								<li>Precise</li>
								<li>Non-conflicting</li>
								<li>Verifiable</li>
							</ul>

							<p>
								As I was working on this project, I noticed that requirements
								evolve as we gain a better understanding of our users and
								revise our design decisions accordingly.
							</p>
							{/* TODO: Change the styles on the takeaway and expand on this */}
							<p className={"takeaway"}>
								Deliberate software architecture
							</p>
							<p>
								In class, we discussed the idea of “spaghetti code” – code
								bases where all the encapsulation strategies have failed
								resulting in architectures with multiple cross cutting
								concerns. As I was working on this project, I strived to work
								towards a robust system that would be flexible enough to
								handle change. I found myself spending plenty of time thinking
								about the organization and architecture of our product.
								<br/><br/>
								Our vision for the minimal viable product (MVP) was a usable
								Alexa skill along with a web application. The rationale for a
								web application emerged from my experiences with the voice
								interaction model with Alexa. The voice interface on Alexa
								is not entirely conversational; for something complex like a
								chore management app, a lot of burden might be on the user to
								direct the Alexa skill. Thus, we decided to simplify the user
								experience by dividing our product into two components the
								Alexa skill, and a web app to go along with it.

								I took complete ownership of the Ohana Alexa Skill both as a
								voice interaction designer, and an engineer. There were two main
								parts to the Ohana skill; listening for user input and getting
								Alexa to behave accordingly and interacting with user data on
								Firebase. In architecting code for the Alexa skill, I reasoned
								that it would make the most sense to have two components one
								dealing with the data, and one handling user queries.
							</p>
						</div>

						<a href={repoLink} className={"btn btn-primary"}>View on Github</a>
					</div>
				</div>
		);
	}
}

export default Ohana;