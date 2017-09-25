import React, { Component } from 'react';
import rrLogo from '../img/rr_logo.png';

export default class AboutTeam extends Component{
    render(){
        return(
            <div id="aboutSection">
                <div className="container">
                    <div className="row">
                        <div id="aboutTeam" className="col-md-10 mx-auto">
                            <div className="row team-images">
                                <div className="col-md-4">
                                    <img style={{maxHeight: "200px"}} src={rrLogo}/>
                                </div>
                                <div className="col-md-4">
                                    <img style={{maxHeight: "200px"}} src={rrLogo}/>
                                </div>
                            </div>
                            <div className="row about-text">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
    }
}
