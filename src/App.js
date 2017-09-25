import React, { Component } from 'react';
import Navigation from './sections/Nav.js';
import Hero from './sections/Hero.js';
import Testimony from './sections/Testimony.js';
import AboutTeam from './sections/AboutTeam.js';
import './css/bootstrap.css';
import './App.css';
import './css/creative.css';

class App extends Component {
  render() {
    return (
      <div id="body">
        <Navigation />
      	<Hero />
				<Testimony />
				<AboutTeam />
  		</div>
    );
  }
}

export default App;
