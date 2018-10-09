import React, { Component } from 'react';
import './Project.css';
import './Koconut.css';

class Koconut extends Component {
	render() {
		let image = "https://raw.githubusercontent.com/harshitha-akkaraju/harshitha-akkaraju.github.io/master/portfolio/src/images/lab-time.JPG";
		return(
				<div>
					<div className={'projHeader'}>
						<div className={'koconutDesc'}>
							<p className={'projTitle'}>Koconut</p>
							<p className={'when'}><em>June 2018 - Present</em></p>
							<p className={'projSummary'}>
								Koconut is an intelligent programming tutor being developed at
								the
								<a href={'http://faculty.washington.edu/ajko/students'}> Code and Cognition Lab</a>,
								an innovation driven research team that produces knowledge in the
								areas computing Education, software engineering and human
								computer interaction.
							</p>
							<div className={'koconutLinks'}>
								<a href={'https://cyberlearning-1d4e0.firebaseapp.com/'}
									 target={'_blank'}><button className={'projButton'}>Website</button></a>
							</div>
						</div>
					</div>

					<div className={'projBody'}>
						<div>
							<p className={'sectionHeading'}>Role</p>

							<p className={'sectionText'}>
								Advised by <a href={'http://benjixie.com/'}>Benjie Xie</a>,
								a PhD student and <a href={'http://faculty.washington.edu/ajko/'}>
								Prof. Andrew J. Ko</a>, I contributed to the <span className={'bolder standout'}>design and
								development of several components</span> of the app including the data
								schema and tools that make it easier to create new content.
								In addition, I also contributed to a research study investigating
								how novices make use of explicit programming strategies and a
								paper accepted to the <a href={'https://sigcse.org/sigcse/'}>SIGCSE conference</a>.
								<br/>

							</p>
							<img src={image} className={'labImage'}/>
							<br/><br/>
						</div>

						<div>
							<p className={'sectionHeading'}>Learnings</p>
							<p className={'sectionText'}>
								<b>Fail fast and Iterate quickly</b>
								<br/>
								Since mixed-initiative programming tutors are still an open
								design space, my work involved a lot of ideating and prototyping
								the interaction design on the application. Sometimes, the
								proposed designs weren’t learner-centric enough either
								(ex: in terms of workflow, labels etc). It was crucial to
								iterate on those ideas quickly in order to produce an app to
								conduct the initial usability tests. I discovered that constantly
								thinking about the users will help me be more critical about
								my ideas.

								<br/>

								<b>Externalize your work</b>
								<br/>
								After each major design or development sprint, my team had the
								opportunity to present our work to the rest of the lab and
								receive feedback on our work. I found these sessions incredibly
								useful because it gave me the chance to articulate the rationale
								for my design choices. These sessions also brought input from
								various perspectives thereby giving us notes for our next
								iteration. I hope to continue to externalize my work in other
								contexts as well.
							</p>
						</div>
					</div>
				</div>
		);
	}
}

export default Koconut;