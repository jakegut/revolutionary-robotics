import React, { Component } from 'react';
import crossfire from '../img/crossfire.png'
import bestLogo from '../img/BestLogo.png'

export default class AboutGame extends Component{
    render(){
        return(
            <div className="aboutGame">
            <div className="container">
                <div className="row">
                <div id="aboutTeam" className="col-md-10 mx-auto">
                        <div className="text-center">
                            <h1>About the Game</h1>
                        </div>
                        <div className="row justify-content-center team-images">
                            <div className="col-md-4 col-xs-6 text-center">
                                <img style={{maxHeight: "150px", maxWidth: "100%"}} src={bestLogo}/>
                            </div>
                            <div className="col-md-4 col-xs-6 text-center">
                                <img style={{maxHeight: "150px", maxWidth: "100%"}} src={crossfire}/>
                            </div>
                        </div>
                        <div className="row about-text">
                            <div className="col-12">
                                <div>
                                    <p>Capitol BEST (Boosting Engineering Science and Technology) is a non-profit organization that organizes a yearly engineering contest designed to inspire students towards further studies in the fields of science and engineering. Starting from a box of raw materials, middle school and high school teams of students are given six weeks to design, build, and then demonstrate a remote-controlled machine that will perform a given task. On contest day, teams pit their machines in a head-to-head sports-like competition to see which is “BEST”.</p>
                                    <p>The intent of Capitol BEST is to get kids motivated for studies and careers in engineering, science and technology and introduce them to some of the engineering/scientific methods through mentoring by industry professionals and actual hands-on experience. Real-world engineering is demonstrated while providing an exciting and fun sports-like competition.</p>
                                    <p>This year’s theme is Crossfire, which revolves around fire-fighting. The objective is to build and test a robot to save a “Manikin”, remove dangerous chemicals, and extinguish flames in three minutes. The robot gains points based on whether or not the “Manikin” is saved, how many chemicals are contained correctly, and how much of the flames we extinguish.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
