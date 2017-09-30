import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import rrLogo from '../img/rr_logo.png';

export default class AboutTeam extends Component{
    render(){
        return(
            <div>
            <div className="aboutHero">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <img style={{ maxHeight: "400px", maxWidth: "80%"}} src={rrLogo}/>
                            <h1>About the Team</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div id="aboutSection">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2>Our Mission</h2>
                        </div>
                        <div className="col-md-6 text-center">
                            <img style={{ maxHeight: "200px", maxWidth: "100%"}} src={rrLogo}/>
                        </div>
                        <div className="col-md-6 text-left ourSections">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in elit purus. Maecenas ex tortor, hendrerit et pulvinar vel, tempor rutrum nisl. Fusce varius placerat ultrices. Sed sit amet erat dapibus, condimentum urna a, ullamcorper risus.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2>Our Team</h2>
                        </div>
                        <div className="col-md-6 text-center">
                            <img style={{ maxHeight: "200px", maxWidth: "100%"}} src={rrLogo}/>
                        </div>
                        <div className="col-md-6 text-left ourSections">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in elit purus. Maecenas ex tortor, hendrerit et pulvinar vel, tempor rutrum nisl. Fusce varius placerat ultrices. Sed sit amet erat dapibus, condimentum urna a, ullamcorper risus.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2>Our School</h2>
                        </div>
                        <div className="col-md-6 text-center">
                            <img style={{ maxHeight: "200px", maxWidth: "100%"}} src={rrLogo}/>
                        </div>
                        <div className="col-md-6 text-left ourSections">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in elit purus. Maecenas ex tortor, hendrerit et pulvinar vel, tempor rutrum nisl. Fusce varius placerat ultrices. Sed sit amet erat dapibus, condimentum urna a, ullamcorper risus.</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
