import React, { Component } from 'react';
import NavBar from './../components/NavBar';
import Footer from './../components/Footer';
import Card from './../components/Card';
import Divider from './../components/Divider';

import Routes from './../../data/Constants';
import Resume from './../../data/resume.pdf';
import schema from './../../data/work.json';
import tech from './../../data/skills.json';
// import Skills from './../../data/skills.md';
// import Platforms from './../../data/platforms.md';

class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: "",
            platforms: "",
        }
        // this.loadSkills("skills", Skills);
        // this.loadSkills("platforms", Platforms);
    }

    componentDidMount() {
    //    this.loadSkills("skills", Skills);
    //    this.loadSkills("platforms", Platforms);
    }

    loadSkills = (field, file) => {
        fetch(file)
            .then(async (resp) => {
                let body = await resp.text();
                this.setState({
                    [field]: body
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    formatSkills(field) {
        let values = tech[field];
        let badges = [];
        values.forEach((elem, index) => {
            badges.push(<span key={index} style={{margin: "1%"}} className="badge badge-info badge-div badge-text"><div className="font-weight-light">{elem}</div></span>);
        });
        return badges;
    }

    formatWork() {
        let cards = [];
        schema.work.forEach((exp, index) => {
            cards.push(
                <div key={"exp" + index} style={{ margin: "1.5% 0%" }}>
                    <Card title={exp.title} date={exp.date} tools={exp.tools} links={exp.links} description={exp.description} thumbnail={exp.thumbnail} organization={exp.organization} disabled={true} />
                </div>
            );
        });
        return cards; 
    }

    render() {
        const styles = {
            sectionTitle: {
                "fontWeight": "300",
                "fontSize": "1.2em",
                "color": "#55769A"
            },
            resumeButton: {
                "fontFamily": 'Roboto Slab, serif',
                "fontWeight": "500",
                "backgroundColor": "#fff",
                "fontSize": "1.2em",
                "textDecoration": "none",
            }
        }

        let cards = this.formatWork();
        let langs = this.formatSkills("langs");
        let platforms = this.formatSkills("platforms");

        return (
            <div>
                <NavBar history={this.props.history} />
                <div className={"sandbox-body"}>
                    <div>
                        <div style={styles.sectionTitle}>SKILLS</div>
                        <div>
                            <div>Languages and Frameworks</div>
                            {langs}
                        </div>
                        <div>
                            <div>Platforms</div>
                            {platforms}
                        </div>
                    </div>
                    <div>
                        <div style={styles.sectionTitle}>WORK</div>
                        <div>{cards}</div>
                    </div>

                    <div style={{ width: "1vw", margin: "3% auto" }}><a href={Resume} style={styles.resumeButton}>Resume</a></div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Experience;