import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import rrLogo from '../img/rr_logo.png';
import arrow from '../img/white-down-arrow.png';
import homeDepot from '../img/sponsors/THD_logo.jpg';
import mission from '../img/about/our_mission.jpeg';

export default class AboutTeam extends Component{
    render(){
        return(
            <div>
                <div className="aboutHero">
                    <div className="container about-info">
                        <div className="row">
                            <div className="col-12">
                                <img style={{ maxHeight: "400px", maxWidth: "80%"}} src={rrLogo}/>
                                <h1 style={{color: "white"}}><b>About the Team</b></h1>
                                <a href="#link-about"><img width="75px" height="75px" src={arrow} /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <ScrollableAnchor id={'link-about'}>
                <div id="aboutSection">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1 className="about-sub">Our Mission</h1>
                            </div>
                            <div className="col-md-6 text-center">
                                <img className="about-image" style={{ maxHeight: "200px", maxWidth: "100%"}} src={mission}/>
                            </div>
                            <div className="col-md-6 text-left ourSections">
                                <p>Revolutionary Robotics is committed to moving technology forward by creating effective and efficient robotic devices. Our company is dedicated to innovative research and development that supports growth, learning, and service in industry and in our community.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1 className="about-sub">Our Vision</h1>
                            </div>
                            <div className="col-md-6 text-center">
                                <img style={{ maxHeight: "200px", maxWidth: "100%"}} src={rrLogo}/>
                            </div>
                            <div className="col-md-6 text-left ourSections">
                                <p>Continuously outperform the competition through forward thinking and become the leader a bright and well-built future, together.</p>
                            </div>
                        </div>
                        <div className="row virtues">
                            <div className="col-12 text-center">
                                <h1 className="about-sub">Our Virtues</h1>
                                <h4><i>We adhere to eight virtues critical to who we are as a company, as well as individuals</i></h4>
                            </div>
                            <div className="col-md-6 text-center">
                                <h4 className="about-sub"><b>Humility</b></h4>
                                <p>The team must be able to accept mistakes and grow from them.</p>
                            </div>
                            <div className="col-md-6 text-center">
                                <h4 className="about-sub"><b>Tenacity</b></h4>
                                <p>The team must be willing to work through hardship.</p>
                            </div>
                            <div className="col-md-6 text-center">
                                <h4 className="about-sub"><b>Courage</b></h4>
                                <p>The team must be willing to speak up and try new things.</p>
                            </div>
                            <div className="col-md-6 text-center">
                                <h4 className="about-sub"><b>Open-mindedness</b></h4>
                                <p>The team must be willing to listen to other’s ideas and opinions.</p>
                            </div>
                            <div className="col-md-6 text-center">
                                <h4 className="about-sub"><b>Curiosity</b></h4>
                                <p>The team must be able to research goals and find solutions on their own.</p>
                            </div>
                            <div className="col-md-6 text-center">
                                <h4 className="about-sub"><b>Autonomy</b></h4>
                                <p>The team must be capable of working without receiving direct instructions from mentors/coaches.</p>
                            </div>
                            <div className="col-md-6 text-center">
                                <h4 className="about-sub"><b>Altruism</b></h4>
                                <p>The team must be able to recognize other members’ need for help.</p>
                            </div>
                            <div className="col-md-6 text-center">
                                <h4 className="about-sub"><b>Integrity</b></h4>
                                <p>The team must honestly contribute to the team and genuinely seek to help.</p>
                            </div>
                        </div>
                    </div>
                </div>
                </ScrollableAnchor>
                <div className="sponsors">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1 className="about-sub">Our Sponsors</h1>
                            </div>
                            <div className="col-md-6 text-center">
                                <img style={{height: "150px", width: "auto"}} src={homeDepot} />
                            </div>
                            <div className="col-md-6 text-center">
                                <h2>The Mosley Family</h2>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
