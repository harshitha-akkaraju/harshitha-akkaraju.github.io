import React, { Component } from 'react';
import './Card.css';
import Divider from './Divider';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expand: false
        }
    }

    toggleCard = () => {
        this.setState({
            expand: !this.state.expand
        })
    }

    render() {
        let tools = ["AWS lambda", "React"]; // this.props.tools;
        let badges = [];
        tools.forEach((elem, index) => {
            badges.push(<span key={index} className="badge badge-info badge-div badge-text"><div className="font-weight-light">{elem}</div></span>);
        });

        return (
            <div>
                <div className="card">
                    <div className="card-header" onClick={() => { this.toggleCard() }}>
                        <div className="card-action">
                            <div className="card-project-name">
                                 CubeRule -- AWS Cyber Range
                            </div>
                            <span className="font-weight-light">{"October 2018 - June 2019"}</span>
                        </div>
                    </div>
                    {this.state.expand &&
                        <div className="card-body">
                            <div className="card-description">
                                <div>
                                    <p>
                                        ntroducing the next
                                        generation of wireless
                                        Last week over 200,000 people changed
                                        the way they experience texting blah calling.
                                        Today, it's your turn.
                                    </p>
                                    
                                    <div>
                                    <p className={"font-weight-bold text-secondary"}>Technologies</p>
                                        {badges}
                                    </div>
                                    
                                </div>

                            <img src={"https://images-na.ssl-images-amazon.com/images/I/41W1-m6w2%2BL.jpg"}/>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default Card;
