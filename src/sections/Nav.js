import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'
// import twitter from '../img/social/twitter.png';
// import facebook from '../img/social/facebook.png';
// import instagram from '../img/social/instagram.png';

class Navigation extends Component {
  componentDidMount(){
    $('.ham-container').click(function(e){
      $('.nav-menu').addClass('show-menu');
    });
    $('.cross-container').click(function(e){
      $('.nav-menu').removeClass('show-menu');
    });
    $('.nav-item').click(function(e){
      $('.nav-menu').removeClass('show-menu');
    });
  }
    render(){
        return(
        <div>
          <nav id="mainNav">
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" style={{color: "white"}} href="#page-top">Revolutionary Robotics</a>
            <div style={{}}className="ham-container" onclick="myFunction(this)">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
            
          </div>
        </nav>
        <div className="nav-menu">
          <ul>
            <li>
              <div className="cross-container">
                <span id="x" style={{textAlign: "right"}}>X</span>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/game">The Game</Link>
            </li>
            <li className="nav-item">
              <Link to="/process">Process</Link>
            </li>
            {/* <li className="nav-item">
              <a className="social" href="#"><img src={twitter}/></a>
              <a className="social" href="#"><img src={facebook}/></a>
              <a className="social" href="#"><img src={instagram}/></a>
            </li> */}
          </ul>
          
        </div>
      </div>
      )
    }
}

export default Navigation;







