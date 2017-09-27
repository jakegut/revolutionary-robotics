import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import rrLogo from '../img/rr_logo.png';

export default class AboutTeam extends Component{
    render(){
        return(
        <ScrollableAnchor id={'about'}>
            <div id="aboutSection">
                <div className="container">
                    <div className="row">
                        <div id="aboutTeam" className="col-md-10 mx-auto">
                            <div className="text-center">
                                <h1>About the Team</h1>
                            </div>
                            <div className="row justify-content-center team-images">
                                <div className="col-md-4 text-center">
                                    <img style={{maxHeight: "200px", maxWidth: "100%"}} src={rrLogo}/>
                                </div>
                                <div className="col-md-4 text-center">
                                    <img style={{maxHeight: "200px", maxWidth: "100%"}} src={rrLogo}/>
                                </div>
                            </div>
                            <div className="row about-text">
                                <div className="col-12">
                                    <div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque felis tellus, vehicula id eros id, aliquet dapibus neque. Vivamus accumsan, eros at posuere porttitor, turpis libero blandit orci, quis ultricies diam nisl sit amet erat. Duis eu augue at augue volutpat fermentum ut at libero. Ut egestas vestibulum quam. Fusce at orci ac lorem gravida pretium eu at dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam nec arcu lobortis, ullamcorper purus ac, aliquam elit. Nam pellentesque pharetra posuere.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dictum viverra pharetra. Aliquam scelerisque nisl fringilla hendrerit elementum. Ut eget est erat. Aenean ut feugiat dui. Vestibulum non posuere neque. Donec et sodales orci. Maecenas id massa lobortis, scelerisque massa blandit, ornare velit.</p>
                                        <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam ullamcorper tempus lobortis. Praesent ut velit eu libero lobortis ullamcorper. Curabitur eget massa risus. Fusce convallis faucibus mauris. Nulla ac pharetra neque. Duis pretium, massa at maximus bibendum, urna sapien euismod est, et sollicitudin ligula neque eu nisl. Ut et ligula consectetur, interdum urna in, pretium metus. Pellentesque dignissim mi id nunc blandit cursus. Praesent nec leo nisi. Mauris malesuada eu arcu sed sodales.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollableAnchor>
        )
    }
}
