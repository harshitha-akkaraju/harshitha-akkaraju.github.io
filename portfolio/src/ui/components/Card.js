import React, { Component } from 'react';
import './Card.css';
import Markdown from 'react-markdown';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expand: this.props.disabled
        }
    }

    toggleCard = () => {
        this.setState({
            expand: !this.state.expand
        })
    }

    render() {
        let tools = this.props.tools;
        let badges = [];
        tools.forEach((elem, index) => {
            badges.push(<span key={index} className="badge badge-info badge-div badge-text"><div className="font-weight-light">{elem}</div></span>);
        });

        let links = this.props.links;
        let linkBadges = [];
        links.forEach((elem, index) => {
            linkBadges.push(<a href={elem.link} key={"link-" + index} className="badge link-badge badge-light badge-div badge-text"><div className="font-weight-light text-dark">{elem.alt}</div></a>);
        });

        return (
            <div>
                <div className="card">
                    <div className="card-header bg-light" onClick={() => { if (!this.props.disabled) { this.toggleCard()} }}>
                        <div className="card-action">
                            <div className="card-project-name">
                                 {this.props.title}
                                 <span style={{float: 'right'}}>{this.props.organization}</span>
                            </div>
                            <span className="font-weight-light">{this.props.date}</span>
                        </div>
                    </div>
                    {this.state.expand &&
                        <div className="card-body">
                            <div className="card-description">
                                <div>
                                    <div>
                                    <Markdown source={this.props.description}/>
                                    </div>

                                    <div style={{margin: "2% 0"}}>
                                        {linkBadges}
                                    </div>

                                    <div>
                                        <p className={"font-weight-bold text-secondary"}>Technologies</p>
                                        {badges}
                                    </div>
                                    
                                </div>

                            <img src={this.props.thumbnail}/>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default Card;
